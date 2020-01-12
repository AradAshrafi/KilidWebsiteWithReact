import React, { Component } from "react";
import Header from "./components/Header";
import Axios from "axios";

export default class Occasion extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get("http://hallows.ir/house/" + id).then(res => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <Header />

        {/* Start of Occasion Page */}
        <div class="">
          <div class="right-panel">
            <div class="right-panel-top">
              <span class="house-code">کد ملک</span>
              <span class="upload-time">۲ ساعت پیش</span>
            </div>
            <div class="right-panel-middle">
              <h2 class="right-panel-title">خرید آپارتمان فلان</h2>
              <span>قیمت : </span>
              <span>قیمت هر مترمربع : </span>
            </div>
            <div class="right-panel-bottom">
              <p>مسکونی</p>
              <p>دو خوابه</p>
              <p>۶۵ متر</p>
              <p>پارکینگ ۱ عدد</p>
            </div>
            <div class="right-panel-footer">
              <span>صاد </span>
              <span>آقای نوروزی</span>
            </div>
          </div>
          <div class="left-panel">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
