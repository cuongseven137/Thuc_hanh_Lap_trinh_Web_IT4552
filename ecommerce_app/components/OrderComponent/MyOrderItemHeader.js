import React from "react";
import moment from "moment";

export default function MyOrderItemHeader({ order, index }) {
  const convertDateShip = (createdDate) => {
    return moment(createdDate).format("DD/MM/YYYY HH:mm");
  };
  return (
    <div className="row information-order" style={{ width: "100%" }}>
      <div className="col-1">{index}</div>
      <div className="col-2 col-status">
        {order.isPaid && order.isDelivered ? (
          <span style={{ color: "#2ecc71", fontWeight: 700 }}>Hoàn thành</span>
        ) : (
          <span style={{ color: "#f1c40f", fontWeight: 700 }}>
            Đang giao dịch
          </span>
        )}
      </div>
      <div className="col-1">
        {order.isPaid ? (
          <i className="fas fa-circle"></i>
        ) : (
          <i className="far fa-circle"></i>
        )}
      </div>
      <div className="col-1">
        {order.isDelivered ? (
          <i className="fas fa-circle"></i>
        ) : (
          <i className="far fa-circle"></i>
        )}
      </div>
      <div className="col-2">{order.totalPrice} VND</div>
      <div className="col-2">{convertDateShip(order.createdAt)}</div>
      <div className="col-2">{convertDateShip(order.updatedAt)}</div>
    </div>
  );
}
