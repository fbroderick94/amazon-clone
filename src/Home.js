import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        <Product
          id="1234"
          title="OnePlus 8"
          price={899.99}
          image="https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png"
          rating={5}
        />
        <Product
          id="1234"
          title="OnePlus 8"
          price={899.99}
          image="https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="1234"
          title="OnePlus 8"
          price={899.99}
          image="https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png"
          rating={5}
        />
        <Product
          id="1234"
          title="OnePlus 8"
          price={899.99}
          image="https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png"
          rating={5}
        />
        <Product
          id="1234"
          title="OnePlus 8"
          price={899.99}
          image="https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="OnePlus 8"
          price={899.99}
          image="https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
