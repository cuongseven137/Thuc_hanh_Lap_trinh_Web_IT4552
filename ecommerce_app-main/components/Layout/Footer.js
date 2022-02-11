import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer(props) {
  return (
    <footer>
      <div className="foot-content">
        <div className="ft-bg-overlay"></div>
        <div className="wrapper">
          <div className="footer-grid">
            <div className="footer-grid-item">
              <ul>
                <h3>Hỗ Trợ Khách Hàng</h3>

                <li>
                  <Link href="/pages/huong-dan-mua-hang">
                    <a>Hướng dẫn mua hàng</a>
                  </Link>
                </li>

                <li>
                  <Link href="/pages/phuong-thuc-thanh-toan">
                    <a>Phương thức thanh toán</a>
                  </Link>
                </li>

                <li>
                  <Link href="/pages/chinh-sach-bao-hanh-va-doi-tra">
                    <a>Chính sách bảo hành và đổi trả</a>
                  </Link>
                </li>

                <li>
                  <Link href="/pages/chinh-sach-bao-mat">
                    <a>Chính sách bảo mật</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <ul className="footer-contact no-bullets">
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <div className="footer-address">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  233 Nguyễn Văn Đậu, P.11, Q.Bình Thạnh
                </div>
                <div className="footer-tel">
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                  <a href="tel:0901 70 70 11">0901 70 70 11</a>
                </div>
                <div className="footer-email">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:cskh@beeyou.com.vn"> cskh@beeyou.com.vn </a>
                </div>
              </ul>
            </div>
            <div className="footer-grid-item">
              <div className="footer-subscribe">
                <h3>ĐĂNG KÝ NHẬN TIN</h3>
                <p>Tin khuyến mãi / Tin thương hiệu</p>
                <form action="" className="contact-form" method="post">
                  <div className="subscribe-form">
                    <input type="email" placeholder="Nhập email của bạn" />
                    <button type="submit">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-grid-item">
              <ul className="footer-social">
                <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                <p>Mạng xã hội</p>
                <div className="ft-social-network">
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a href="https://www.instagram.com/beeyou_fashion/">
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a href="https://www.youtube.com/channel/UCM2Yk3Hhyqzni-p_TTlPtdQ">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </ul>
            </div>
            <div className="footer-grid-item">
              <ul className="footer-certification no-bullets">
                <h3>CHỨNG NHẬN</h3>

                <a href="" target="_blank">
                  <Image
                    width={134}
                    height={51}
                    src="https://res.cloudinary.com/beeyou/image/upload/v1636949541/logo/footer_payment_logo_1_m63ztj.webp"
                    alt="BeeYou - Thời trang Chất"
                  />
                </a>

                <a href="#" target="_blank">
                  <Image
                    width={134}
                    height={51}
                    src="https://res.cloudinary.com/beeyou/image/upload/v1636949568/logo/footer_payment_logo_2_ewcpai.webp"
                    alt="BeeYou - Thời trang Chất"
                  />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="wrapper">
          <p>
            Copyrights © 2017 by
            <a href="http://beeyou.com.vn/">BeeYou</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
