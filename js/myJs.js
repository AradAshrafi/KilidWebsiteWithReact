$(document).ready(function() {
  // Fill Mag
  $.get("http://hallows.ir/mags", function(data) {
    $.map(data.items, function(mag, i) {
      if (i < 3) {
        title = mag.title.slice(0, 25);
        $(".magazines .pictures").append(
          '<a href="#">' +
            "<div><img src=" +
            mag.image +
            "alt=" +
            mag.id +
            "/></div>" +
            "<span>" +
            title +
            "...</span>" +
            "</a>"
        );
      }
    });
  });

  // Fill Occasions
  $.ajax({
    method: "GET",
    url: "http://hallows.ir/occasion",
    dataType: "json"
  }).done(function(data) {
    $.map(data.items, function(occasion, i) {
      price = occasion.price / 1000000000;
      price_per_meter = Math.round(occasion.price / occasion.area / 1000000);
      console.log(occasion);
      $("#occasions").append(
        '<a href="' +
          occasion.id +
          '">\
          <div class="occasion">\
            <div class="introduction">\
              <div class="occasion-location">' +
          occasion.location.locality +
          '</div>\
              <div class="occasion-title">' +
          occasion.title +
          '</div>\
            </div>\
            <div class="information">\
              <div class="image-footer">\
                <span>' +
          "۱ روز پیش" +
          "</span>\
                <span>" +
          occasion.bedrooms +
          "خوابه" +
          "</span>\
                <span>" +
          occasion.area +
          "متر" +
          "</span>\
                <span>" +
          occasion.type +
          '</span>\
              </div>\
              <div class="size-price">\
                <span>' +
          "قیمت:" +
          price +
          "ملیون تومان" +
          "</span>\
                <span>" +
          "مترمربع: " +
          price_per_meter +
          " ملیون تومان" +
          "</span>\
              </div>\
            </div>\
          </div>\
        </a>"
      );
    });
  });
});
