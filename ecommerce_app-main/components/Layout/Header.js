import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Mainmenu from "./Mainmenu";
import { DataContext } from "../../store/GlobalState";
import Cookie from "js-cookie";
import { Dropdown, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function Header() {
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: process.env.BASE_URL });
    localStorage.removeItem("firstLogin");
    localStorage.removeItem("__next__cart__beeyou");
    dispatch({ type: "AUTH", payload: {} });

    toast.success("Đã đăng xuất", {
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
  };

  const loggerRouter = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="dropdown-cus">
          <i className="fas fa-user"></i>
          Chào, {auth.user.firstName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link href="/don-hang-cua-toi" passHref>
            <Dropdown.Item>Thông tin đơn hàng</Dropdown.Item>
          </Link>
          <Link href="/account" passHref>
            <Dropdown.Item>Thông tin tài khoản</Dropdown.Item>
          </Link>
          <Link href="/doi-mat-khau" passHref>
            <Dropdown.Item>Đổi mật khẩu</Dropdown.Item>
          </Link>

          <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  return (
    <header>
      <div className="wrapper">
        {/* <nav className="mobie-nav">
          <div className="">
            <button type="button" className="mobile-menu-btn">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <div className="mobile-logo">
            <a href="#">
              <Image
                src="https://res.cloudinary.com/beeyou/image/upload/v1635431347/logo/logo_q5eftl.webp"
                alt="BeeYou - Thời trang Chất"
                width={80}
                height={80}
                layout="fixed"
              />
            </a>
          </div>
          <div className="mobile-cart-btn">
            <a href="#" className="">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </div>
        </nav> */}
        <div className="header-info">
          <div className="contact-info">
            <p>
              <i className="fab fa-whatsapp"></i>
              <span>Chăm sóc khách hàng:</span>
              <a href="tel:0867064901">
                <strong>0867064901</strong>
              </a>
            </p>
            <p>
              <i className="fa fa-credit-card"></i>
              <span>Mua hàng online:</span>
              <a href="tel:0867064901">
                <strong>0867064901</strong>
              </a>
            </p>
          </div>
          <div className="header-logo">
            <Link href="/">
              <a>
                <Image
                  width={80}
                  height={80}
                  src="https://res.cloudinary.com/beeyou/image/upload/v1635431347/logo/logo_q5eftl.webp"
                  alt=""
                />
              </a>
            </Link>
          </div>

          <div className="menu-meta">
            <Form className="form-search">
              <Form.Control
                type="text"
                placeholder="Tìm kiếm..."
              ></Form.Control>
              <Button>
                <i className="fas fa-search"></i>
              </Button>
            </Form>
            <ul>
              <li>
                {Object.keys(auth).length === 0 ? (
                  <Link href="/account/signin">
                    <a>
                      <i className="fas fa-user"></i>
                      Đăng nhập
                    </a>
                  </Link>
                ) : (
                  loggerRouter()
                )}
              </li>
              <li>
                <Link href="/gio-hang">
                  <a>
                    <i className="fas fa-shopping-cart"></i>
                    Giỏ hàng ({cart.length})
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Mainmenu></Mainmenu>
    </header>
  );
}

export default Header;
