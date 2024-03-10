import React, { useEffect, useState } from "react";
import BasketGoods from "../containers/basket/BasketGoods";
import BasketData from "../containers/basket/BasketData";
import BasketPayment from "../containers/basket/BasketPayment";
import BasketDelivery from "../containers/basket/BasketDelivery";
import BasketTotal from "../containers/basket/BasketTotal";
import { useDispatch, useSelector } from "react-redux";
import { addUserBasket } from "../store/userReducer";
import { fetchOneUser } from "../API/UserSevice";
import axios from "axios";
const Basket = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const products = useSelector((state) => state.product.product);
  const order = useSelector((state) => state.order.order);
  const basket = useSelector((state) => state.user.basket);
  const userBasketProudcts = useSelector((state) => state.user.userBasket);
  const [userData, setUserData] = useState()
  const [basketProducts, setBasketProducts] = useState()

  async function fetchUserData() {
    const response = await fetchOneUser(user.id);
    setUserData(response)
  }

  function GetBasket() {
    axios.get(process.env.REACT_APP_SERVER + 'basket', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then((response) => {
      setBasketProducts(response)
      console.log(basketProducts)
    });
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    GetBasket(); 
    
  },[]); 

  return (
    <main className="basket">
      <div className="container basket__container">
        <a href="#" className="basket__back">
          Назад к покупкам
        </a>
        <form className="basket__form">
          <BasketGoods />
          {basketProducts?.data?.data?.length ? (  
            <React.Fragment>
              <BasketData />
              <BasketPayment />
              <BasketDelivery />
              <BasketTotal />
            </React.Fragment>
          ) : (
            <h1>Товаров нет</h1>
          )}
        </form>
      </div>
    </main>
  );
};

export default Basket;
