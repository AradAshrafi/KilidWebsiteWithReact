import React, { Component } from "react";
import MainPageMag from "./MainPageMag";
import MainPageOccasion from "./MainPageOccasion";
import Header from "./Header";
import Axios from "axios";
import "./styles/main-page.css";
import "./styles/header.css";

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Mags: [],
      Occasions: []
    };
  }

  componentDidMount() {
    Axios.get("http://hallows.ir/mags")
      .then(res => {
        this.setState({ Mags: res.data.items.slice(0, 3) }); // slice only three mags to display
        console.log(this.state);
      })
      .catch(err => console.log(err));
    Axios.get("http://hallows.ir/occasion")
      .then(res => {
        this.setState({ Occasions: res.data.items });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        {/* <!-------------------- Search Box -----------------> */}
        <div className="container">
          <div className="search-wrapper">
            <div className="searchBar-title">کیلید، سامانه هوشمند مسکن</div>
            <br />
            <div className="price-buttons">
              <a href="#kharid" className="price-button">
                خرید
              </a>
              <a href="#rahn" className="price-button">
                رهن و اجاره
              </a>
              <a href="#gheimat" className="price-button">
                قیمت خانه شما؟
              </a>
            </div>
            <div className="search-bar">
              <div className="search-bar-container">
                <div className="search-bar-inputs">
                  <button>
                    <i
                      className="fa fa-map-marker location-icon"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <input type="text" name="city" value="تهران" />
                  <i className="fa fa-angle-down arrow-down"></i>
                  <input
                    type="text"
                    name="mantaghe"
                    placeholder="نام محله، منظقه یا ایستگاه مترو"
                  />
                </div>
              </div>
              <div className="search-button">
                <i className="fa fa-search"></i>
              </div>
              <br />
              <span style={{ color: "white" }}>جستجوی پیشرفته</span>
            </div>
          </div>
        </div>
        {/* <!------------ End OF Search Box ------------>

         <!----------- Magezine and stuff ------------> */}
        <div className="info">
          <div className="evaluation">
            <div className="section-right">
              <h2 className="title">بازار مسکن را ارزیابی کنید</h2>
              <div className="description">
                در بازار مسکن، داشتن اطلاعات و داده های دقیق «طلایی ترین فرصتها»
                را برای خریداران و سرمایه گذاران فراهم می کند. در کیلید این داده
                ها و اطلاعات پردازش شده و نتیجه پردازش در اختیار مشترکان کیلید
                قرار می گیرد. با تحلیل گذشته و رصد کردن امروز بازار مسکن، خانه
                آینده را بسازید.
              </div>
              <button className="info-btn">اطلاعات بازار مسکن</button>
            </div>
            <div className="section-left">
              <img src={require("./styles/Pics/Maskan.png")} alt="Maskan:)" />
            </div>
          </div>
          <div className="magazines">
            <h2 className="title">مجله کلید را بخوانید</h2>
            <p className="description">
              کارشناسان کیلید، در مجله "کیلید" شما را با مهم ترین مسائل بازار
              مسکن آشنا می کنند. این مجله، مبتنی بر بررسی های علمی و آماری،
              اخبار و تحلیل های آینده بازار مسکن را در اختیارتان قرار می دهد.
            </p>
            <div className="pictures">
              {/* <!-- Here Will be filled using Ajax :) --> */}
              {this.state.Mags.map(mag => (
                <MainPageMag key={mag.id} mag={mag} />
              ))}
            </div>
            <button className="info-btn">مطالب بیشتر</button>
          </div>
          {/* <!------------------ End Of Evaluation ------------------> */}
        </div>

        {/* <!---------------------- Occasions ----------------------> */}
        <div id="occasions">
          <h2 className="title">اکازیون های امروز کلید</h2>
          {/* <!-- To be filled with Ajax Call --> */}
          {this.state.Occasions.map(occasion => (
            <MainPageOccasion key={occasion.id} occasion={occasion} />
          ))}
        </div>

        {/* <!--------------------- Page Footer ----------------------> */}
        <div className="footer">
          <div className="contacts">
            <a href="^_^">
              <i className="fa fa-paper-plane"></i>
            </a>
            <a href="^_^">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="^_^">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="^_^">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="footer-links footer-links1">
            <a href="#11">خرید</a>
            <a href="#12">رهن و اجاره</a>
            <a href="#13">جستجو روی نقشه</a>
            <a href="#14">ثبت رایگان آگهی</a>
            <a href="#15">قیمت خانه شما</a>
            <a href="#16">اطلاعات بازار مسکن</a>
            <a href="#17">آژانس های املاک</a>
            <a href="#18">سامانه مشاورین</a>
          </div>
          <div className="footer-sponsors">
            <img src={require("./styles/Pics/logo.png")} alt="logo1" />
            <img src={require("./styles/Pics/eanjoman.jpg")} alt="logo2" />
            <img src={require("./styles/Pics/logo3.png")} alt="logo3" />
            <img src={require("./styles/Pics/ecunion-logo.png")} alt="logo4" />
          </div>
          <div className="footer-links footer-links2">
            <a href="#aboutUs">درباره ی کیلید</a>
            <a href="#contactUs"> تماس با ما </a>
            <a href="#OurMag">کیلید مگ</a>
            <a href="#app">اپلیکیشن موبایل</a>
            <a href="#siteMap">نقشه ی سایت</a>
            <a href="#projects">پروژه ها</a>
          </div>
          <div>
            <a className="footer-kilid-logo" href="">
              <img src={require("./styles/Pics/kilid.svg")} alt="its an svg" />
            </a>
          </div>
          <p className="footer-kilid-address">
            تهران، خیابان وزرا، کوچه نهم، پلاک ۲۶
          </p>
          <span className="footer-kilid-address">>۰۲۱-۷۵۰۷۱۰۰۰</span>

          <div className="footer-locations-container">
            <div className="footer-locations">
              <span className="customer-purpose">خرید</span>
              <div className="locations">
                <a href="#tehranpars">تهرانپارس</a>
                <a href="">پونک</a>
                <a href="">بلوار فردوس</a>
                <a href="">سعادت آباد</a>
                <a href="">نواب</a>
                <a href="">پاسداران</a>
                <a href="">شهرک غرب</a>
                <a href="">ستارخان</a>
                <a href="">ونک</a>
                <a href="">مرزداران</a>
              </div>
            </div>
            <div className="footer-locations">
              <span className="customer-purpose">اجاره</span>
              <div className="locations">
                <a href="">تهرانپارس</a>
                <a href="">پونک</a>
                <a href="">بلوار فردوس</a>
                <a href="">سعادت آباد</a>
                <a href="">نواب</a>
                <a href="">پاسداران</a>
                <a href="">شهرک غرب</a>
                <a href="">ستارخان</a>
                <a href="">ونک</a>
                <a href="">مرزداران</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              کلیه حقوق این سایت متعلق به شرکت کلان داده شهر فناوران می‌باشد
            </span>
            <a href="">حریم خصوصی</a>
            <a href="">شرایط استفاده</a>
          </div>
        </div>
      </div>
    );
  }
}
