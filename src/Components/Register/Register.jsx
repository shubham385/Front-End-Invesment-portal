import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import video from '../../LoginAssets/video2.mp4'


export const Register = () => {
  return (
    <div className="registerPage flex" style='background-color:#E4F1FF;'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">PeakPortFolios</h2>
            <p>Your way to success!!!</p>
          </div>

          <div className="footerDiv flex">
          <span className="text">Have an account??</span>
          <Link to={"/Login"} >
            <button className="btn" style="Color:black;">Login</button>
          </Link>
          </div>
        </div>

        <div className="formDiv flex">
          {/* <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!!</h3>
          </div> */}

          <form action="" className="form grid">
      
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder="Enter Email" />
              </div>
            </div>

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

            <button type="submit" className="btn flex"  style="background-color:#AED2FF;color:black;">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
