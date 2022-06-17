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
  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const router = useRouter();
  /*
    			Posts fetching happens after page navigation,
    			so we need to switch Loading state on Router events.
    		*/
  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  const pagginationHandler = (page) => {
    if (page.selected >= 0) {
      filterSearch({ router, page: page.selected + 1 });
    }
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
    filterSearch({ router, sort_by: e.target.value });
  };
  return props.collection ? (
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

                {isLoading ? (
                  <Loading />
                ) : (
                  <ProductList
                    products={props.collection.product}
                  ></ProductList>
                )}
              </div>
              <div className="my-pagination">
                <ReactPaginate
                  containerClassName={"pagination justify-content-center"}
                  previousLabel={"<<"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextLabel={">>"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakLabel={"..."}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  activeClassName={"active"}
                  initialPage={props.currentPage - 1}
                  pageCount={props.pageCount}
                  marginPagesDisplayed={6}
                  pageRangeDisplayed={3}
                  onPageChange={pagginationHandler}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  ) : null;
}
export default CollectionPage;

export const getServerSideProps = async ({ params, query }) => {
  const page = query.page || 1;
  const sort_by = query.sort_by || "title-ascending";

  const res = await getData(
    `tags/${params.slug}?page=${page}&sort_by=${sort_by}`
  );
  // const data = await res.json();

  if (!res.category) {
    return {
      notFound: true,
    };
  }
  //Math.ceil(res.category.totalProduct)
  return {
    props: {
      res,
      collection: res.category,
      page: res.page,
      pageCount: 2,
    },
  };
};
