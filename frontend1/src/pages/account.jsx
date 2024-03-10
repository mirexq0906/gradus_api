import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { logout } from "../http/userAPI";
import InputMask from "react-input-mask";
import { fetchUserOrder } from "../API/OrderService";

const Account = () => {
  const user = useSelector((state) => state.user.user);
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [userData, setUserData] = useState(false);
  const [orders, setOrders] = useState([]);
  async function fetchUserData() {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'user', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }});
    console.log(response)
    setUserData(response.data.data);
  }
  async function fetchOrder() {
    const response = await fetchUserOrder(user.id);
    if (response == null) {
      setOrders([]);
    } else {
      setOrders([response]);
    }
  }
  const logoutBe = async () => {
    const response = await logout();
    console.log(response)
  };
  useEffect(() => {
    fetchUserData();
    fetchOrder();
  }, []);
  function UpdateUserData(e) {
    e.preventDefault();
    const data = {};
    if(city.length) {
      data['adress'] = city
    }
    if(phone.length) {
      data['phone'] = phone
    }
    if(date.length) {
      data['date'] = date
    }

    axios.put(process.env.REACT_APP_SERVER + "user", data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then(() => {
      fetchUserData();
    });
  }
  return (
    <main className="account">
      <div className="container account__container">
        <h3 className="account__heading">Личный кабинет</h3>
        <div className="account__row-info">
          <div className="account__info-left">
            <div className="account__info-person">
              <img src="/images/avatar.svg" alt="" />
              <span>{!userData ? "Заполните ФИО" : userData.name}</span>
            </div>
            <ul className="account__info-list">
              <li className="account__info-mail">{user.email}</li>
              <li className="account__info-phone">
                {!userData ? "Заполните телефон" : userData.phone}
              </li>
              <li className="account__info-date">
                {!userData ? "Заполните дату" : userData.date}
              </li>
              <li className="account__info-adress">
                {!userData ? "Заполните адресс" : userData.city}
              </li>
            </ul>
          </div>
          <div className="account__info-right">
            <h3 className="account__info-heading">Мои данные</h3>

            <form className="account__info-form">
              <div className="account__info-row">
                <div className="account__form-row">
                  <input
                    className="account__input-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="ФИО"
                  />
                  <InputMask
                    className="account__input-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___)___-__-__"
                    type="text"
                    mask="+7 999 999 99 99"
                    maskChar="_"
                  />
                </div>
                <div className="account__form-row">
                  <input
                    className="account__input-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="Введите адрес"
                  />
                  <InputMask
                    className="account__input-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="День.месяц.год"
                    type="text"
                    mask="99.99.9999"
                    maskChar="_"
                  />
                </div>
                <ul className="account__info-setting">
                  <li>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        logoutBe()
                        localStorage.removeItem("token");
                        window.location.href = "/";
                      }}
                    >
                      Выйти
                    </button>
                  </li>
                </ul>
              </div>
              <button
                onClick={UpdateUserData}
                className="account__input-btn btn"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="account__row-order">
          <div className="account__order-left">
            <div className="account__order-row">
              <h3 className="account__order-heading">Мои заказы</h3>
            </div>
            <ul className="account__order-list">
              {orders.length
              ?
              orders.map((item) => (
                <li key={item.id} className="account__order-item">
                  <div>
                    <span className="account__order-status delivery"></span>
                    <a  className="account__order-number">
                      № {item.id}
                    </a>
                    <span className="account__order-condition">{item.delivery}</span>
                  </div>
                  <span className="account__order-price">{item.totalPrice.toLocaleString()} ₽</span>
                </li>
              ))
              
              :
              <h3>Сделайте заказ</h3>
            }
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
