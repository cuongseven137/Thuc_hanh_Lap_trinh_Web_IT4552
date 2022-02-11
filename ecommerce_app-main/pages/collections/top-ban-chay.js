import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import { getData } from "../../utils/fecthData";
import ProductList from "../../components/ProductComponent/ProductList";
import ProductAccordion from "../../components/ProductComponent/ProductAccordion";

function hotProduct(props) {
  return props.collection ? (
    <>
      <Head>
        <title>Top bán chạy - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section className="">
        <div className="wrapper">
          <Row>
            <Col xs={3}>
              <ProductAccordion />
            </Col>
            <Col>
              <div className="collection-header">
                <h1>Top bán chạy</h1>
                <p>
                  Hơn 10.000 mẫu thiết kế từ hàng trăm Designer toàn quốc, với
                  chất liệu bền đẹp, tốt nhất trên thị trường, hình ảnh in siêu
                  sắc nét, không bong tróc, không trầy xước, không phai màu.
                </p>
                <LazyLoadImage
                  effect="blur"
                  width="100%"
                  src="https://res.cloudinary.com/beeyou/image/upload/v1636945692/banner/marble-banner_1024x1024_feolzg.webp"
                  alt="BeeYou - Thời trang Chất"
                />
              </div>
              <div className="collection-products paddingTop30">
                <ProductList products={props.collection}></ProductList>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  ) : null;
}
export default hotProduct;

export const getServerSideProps = async () => {
  const res = await getData(`products/hot?limit=12`);

  return {
    props: { collection: res },
  };
};
