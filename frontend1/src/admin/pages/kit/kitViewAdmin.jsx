import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneKitOrder } from "../../../API/OrderService";
const KitViewAdmin = () => {
  const params = useParams();
  const [orders, setOrders] = useState({products: []});
  async function orderItem() {
    const response = await fetchOneKitOrder(params.id);
    setOrders(response.data);
  }
  useEffect(() => {
    orderItem();
  }, []);
  return (
    <section className="admin-view">
      <div className="container">
        <Link to="/admin/kit" className="btn-admin-back admin-view__back">
          Назад
        </Link>
        <h1 className="admin-view__heading heading-admin">Просмотр заказа</h1>
        <table className="admin-view__table table-admin">
          <tbody>
            <tr>
              <td>#</td>
              <td>{orders.id}</td>
            </tr>
            <tr>
              <td>Продукты</td>
              <td>{orders.products}</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>{orders.phone}</td>
            </tr>
            <tr>
              <td>Имя</td>
              <td>{orders.fullName}</td>
            </tr>
            <tr>
              <td>Цена заказа</td>
              <td>{orders.totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default KitViewAdmin;