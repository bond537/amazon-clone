import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="Home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Prime/XCM_Manual_1279892_1436048_US_gw_desk_tall_cozy_up_en_1x_revised_3506690_1500x600_en_US._CB416514924_.png"
          alt="bleeding hero"
        />
        <div className="home-row">
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._AC_UL160_.jpg"
            rating={5}
          />
          <Product
            title="Kit Cat Klock Gentlemen The Original (Classic Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/51MwHeLSx2L._AC_SY879_.jpg"
            rating={3}
            price={30.75}
          />
        </div>
        <div className="home-row">
          <Product
            title="Ninja OS101 Foodi Pressure Cooker and Air Fryer"
            price={129.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/410QLbTnUUL._AC_SY240_.jpg"
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/71c%2BZE2oMrL._AC_SX522_.jpg"
            title="Sunco Lighting 10 Pack WiFi LED Smart Bulb, BR30, 8W, Color Changing (RGB & CCT), Dimmable, 650 LM, Compatible with Amazon Alexa & Google Assistant - No Hub Required"
            price={120.99}
            rating={4}
          />

          <Product />
        </div>
        <div className="home-row">
          <Product />
        </div>
        <div className="home-row"></div>
      </div>
    </div>
  );
}

export default Home;
