import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";

export default function ShoppingGuidePage(props) {
  return (
    <>
      <Head>
        <title>Hướng Dẫn Mua Hàng - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div className="wrapper">
        <div className="support-detail">
          <h1>Hướng dẫn mua hàng</h1>
        </div>
        <div className="support-detail">
          <h1>Phương thức đặt hàng</h1>
        </div>
        <div className="support-infor">
          <h3>- Đặt hàng online tại website: https://beeyou.com.vn/</h3>
          <h3>- Đặt hàng thông qua tổng đài miễn phí: 0901 70 70 11</h3>
          <h3>
            - Đặt hàng trực tiếp trên Facebook:
            https://www.facebook.com/ThoiTrangBeeYou/
          </h3>
        </div>
      </div>
    </>
  );
}
