import React, { useContext, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ProductPopup({ product, onHide, show }) {
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
    onHide();
  };
  return (
    <>
      <Modal
        onHide={onHide}
        show={show}
        className="product-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <button
            type="button"
            className="close-btn"
            onClick={onHide}
            aria-label="Close"
          >
            ×
          </button>
          <div className="row">
            <div className="col-6">
              <div className="product-img">
                <div className="main-product-img"></div>
                <ul className="small-image-product">
                  {product.variant.map((item, index) => (
                    <li key={index} className="details-thumbnail-item">
                      <Image
                        width={108}
                        height={108}
                        src={item.img}
                        alt={item.title}
                        onClick={() => setIndexVariant(index)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="product-content">
                <h4 className="p-title">{product.title}</h4>
                <p className="product-more-info">
                  <span className="product-sku">Mã sản phẩm:</span>
                </p>
                <div className="product-price">
                  <span className="p-price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    ₫
                  </span>
                  {/* <del>₫</del> */}
                </div>
                <div className="detail-title-infor">
                  <p>Tiêu đề</p>
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
                  data-bs-dismiss="modal"
                >
                  <span>Mua ngay</span>
                </button>

                <p>
                  Hoặc{" "}
                  <Link href={`/products/${product.slug}`}>
                    <a>xem chi tiết</a>
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductPopup;
