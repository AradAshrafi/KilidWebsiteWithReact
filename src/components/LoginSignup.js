import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/config.css";
import "./styles/log-reg.css";

export default class LoginSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginORsignup: true
    };
  }

  onLoginSignupClick = e => {
    e.preventDefault();
    this.setState({ loginORsignup: !this.state.loginORsignup });
  };

  render() {
    return (
      <div class="page-container">
        <div class="log-reg-panel">
          <div class="cancel-icon">
            <a href="index.html">
              <i class="fa fa-times"></i>
            </a>
          </div>
          <div class="right-purple-pane">
            <div class="log-reg-panel-img">
              <img src="Pics/footer-purple-log-reg.svg" alt="logo ^_^" />
            </div>
          </div>
          <div class="main-pane-container">
            <div class="main-pane">
              {this.state.loginORsignup ? (
                // Login is Here --------->
                <React.Fragment>
                  <div class="nav-bar">
                    <span class="active">ورود</span>
                    <span class="deactive">
                      <Link to="/loginSignup" onClick={this.onLoginSignupClick}>
                        ثبت‌نام
                      </Link>
                    </span>
                  </div>
                  <form class="form">
                    <input
                      class="input"
                      placeholder="شماره همراه یا ایمیل"
                      type="text"
                    />
                    <input
                      class="input"
                      placeholder="رمز عبور"
                      type="password"
                    />
                    <div class="forget-password">
                      رمز عبور را <a href="#">فراموش کرده‌اید؟</a>
                    </div>
                    <input class="button" value="ارسال" type="button" />
                  </form>
                </React.Fragment>
              ) : (
                // sign up is here ---------->
                <React.Fragment>
                  <div class="nav-bar">
                    <span class="deactive">
                      <Link to="/loginSignup" onClick={this.onLoginSignupClick}>
                        ورود
                      </Link>
                    </span>
                    <span class="active">ثبت‌نام</span>
                  </div>
                  <form class="form">
                    <input class="input" placeholder="نام" type="password" />
                    <input
                      class="input"
                      placeholder="نام خانوادگی"
                      type="password"
                    />
                    <input
                      class="input"
                      placeholder="شماره همراه یا ایمیل"
                      type="text"
                    />
                    <input
                      class="input"
                      placeholder="رمز عبور"
                      type="password"
                    />
                    <input type="checkbox" />
                    <span class="newsletter">دریافت خبرنامه</span>
                    <span class="rules-agreement">
                      ثبت نام به معنای قبول <a>قوانین و مقررات</a> است
                    </span>
                    <input class="button" value="ارسال" type="button" />
                  </form>
                </React.Fragment>
              )}
            </div>
            <div class="log-reg-panel-img">
              <img src="Pics/footer-white-log-reg.svg" alt="logo ^_^" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
