import React, { useMemo, useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { openInfo } from "../../store/modalsReducer";
import { fetchBasket } from "../../API/BasketService";
const BasketTotal = () => {
  const dispatch = useDispatch();
  const userBasketProudcts = useSelector((state) => state.user.userBasket);
  const order = useSelector((state) => state.order.order);
  const user = useSelector((state) => state.user.user);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalOldPrice, setTotalOldPrice] = useState(0); 
  const [basketProducts, setBasketProducts] = useState()
   function GetBasket() {
    axios.get(process.env.REACT_APP_SERVER + 'basket', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then((response) => {
      setBasketProducts(response)
    });
  }
  useEffect(() => {
    GetBasket(); 
    
  },[]); 
  function addOrder(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("products", JSON.stringify(order.products));
    data.append("status", order.status);
    data.append("phone", order.phone);
    data.append("fullName", order.fullName);
    data.append("email", order.email);
    data.append("adress", order.adress);
    data.append("payment", order.payment);
    data.append("delivery", order.delivery);
    data.append("totalPrice", totalPrice);
    axios.post(process.env.REACT_APP_SERVER + "orders", data, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then((response) => {
      // dispatch(fetchBasket(user.id));
      // dispatch(openInfo({name: true, desc: response.data}))
    });
  }
  useMemo(() => {
    setTotalPrice(
      basketProducts?.data?.data?.reduce((sum, item) => {
        for(let i = 0; i < order.products.length; i++) {
          if(item.id == order.products[i].id) {
            return sum + item.price * order.products[i].count
          }
        }
      }, 0)
    );
    setTotalOldPrice(
      basketProducts?.data?.data?.reduce((sum, item) => {
        for(let i = 0; i < order.products.length; i++) {
          if(item.id == order.products[i].id) {
            return sum + item.oldPrice * order.products[i].count
          }
        }
      }, 0)
    );
  }, [userBasketProudcts, order]);
  return (
    <div className="basket__total">
      <div className="basket__total-prices">
        <span className="basket__total-new-price">Итого: {totalPrice} ₽</span>
        <span className="basket__total-old-price">{totalOldPrice} ₽</span>
      </div>
      <button onClick={addOrder} className="basket__total-btn btn">Подтвердить заказ</button>
      <p className="basket__total-info">
        После оформления заказа наш менеджер свяжется с Вами и уточнит все
        параметры заказа и доставки. Нажимая «Подтвердить заказ», вы
        соглашаетесь c условиями использования{" "}
        <span>магазина Градус Хаус.</span>
      </p>
      <span className="basket__icon">5</span>
    </div>
  );
};

export default BasketTotal;
