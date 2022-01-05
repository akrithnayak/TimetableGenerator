import React from "react";
import "./signup.css";
import book from "././images/book.png";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div>
      <div id="bigBox">
        <div id="box"></div>
        <div id="box2"></div>
      </div>

      <div id="bigBox1">
        <div id="box3"></div>
        <div id="box4"></div>
        <div id="box5"></div>
      </div>

      <div id="bigBox2">
        <div id="box6"></div>
        <div id="box7"></div>
      </div>

      <div id="bigBox3">
        <div id="box8"></div>
        <div id="box9"></div>
        <div id="box10"></div>
        <div id="box11"></div>
      </div>
      <div class="bg_circles">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="circle-4"></div>
      </div>
      <div class="overlay"></div>

      <div class="main">
        <section class="home_section align-item-center active" id="home">
          <div class="container">
            <div class="row align-item-center">
              <div class="home_text">
                <h1>SignUp</h1>
                <h2 class="gradient-text">Name</h2>
                <input type="text" name="name" class="login_txt" />
                <h2 class="gradient-text">Password</h2>
                <input type="text" name="passwrd" class="login_txt" />
                <h2 class="gradient-text">Email</h2>
                <input type="email" name="email" class="login_txt" />
                <br />
                <p class="btn link_item">Create Account</p>
                <Link to="/login">
                  <p class="btn link_item">Login</p>
                </Link>
              </div>
              <div class="home_img">
                <div class="img_box">
                  <img src={book} alt="profile_img" class="book" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default signup;
