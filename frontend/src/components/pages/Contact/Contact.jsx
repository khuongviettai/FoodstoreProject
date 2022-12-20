import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Result =() =>{
    return(
        <p>Gửi Thành Công</p>
    )
}


const Contact = () => {
    

    const [result, showResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_azdh6u8', 'template_r3ouf4r', form.current, 'fYxKM9qKZDgyWjYoc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
      showResult(true);
    }

    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Thông tin liên hệ</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assets/Contact/contact.png" alt="Contact Us" height="300px" width="300px"/>
                    </div>
                    <div className="col-md-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label for="exampleForm" className="form-label" >Họ và Tên</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="" name="fullName"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" >Số điện Thoại Liên Hệ</label>
                                <input type="number" className="form-control" placeholder="0123456789" name="phone" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" >Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label" >Nội dung</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name= "message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-dark" value="Send">Sent</button>   
                            <div className="row">{result ? <Result /> : null} </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;