import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CollectionsSlider from "../components/HomeComponent/CollectionsSlider";
import HomeFeaturedProducts from "../components/HomeComponent/HomeFeaturedProducts";
import { Col, Row } from "react-bootstrap";
export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>BeeYou - Thời trang chất</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <>
        <section className="thumbnail" style={{ width: "100%" }}>
          <LazyLoadImage
            effect="blur"
            width="1600px"
            height="628px"
            src="https://res.cloudinary.com/beeyou/image/upload/v1636946304/banner/slideshow_1_skpyk4.png"
            alt="BeeYou Collection"
          />
        </section>
        <CollectionsSlider></CollectionsSlider>
        <section className="home-policy paddingTop30">
          <div className="wrapper">
            <Row md={3} xs={1}>
              <Col>
                <div className="policy-item">
                  <div className="policy-icon">
                    <Image
                      width={64}
                      height={64}
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945718/logo/policy_icon_1_xlnjtq.png"
                      alt="GIAO HÀNG TOÀN QUỐC"
                    />
                  </div>
                  <div className="policy-title">GIAO HÀNG TOÀN QUỐC</div>
                  <div className="policy-desc">
                    Có hình thức Giao hàng khi thanh toán (COD)
                  </div>
                </div>
              </Col>
              <Col>
                <div className="policy-item">
                  <div className="policy-icon">
                    <Image
                      width={64}
                      height={64}
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945720/logo/policy_icon_2_cxcdcl.png"
                      alt="CHẤT LƯỢNG ĐẢM BẢO"
                    />
                  </div>
                  <div className="policy-title">CHẤT LƯỢNG ĐẢM BẢO</div>
                  <div className="policy-desc">
                    Chất liệu cao cấp, mực in thân thiện môi trường
                  </div>
                </div>
              </Col>
              <Col>
                <div className="policy-item">
                  <div className="policy-icon">
                    <Image
                      width={64}
                      height={64}
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945722/logo/policy_icon_3_iiujly.png"
                      alt="ĐỔI TRẢ DỄ DÀNG"
                    />
                  </div>
                  <div className="policy-title">ĐỔI TRẢ DỄ DÀNG</div>
                  <div className="policy-desc">
                    Trả lại hàng nếu không ưng ý
                  </div>
                </div>
              </Col>
            </Row>
            <div className="policy-grid "></div>
          </div>
        </section>

        <section className="home-banner paddingTop30">
          <div className="wrapper">
            <div className="banner-grid">
              <div className="banner-item">
                <Link href="/collections/all">
                  <a>
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945666/banner/banner_img_1_gesrdh.webp"
                      alt="BeeYou - Thời trang Chất"
                    />
                  </a>
                </Link>
              </div>
              <div className="banner-item">
                <Link href="/collections/all">
                  <a>
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945683/banner/banner_img_3_fyx2rc.jpg"
                      alt="BeeYou - Thời trang Chất"
                    />
                  </a>
                </Link>
              </div>
              <div className="banner-item">
                <Link href="/collections/all">
                  <a>
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945681/banner/banner_img_2_mzcdd7.webp"
                      alt="BeeYou - Thời trang Chất"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <HomeFeaturedProducts></HomeFeaturedProducts>
      </>
    </>
  );
}
