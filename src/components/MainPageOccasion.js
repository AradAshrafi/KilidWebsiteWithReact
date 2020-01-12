import React, { Component } from "react";

export default class MainPageOccasion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.occasion
    };
  }

  render() {
    let price = this.state.price / 10000000000;
    let price_per_meter = Math.round(
      this.state.price / this.state.area / 10000000
    );

    console.log(this.state);
    return (
      <a href={`occasion/${this.state.id}`}>
        <div className="occasion">
          <div
            className="introduction"
            style={{
              backgroundImage: `url(${this.state.pic.image})`
            }}
          >
            <div className="occasion-location">
              {this.state.location.locality}
            </div>
            <div className="occasion-title">{this.state.title}</div>
          </div>
          <div className="information">
            <div className="image-footer">
              <span>۱ روز پیش</span>
              <span> {this.state.bedrooms} خوابه </span>
              <span> {this.state.area} </span>
              <span> {this.state.type} </span>
            </div>
            <div className="size-price">
              <span> قیمت: {price}ملیارد تومان</span>
              <span> مترمربع: {price_per_meter} ملیون تومان </span>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
