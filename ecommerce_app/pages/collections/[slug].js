import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import ReactPaginate from "react-paginate";
import { getData } from "../../utils/fecthData";
import ProductList from "../../components/ProductComponent/ProductList";
import Loading from "../../components/SystemNotifiComponent/Loading";
import filterSearch from "../../utils/filterSearch";
import ProductAccordion from "../../components/ProductComponent/ProductAccordion";

function CollectionPage(props) {
  const [filter, setFilter] = useState("title-ascending");

  const router = useRouter();
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
    filterSearch({ router, sort_by: e.target.value });
  };
  return (
    <>
      <Head>
        <title>{props.collection.title + " - BeeYou"}</title>
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
                <h1>{props.collection.title}</h1>
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
                <Form.Group
                  controlId="formGridState"
                  className="collection-filter"
                >
                  <Form.Label>Sắp xếp</Form.Label>
                  <Form.Select value={filter} onChange={handleChangeFilter}>
                    <option value="best-selling">Sản phẩm bán chạy</option>
                    <option value="title-ascending">
                      Theo bảng chữ cái từ A-Z
                    </option>
                    <option value="title-descending">
                      Theo bảng chữ cái từ Z-A
                    </option>
                    <option value="price-ascending">Giá từ thấp tới cao</option>
                    <option value="price-descending">
                      Giá từ cao tới thấp
                    </option>{" "}
                    <option value="created-descending">Mới nhất</option>
                    <option value="created-ascending">Cũ nhất</option>
                  </Form.Select>
                </Form.Group>

                <ProductList products={props.products}></ProductList>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
export default CollectionPage;

export const getServerSideProps = async ({ params, query }) => {
  const sort_by = query.sort_by || "title-ascending";

  const res = await getData(`collections/${params.slug}?sort_by=${sort_by}`);

  if (res.err) {
    return {
      notFound: true,
    };
  }

  return {
    props: { collection: res.category, products: res.products },
  };
};
