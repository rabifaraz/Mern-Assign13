import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialBar from "./SocialBar";

const SideForm = ({ title, description, submitHandler }) => {

  return (
    <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
    <div className="sign-in-from">
        <h1 className="mb-0">{title}</h1>
        <p>{description}</p>
        <form className="mt-4" onSubmit={submitHandler}>
            {title == 'Sign Up' && <div className="form-group">
                <label className="form-label" htmlFor="exampleInputEmail1">Your Full Name</label>
                <input type="text" className="form-control mb-0" name="name" id="exampleInputEmail1" placeholder="Your Full Name" />
            </div>}
            <div className="form-group">
                <label className="form-label" htmlFor="exampleInputEmail2">Email address</label>
                <input type="email" className="form-control mb-0" name="email" id="exampleInputEmail2" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control mb-0" name="password" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="d-inline-block w-100">
                <div className="form-check d-inline-block mt-2 pt-1">
                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                    {title == 'Sign Up' ? <label className="form-check-label" htmlFor="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
                    : <label className="form-check-label" htmlFor="customCheck1">Remember Me</label>}
                </div>
                <button type="submit" className="btn btn-primary float-end">{title}</button>
            </div>
            <div className="sign-info">
                {title == 'Sign Up' ? <span className="dark-color d-inline-block line-height-2">Already Have Account ? <Link to="/signin">Log In</Link></span> 
                :
                <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="/signup">Sign up</Link></span>
                }
                <SocialBar />
            </div>
        </form>
    </div>
</div>
  );
};

export default SideForm;

