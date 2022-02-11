import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ParallaxScrolling from "../components/HomeComponent/ParallaxScrolling";
import { DataContext } from "../store/GlobalState";
import { FloatingLabel, Form } from "react-bootstrap";
import AddressInput from "../components/AddressInput";
import { useRouter } from "next/router";
import { postData } from "../utils/fecthData";
import { toast } from "react-toastify";

function CheckoutsPage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const router = useRouter();

  useEffect(() => {
    if (!auth.token) {
      router.push("/account/signin");
    }
  }, [auth.token, router]);

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/gio-hang");
    }
  }, [cart, router]);

  const [subTotal, setSubTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(40000);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState("delivery");
  const [shippingAddress, setShippingAddress] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setSubTotal(res);
    };

    getTotal();
  }, [cart]);

  useEffect(() => {
    const res = subTotal + shippingPrice;
    setTotal(res);
  }, [subTotal, shippingPrice]);

  const handleSubmit = async () => {
    if (name && phone && total !== 0) {
      dispatch({
        type: "NOTIFY",
        payload: { loading: true },
      });
      const res = await postData(
        "orders/create",
        {
          name: name,
          phone: phone,
          address: shippingAddress,
          cart: cart,
          shippingPrice: shippingPrice,
          totalPrice: total,
          deliveryMethod: shipping,
        },
        auth.token
      );

      if (res.msg) {
        dispatch({
          type: "NOTIFY",
          payload: {},
        });
        toast.success(res.msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        dispatch({ type: "ADD_CART", payload: [] });

        router.push("/");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Thanh toán đơn hàng - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section
        className="wrapper paddingTop30 "
        style={{ marginBottom: "30px" }}
      >
        <div className="row">
          <div className="col-7">
            <div className="order-main">
              <div className="main-header">
                <Link href="/">
                  <a className="logo">
                    <h1 className="logo-text">BeeYou</h1>
                  </a>
                </Link>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/gio-hang">
                      <a>Giỏ hàng</a>
                    </Link>
                  </li>

                  <li className="breadcrumb-item breadcrumb-item-current">
                    Thông tin vận chuyển
                  </li>
                </ul>
              </div>
              <div className="main-content">
                <h2 className="section-title">Thông tin thanh toán</h2>
                <div className="logged-in-customer-information">
                  <div className="logged-in-customer-information-avatar-wrapper">
                    <div className="logged-in-customer-information-avatar gravatar"></div>
                  </div>
                  {auth.user ? (
                    <p className="logged-in-customer-information-paragraph">
                      {auth.user.lastName} {auth.user.firstName}
                      <br></br>
                      {auth.user.email}
                    </p>
                  ) : null}
                </div>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Họ và tên"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Họ và tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Số điện thoại"
                  className="mb-4"
                >
                  <Form.Control
                    type="text"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FloatingLabel>

                <div className="shipping-form">
                  <div className="radio-wrapper content-box-now">
                    <label className="radio-label">
                      <div className="radio-input">
                        <input
                          type="radio"
                          id="customer_pick_at_location_false"
                          name="customer_pick_at_location"
                          className="input-radio"
                          value="delivery"
                          checked={shipping === "delivery"}
                          onChange={(e) => setShipping(e.target.value)}
                        />
                      </div>
                      <span className="radio-label-primary">Giao hàng</span>
                    </label>
                  </div>
                  {shipping === "delivery" && (
                    <AddressInput setShippingAddress={setShippingAddress} />
                  )}

                  <div className="radio-wrapper content-box-now">
                    <label className="radio-label">
                      <div className="radio-input">
                        <input
                          type="radio"
                          id="customer_pick_at_location_false"
                          name="customer_pick_at_location"
                          className="input-radio"
                          value="at shop"
                          checked={shipping === "at shop"}
                          onChange={(e) => {
                            setShipping(e.target.value);
                            setShippingAddress({});
                          }}
                        />
                      </div>
                      <span className="radio-label-primary">
                        Nhận tại của hàng
                      </span>
                    </label>
                  </div>

                  {shipping === "at shop" && (
                    <div className="store-list content-box-now">
                      <span>Không tìm thấy thông tin cửa hàng</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="order-sidebar">
              <div className="product-list">
                <table className="product-table">
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="product-thumbnail">
                          <Image
                            width={70}
                            height={70}
                            src={item.variant[item.indexVariant].img}
                            alt="GIAO HÀNG TOÀN QUỐC"
                          />

                          <span className="badge rounded-pill product-quantity">
                            1
                          </span>
                        </td>
                        <td className="product-description">
                          <span>{item.title}</span>
                          <span>
                            {item.variant[item.indexVariant].title +
                              (item.indexSize !== -1
                                ? "- size: " + item.size[item.indexSize]
                                : "")}
                          </span>
                        </td>
                        <td className="product-price">
                          <span>
                            {(item.quantity * item.price)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            ₫
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className=" sale-code-input">
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Mã giảm giá"
                  className="sale-code"
                >
                  <Form.Control
                    type="text"
                    placeholder="Mã giảm giá"
                    style={{ height: "45px" }}
                  />
                </FloatingLabel>
                <button className="btn btn-outline-secondary" type="button">
                  Sử dụng
                </button>
              </div>

              <div className="total-price">
                <table className="total-line-table">
                  <tbody>
                    <tr className="total-line total-line-subtotal">
                      <td className="total-line-name">Tạm tính</td>
                      <td className="total-line-price">
                        <span className="order-summary-emphasis">
                          {subTotal
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₫
                        </span>
                      </td>
                    </tr>

                    <tr className="total-line total-line-shipping">
                      <td className="total-line-name">Phí ship</td>
                      <td className="total-line-price">
                        <span className="order-summary-emphasis">
                          {shippingPrice === 0 ? "—" : shippingPrice}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="total-line-table-footer">
                    <tr className="total-line">
                      <td className="total-line-name payment-due-label">
                        <span className="payment-due-label-total">
                          Tổng tiền
                        </span>
                      </td>
                      <td className="total-line-name payment-due">
                        <span className="payment-due-currency">VND</span>
                        <span className="payment-due-price">
                          {total
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₫
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div
                className=""
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button className="btn-pay" onClick={handleSubmit}>
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutsPage;
// s
