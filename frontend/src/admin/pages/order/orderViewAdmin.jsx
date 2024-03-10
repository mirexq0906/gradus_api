import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchOneOrder } from "../../../API/OrderService";
const OrderViewAdmin = () => {
  const params = useParams();
  const [orderData, setOrderData] = useState([]);
  const [orderProductsData, setOrderProductsData] = useState([]);
  const products = useSelector((state) => state.product.product);
  async function FetchOrder() {
    const response = await fetchOneOrder(params.id);
    setOrderData(response.data);
    let q = [];
    let b = JSON.parse(response.data.products)
    for (let i = 0; i < b.length; i++) {
      q.push(b[i]);
    }
    setOrderProductsData(q);
  }
  useEffect(() => {
    FetchOrder();
  }, []);

  return (
    <section className="admin-view">
      <div className="container">
        <Link to="/admin/order" className="btn-admin-back admin-view__back">
          Назад
        </Link>
        <h1 className="admin-view__heading heading-admin">Просмотр заказа</h1>
        <table className="admin-view__table table-admin">
          <tbody>
            <tr>
              <td>#</td>
              <td>{orderData.id}</td>
            </tr>
            <tr>
              <td>Товары</td>
              <td>
                {orderProductsData.map((item) =>
                  products?.data?.map((subItem) =>
                    subItem.id == item.id ? <span>Название товара: {subItem.name}, количество: {item.count}<br/><br/></span> : ""
                  )
                )}
              </td>
            </tr>
            <tr>
              <td>Статус</td>
              <td>{orderData.status}</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>{orderData.phone}</td>
            </tr>
            <tr>
              <td>ФИО</td>
              <td>{orderData.fullName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{orderData.email}</td>
            </tr>
            <tr>
              <td>Адрес</td>
              <td>{orderData.adress}</td>
            </tr>
            <tr>
              <td>Оплата</td>
              <td>{orderData.payment}</td>
            </tr>
            <tr>
              <td>Доставка</td>
              <td>{orderData.delivery}</td>
            </tr>
            <tr>
              <td>Сумма заказа</td>
              <td>{orderData.totalPrice} р.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderViewAdmin;
