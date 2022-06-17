import React, { memo } from "react";
import moment from "moment";
import { Table } from "react-bootstrap";
import Image from "next/image";

function MyOrderItemBody({ order }) {
  const convertDateShip = (createdDate) => {
    return moment(createdDate).format("DD/MM/YYYY HH:mm");
  };

  const getTotal = (products) => {
    const res = products.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);

    return res;
  };

  const getAmount = (products) => {
    const res = products.reduce((prev, item) => {
      return prev + item.quantity;
    }, 0);

    return res;
  };

  const productDetails = (products) => {
    return (
      <>
        {products.length > 0 &&
          products.map((product, index) => (
            <tr key={index + product.variant[product.indexVariant].title}>
              <td>
                <Image
                  src={product.variant[product.indexVariant].img}
                  height={100}
                  width={100}
                  alt=""
                />
              </td>
              <td>{product.variant[product.indexVariant].title}</td>
              <td>{product.size[product.indexSize]}</td>
              <td>{product.shortDescription}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.price * product.quantity}</td>
            </tr>
          ))}
      </>
    );
  };

  return (
    <>
      {order.address ? (
        <div className="row details-order">
          <div className="col-12 details-order-header">
            <h3 className="text-center mt-3 mb-4">Chi tiết đơn hàng</h3>
          </div>
          <hr />
          <div className="col-3 details-order-header">
            <i className="fas fa-user"></i> &nbsp; <span>Người đặt hàng: </span>{" "}
            {order.name}
          </div>
          <div className="col-6 details-order-header">
            <i className="fas fa-home"></i> &nbsp; <span>Địa chỉ: </span>{" "}
            {`${order.address.apartmentNumber}, ${order.address.ward}, ${order.address.district}, ${order.address.province}`}
          </div>
          <div className="col-3 details-order-header">
            <i className="fas fa-phone-square"></i> &nbsp;{" "}
            <span>Số điện thoại: </span> {order.phone}
          </div>
          <hr />
          <div className="col-3 details-order-header">
            <i className="fas fa-clock"></i> &nbsp; <span>Ngày đặt hàng: </span>{" "}
            {convertDateShip(order.createdAt)}
          </div>
          <div className="col-4 details-order-header">
            <i className="far fa-clock"></i> &nbsp;{" "}
            <span>Ngày cập nhật cuối: </span> {convertDateShip(order.updatedAt)}
          </div>
          <hr />
          <div className="col-12 details-order-header">
            <i className="far fa-clock"></i> &nbsp; <span>Trạng thái: </span>{" "}
            {order.isPaid && order.isDelivered
              ? "Hoàn thành"
              : "Đang giao dịch"}
          </div>
          <div className="col-12">
            <Table bordered className="table-details-product-order">
              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Kích cỡ</th>
                  <th>Thông tin sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{productDetails(order.cart)}</tbody>
            </Table>
          </div>
          <div className="col-8"></div>
          <div className="col-4">
            <Table>
              <tbody>
                <tr>
                  <td>Tổng số lượng:</td>
                  <td>{getAmount(Array.from(order.cart))}</td>
                </tr>
                <tr>
                  <td>Tổng tiền hàng:</td>
                  <td>{getTotal(Array.from(order.cart))}</td>
                  <td>VND</td>
                </tr>
                <tr>
                  <td>Tiền ship:</td>
                  <td>40000</td>
                  <td>VND</td>
                </tr>
                <tr>
                  <td>Tổng thanh toán:</td>
                  <td>{getTotal(order.cart) + 40000}</td>
                  <td>VND</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : null}
    </>
  );
}

const MyOrderItemBodyMemo = memo(MyOrderItemBody);

export default MyOrderItemBodyMemo;
