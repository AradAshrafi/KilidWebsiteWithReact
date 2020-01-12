import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div class="sticky-header">
        <div class="logo-image">
          <img
            src={require("./styles/Pics/site-logo.png")}
            alt="Kilid Logo Here!"
          />
        </div>
        <div class="nav-bar">
          <ul>
            <li>
              <a href="#1">خرید</a>
            </li>
            <li>
              <a href="#2">رهن و اجاره</a>
            </li>
            <li>
              <a href="#3">جستجو روی نقشه</a>
            </li>
            <li>
              <a href="#4">ثبت رایگان آگهی</a>
            </li>
            <li>
              <a href="#5">قیمت خانه شما</a>
            </li>
            <li>
              <a href="#6">اطلاعات بازار مسکن</a>
            </li>
            <li>
              <a href="#7">آژانس‌های املاک</a>
            </li>
            <li>
              <a href="#8">سامانه مشاورین</a>
            </li>
          </ul>
        </div>
        <div class="reg-log">
          <Link to="/loginSignup"> ورود / ثبت‌نام</Link>
        </div>
      </div>
    );
  }
}
