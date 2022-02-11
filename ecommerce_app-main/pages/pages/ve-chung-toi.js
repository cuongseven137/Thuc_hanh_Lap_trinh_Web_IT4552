import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";

export default function AboutUsPage(props) {
  return (
    <>
      <Head>
        <title>Giới thiệu - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div className="wrapper">
        <div className="support-detail">
          <h1>Giới thiệu</h1>
        </div>
        <div className="support-infor">
          <h6>
            Với cộng đồng nhà thiết kế, chúng tôi là ngôi nhà thời trang,nơi
            chắp cánh cho hàng vạn mẫu thiết kế của các Designer trên khắp
            Vietnam.
          </h6>
          <h6>
            Với khách hàng, BeeYou là nơi bạn dễ dàng tìm thấy những những sản
            phẩm thời trang thể hiện CHẤT của riêng mình. Là chính mình cùng
            BeeYou.
          </h6>
          <h6>
            Với đội ngũ lâu năm kinh nghiệm, có tâm với nghề, những dòng sản
            phẩm của BeeYou được tuyển chọn những nguyên vật liệu cao cấp nhất,
            gia công tinh xảo, công nghệ tối tân nhất hiện nay, được kiểm tra
            chất lượng đầu ra khắt khe.
          </h6>
          <h6>
            Chúng tôi cam kết mang đến sự hài lòng tối đa với mỗi sản phẩm đến
            tay bạn.
          </h6>
        </div>
      </div>
    </>
  );
}
