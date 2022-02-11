import React, { useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import { getData } from "../../utils/fecthData";
import Tabs from "../../components/MyTabs/Tabs";
import Panel from "../../components/MyTabs/Panel";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import { toast } from "react-toastify";

export const getServerSideProps = async ({ params: { slug } }) => {
  const res = await getData(`products/${slug}`);
  if (!res.product) {
    return { notFound: true };
  }
  return {
    props: { product: res.product },
  };
};

export default function ProductDetail({ product }) {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [indexVariant, setIndexVariant] = useState(0);
  const [indexSize, setIndexSize] = useState(product.size.length > 0 ? 0 : -1);
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    let tmp = count + 1;
    setCount(tmp);
  };
  const handleDecrease = () => {
    let tmp = count - 1;
    setCount(tmp);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product, cart, count, indexVariant, indexSize));

    toast.success("Đã thêm vào giỏ hàng", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <Head>
        <title>{product.title + " - BeeYou"}</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling />
      <section className="wrapper">
        <div className="row product-detail">
          <div className="col-5">
            <div className="details-img-product">
              <ul className="small-image-product">
                {product.variant.map((item, index) => (
                  <li key={index} className="details-thumbnail-item">
                    <Image
                      width={78}
                      height={78}
                      src={item.img}
                      alt={item.title}
                      onClick={() => setIndexVariant(index)}
                    />
                  </li>
                ))}
              </ul>
              <div className="details-main-img">
                <Image
                  width={374}
                  height={374}
                  src={product.variant[indexVariant].img}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="box-detail">
              <h2>{product.title}</h2>
              <p>
                <span>
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  ₫
                </span>
              </p>
              <p className="infor-details">{product.shortDescription}</p>
              <div className="detail-title-infor">
                <p>Biến thể</p>
                <select
                  className="select-details"
                  value={indexVariant}
                  onChange={(e) => {
                    setIndexVariant(parseInt(e.target.value));
                  }}
                >
                  {product.variant.map((item, index) => (
                    <option key={index} value={index}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              {product.size.length > 0 ? (
                <div className="detail-title-infor">
                  <p>Size</p>
                  <select
                    className="select-details"
                    value={indexSize}
                    onChange={(e) => {
                      setIndexSize(e.target.value);
                    }}
                  >
                    {product.size.map((item, index) => (
                      <option value={index} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="detail-title-infor">
                <p>Số lượng</p>
                <div className="number-product">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleDecrease()}
                    disabled={count === 1 ? true : false}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleIncrease()}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="details-cart"
                onClick={() => handleAddToCart()}
              >
                <span>Mua ngay</span>
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="detail-infor-ship">
              <div className="infor-ship-all">
                <p>SẢN PHẨM NÀY SẼ TỚI TAY BẠN CHỈ TRONG 2-4 NGÀY LÀM VIỆC</p>
                <ul className="border-ship">
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945718/logo/policy_icon_1_xlnjtq.png"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>GIAO HÀNG TOÀN QUỐC</p>
                      <p>Có hình thức Giao hàng khi thanh toán (COD)</p>
                    </div>
                  </li>
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945720/logo/policy_icon_2_cxcdcl.png"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>CHẤT LƯỢNG ĐẢM BẢO</p>
                      <p>Chất liệu cao cấp, mực in thân thiện môi trường</p>
                    </div>
                  </li>
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945722/logo/policy_icon_3_iiujly.png"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>ĐỔI TRẢ DỄ DÀNG</p>
                      <p>Trả lại hàng nếu không ưng ý</p>
                    </div>
                  </li>
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945725/logo/policy_icon_4_su5xtn.webp"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>HOTLINE HỖ TRỢ</p>
                      <p>
                        Gọi ngay{" "}
                        <a href="tel:0867064901">
                          <b>0867 064 901</b>
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="wrapper paddingTop30"
        style={{ paddingBottom: "30px" }}
      >
        <div className="row">
          <div className="col-9">
            <Tabs
              class="detail-tab-panel"
              classSelected="detail-tab-panel-selected"
            >
              <Panel title="Mô tả sản phẩm">{product.description}</Panel>
              <Panel title="Bình luận"></Panel>
            </Tabs>
          </div>
          <div className="col-3">
            <Image
              width={273}
              height={665}
              layout="fixed"
              src="https://res.cloudinary.com/beeyou/image/upload/v1636945662/banner/banner_doc_f2_vqpv2v.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
