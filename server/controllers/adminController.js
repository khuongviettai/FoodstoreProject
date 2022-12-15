const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


let refreshTokens = [];

const adminController = {
  //REGISTER
  registerAdmin: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      //Create new user
      const newAdmin = await new Admin({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      //Save user to DB
      const admin = await newAdmin.save();
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  generateAccessToken: (admin) => {
    return jwt.sign(
      {
        id: admin.id,
        isAdmin: admin.isAdmin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "365d" }
    );
  },

  generateRefreshToken: (admin) => {
    return jwt.sign(
      {
        id: admin.id,
        isAdmin: admin.isAdmin,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "365d" }
    );
  },

  //LOGIN
  loginAdmin: async (req, res) => {
    try {
      const admin = await Admin.findOne({ username: req.body.username });
      if (!admin) {
        res.status(404).json("Incorrect username");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        admin.password
      );
      if (!validPassword) {
        res.status(404).json("Incorrect password");
      }
      if (admin && validPassword) {
        //Generate access token
        const accessToken = adminController.generateAccessToken(admin);
        //Generate refresh token
        const refreshToken = adminController.generateRefreshToken(admin);
        refreshTokens.push(refreshToken);
        //STORE REFRESH TOKEN IN COOKIE
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure:false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...others } = admin._doc;
        res.status(200).json({ ...others, accessToken, refreshToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  requestRefreshToken: async (req, res) => {
    //Take refresh token from user
    const refreshToken = req.cookies.refreshToken;
    //Send error if token is not valid
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, admin) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      //create new access token, refresh token and send to admin
      const newAccessToken = adminController.generateAccessToken(admin);
      const newRefreshToken = adminController.generateRefreshToken(admin);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure:false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    });
  },

  //LOG OUT
  logOut: async (req, res) => {
    //Clear cookies when user logs out
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    res.clearCookie("refreshToken");
    res.status(200).json("Logged out successfully!");
  },
};

module.exports = adminController;
