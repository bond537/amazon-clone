import React from "react";
import "./Home.css";
import Product from "./Product.js";
import Footer from "./Footer.js";

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
            title="Marvel’s Spider-Man: Miles Morales Launch Edition – PlayStation 5"
            id="123"
            price={49.88}
            image="https://m.media-amazon.com/images/I/71CqfmZX3PL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="456"
            title="Kit Cat Klock Gentlemen The Original (Classic Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/51MwHeLSx2L._AC_SY879_.jpg"
            rating={3}
            price={30.75}
          />
        </div>
        <div className="home-row">
          <Product
            id="789"
            title="Ninja OS101 Foodi Pressure Cooker and Air Fryer"
            price={99.09}
            rating={2}
            image="https://m.media-amazon.com/images/I/410QLbTnUUL._AC_SY240_.jpg"
          />
          <Product
            id="321"
            image="https://images-na.ssl-images-amazon.com/images/I/71c%2BZE2oMrL._AC_SX522_.jpg"
            title="Sunco Lighting 10 Pack WiFi LED Smart Bulb, BR30, 8W, Color Changing (RGB & CCT), Dimmable, 650 LM, Compatible with Amazon Alexa & Google Assistant - No Hub Required"
            price={120.99}
            rating={4}
          />

          <Product
            id="12312"
            image="https://m.media-amazon.com/images/I/81iR0aGNJ5L._AC_UY654_FMwebp_QL65_.jpg"
            title="Cyberpunk 2077 - PlayStation 4"
            price={59.99}
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="2312314"
            image="https://m.media-amazon.com/images/I/81iR0aGNJ5L._AC_UY654_FMwebp_QL65_.jpg"
            title="Cyberpunk 2077 - PlayStation 4"
            price={59.99}
            rating={5}
          />
        </div>
        <div className="home-row"></div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Home;
