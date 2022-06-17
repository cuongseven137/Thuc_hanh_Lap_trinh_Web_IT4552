import React, { useContext, useState } from "react";
import Link from "next/link";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductPopup from "./ProductPopup";
import { toast } from "react-toastify";

function Product({ product }) {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const [modalShow, setModalShow] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product, cart, 1, 0, product.size.length > 0 ? 0 : -1));

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

  return product ? (
    <>
      <div className="product-item">
        <div className="product-img">
          <Link href={`/products/${product.slug}`}>
            <a className="img-resize">
              <LazyLoadImage
                effect="blur"
                width="100%"
                layout="intrinsic"
                src={product.variant[0].img}
                alt={product.title}
              />
            </a>
          </Link>
          <div className="product-actions">
            <Link href={`/products/${product.slug}`}>
              <a className="btn-controls btnQuickView">
                <i className="fa fa-eye" aria-hidden="true"></i>
              </a>
            </Link>
            <button
              type="button"
              className="btn-controls btnBuyNow"
              onClick={() => setModalShow(true)}
            >
              Mua Ngay
            </button>
            <button
              type="button"
              className="btn-controls btnAddToCart"
              onClick={handleAddToCart}
            >
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
          </div>
          {/* <div className="discount-tag">-7%</div> */}
        </div>
        <div className="product-title">
          <Link href={`/products/${product.slug}`}>
            <a>{product.title}</a>
          </Link>
        </div>
        <div className="product-price">
          <span className="current-price">
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₫
          </span>
          {/* <span className="original-price">
          <s>149,000₫</s>
        </span> */}
        </div>
      </div>
      <ProductPopup
        product={product}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  ) : null;
}

export default Product;
