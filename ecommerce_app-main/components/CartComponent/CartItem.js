import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { decrease, deleteFromCart, increase } from "../../store/Actions";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function CartItem({ item, dispatch, cart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteFromCart = () => {
    dispatch(deleteFromCart(cart, item._id, item.indexVariant, item.indexSize));

    toast.success("Đã xóa khỏi giỏ hàng", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    handleClose();
  };

  return (
    <>
      <tr>
        <td colSpan="1" className="align-middle">
          <Link href={`/products/${item.slug}`}>
            <a>
              <Image
                width={64}
                height={64}
                src={item.variant[item.indexVariant].img}
                alt="GIAO HÀNG TOÀN QUỐC"
              />
            </a>
          </Link>
        </td>
        <td colSpan="1" className="align-middle ">
          <Link href={`/products/${item.slug}`}>
            <a>
              <strong style={{ color: "#333", fontSize: "16px" }}>
                {item.title +
                  "-" +
                  item.variant[item.indexVariant].title +
                  (item.indexSize !== -1
                    ? "-" + item.size[item.indexSize]
                    : "")}
              </strong>
            </a>
          </Link>
        </td>
        <td colSpan="1" className="align-middle">
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td className="align-middle" colSpan="1">
          <div className="change-qty">
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                dispatch(
                  decrease(cart, item._id, item.indexVariant, item.indexSize)
                )
              }
              disabled={item.quantity === 1 ? true : false}
            >
              -
            </button>

            <span className="px-3">{item.quantity}</span>

            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                dispatch(
                  increase(cart, item._id, item.indexVariant, item.indexSize)
                )
              }
            >
              +
            </button>
          </div>
        </td>
        <td colSpan="1" className="align-middle">
          {(item.quantity * item.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td className="align-middle">
          <i
            className="far fa-trash-alt text-danger"
            aria-hidden="true"
            style={{ fontSize: "18px", cursor: "pointer" }}
            onClick={handleShow}
          ></i>
        </td>
      </tr>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa sản phẩm:{" "}
          {
            <strong style={{ color: "#333", fontSize: "16px" }}>
              {item.title +
                "-" +
                item.variant[item.indexVariant].title +
                (item.indexSize !== -1 ? "-" + item.size[item.indexSize] : "")}
            </strong>
          }{" "}
          khỏi giỏ hàng
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleDeleteFromCart}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
