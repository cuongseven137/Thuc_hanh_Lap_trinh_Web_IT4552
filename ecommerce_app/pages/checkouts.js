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
        <title>Thanh to??n ????n h??ng - BeeYou</title>
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
                      <a>Gi??? h??ng</a>
                    </Link>
                  </li>

                  <li className="breadcrumb-item breadcrumb-item-current">
                    Th??ng tin v???n chuy???n
                  </li>
                </ul>
              </div>
              <div className="main-content">
                <h2 className="section-title">Th??ng tin thanh to??n</h2>
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
                  label="H??? v?? t??n"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="H??? v?? t??n"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="S??? ??i???n tho???i"
                  className="mb-4"
                >
                  <Form.Control
                    type="text"
                    placeholder="S??? ??i???n tho???i"
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
                      <span className="radio-label-primary">Giao h??ng</span>
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
                        Nh???n t???i c???a h??ng
                      </span>
                    </label>
                  </div>

                  {shipping === "at shop" && (
                    <div className="store-list content-box-now">
                      <span>Kh??ng t??m th???y th??ng tin c???a h??ng</span>
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
                            alt="GIAO H??NG TO??N QU???C"
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
                            ???
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
                  label="M?? gi???m gi??"
                  className="sale-code"
                >
                  <Form.Control
                    type="text"
                    placeholder="M?? gi???m gi??"
                    style={{ height: "45px" }}
                  />
                </FloatingLabel>
                <button className="btn btn-outline-secondary" type="button">
                  S??? d???ng
                </button>
              </div>

              <div className="total-price">
                <table className="total-line-table">
                  <tbody>
                    <tr className="total-line total-line-subtotal">
                      <td className="total-line-name">T???m t??nh</td>
                      <td className="total-line-price">
                        <span className="order-summary-emphasis">
                          {subTotal
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ???
                        </span>
                      </td>
                    </tr>

                    <tr className="total-line total-line-shipping">
                      <td className="total-line-name">Ph?? ship</td>
                      <td className="total-line-price">
                        <span className="order-summary-emphasis">
                          {shippingPrice === 0 ? "???" : shippingPrice}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="total-line-table-footer">
                    <tr className="total-line">
                      <td className="total-line-name payment-due-label">
                        <span className="payment-due-label-total">
                          T???ng ti???n
                        </span>
                      </td>
                      <td className="total-line-name payment-due">
                        <span className="payment-due-currency">VND</span>
                        <span className="payment-due-price">
                          {total
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ???
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
                  ?????t h??ng
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
