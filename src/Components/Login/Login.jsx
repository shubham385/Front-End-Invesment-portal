import React from "react";
import "../Login/Login.css";
import "../../App.css";
import { Link } from "react-router-dom";
// import logo from "../../LoginAssets/bird_2.jpg";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import video from "../../LoginAssets/video2.mp4";

export const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">PeakPortFolios</h2>
            <p>Your way to success!!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">New?? Way to success!!</span>
            <Link to={"/Register"}>
              <button className="btn" style="Color:black;">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            {/* <img src={logo} alt="Logo Image" /> */}
            <h3>Welcome Back!!</h3>
          </div>

          <form action="" className="form grid">
            <span className="inputDiv">
              <button type="submit" className="btn flex" style="background-color:#AAD7D9;color:white;">
                Login with Google
              </button>
            </span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button type="submit" className="btn flex" style="background-color:#AAD7D9;color:white;">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
      <a href="/Dashboard">Dashboard</a>
      <br/>
      <a href="/">Home</a>
    </div>
  );
};
