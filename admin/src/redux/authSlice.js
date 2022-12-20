import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "admin",
    initialState: {
        login:{
            currentUser: null,
            isFetching: false,
            error: false
        },
        register:{
            isFetching: false,
            error: false,
            success: false
        },
        // // LogOut
        // logout: {
        //     isFetching: false,
        //     error: false
        // }
    },
    reducers:{
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess:(state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
            alert("Tài Khoản hoặc Mật Khẩu không chính xác!!!!");
        },

        // Resgister
        
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess:(state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
            alert("Đăng Ký Thàng Công!!!");
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
            alert("Vui lòng nhập tên Đăng Nhập hoặc Email khác!!!!");
        },

        // Logout

        logOutStart: (state) => {
            state.login.isFetching = true;
        },
        logOutSuccess:(state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logOutFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

    }
});


export const {
    loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
    logOutStart,
    logOutSuccess,
    logOutFailed
} = authSlice.actions;

export default authSlice.reducer;