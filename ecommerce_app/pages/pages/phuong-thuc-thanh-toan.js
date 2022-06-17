import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";

export default function PaymentMethodsPage(props) {
  return (
    <>
      <Head>
        <title>Phương Thức Thanh Toán - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div className="wrapper">
        <div className="support-detail">
          <h1>Phương thức thanh toán</h1>
        </div>
        <div className="support-infor">
          <h4>Phương thức thanh toán</h4>
          <h3>
            Để thuận tiện nhất cho các khách hàng khi mua sản phẩm tại beeyou,
            chúng tôi đưa ra 2 phương thức thanh toán như sau:{" "}
          </h3>
          <ul>
            <li>Thanh toán bằng tiền mặt (COD)</li>
            <h3>
              Quý khách hàng có thể thanh toán tiền mặt 100% giá trị sản phẩm
              cho người vận chuyển sau khi nhận hàng.
            </h3>
            <li>Thanh toán trực tuyến (ATM, Visa, Mastercard)</li>
            <h3>
              Chỉ cần thực hiện những thao tác đơn giản theo chỉ dẫn bên dưới,
              quý khách sẽ hoàn thành việc thanh toán một cách nhanh chóng và an
              toàn nhất.
            </h3>
          </ul>
        </div>
      </div>
    </>
  );
}
