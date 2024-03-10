import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchBasket } from "../../API/BasketService";
import { addOrderProduct } from "../../store/orderReducer";
const BasketGoods = () => {
  const dispatch = useDispatch();
  const userBasketProudcts = useSelector((state) => state.user.userBasket); 
  const order = useSelector((state) => state.order.order);
  const user = useSelector((state) => state.user.user);
  const [basketProducts, setBasketProducts] = useState()
  function DeleteBasket(id) {
    const data = {
      product_id: id
    }
    axios.delete(process.env.REACT_APP_SERVER + "basket", {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, data: data} );
  }
  function GetBasket() {
    axios.get(process.env.REACT_APP_SERVER + 'basket', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then((response) => {
      setBasketProducts(response)
    });
  }
  useEffect(() => {
    GetBasket(); 
    
  },[]); 

  function totalCount(status, id) {
    if(status == "plus") {
      for(let i = 0; i < order.products.length; i++) {
        if(order.products[i].id == id) {
          order.products[i].count = order.products[i].count + 1
        }
      }  
    }
    if(status == "minus") {
      for(let i = 0; i < order.products.length; i++) {
        if(order.products[i].id == id && order.products[i].count > 1) {
          order.products[i].count = order.products[i].count - 1
        }
      }  
    }
    dispatch(addOrderProduct(order.products));
  }

  useEffect(() => {
    const q = [];
    for (let i = 0; i < basketProducts?.data?.data?.length; i++) {
      q.push({ id: basketProducts?.data?.data?.[i].id, count: 1 });
    }
    dispatch(addOrderProduct(q));
  }, [basketProducts]);

  return (
    <div className="basket__goods">
      <div className="basket__goods-top">
        <h3 className="basket__goods-heading">Корзина</h3>
        <span className="basket__goods-count">
          {basketProducts?.data?.data?.length ? basketProducts?.data?.data?.length : 0} товара
        </span>
      </div>
      <ul className="basket__goods-list">
        {basketProducts?.data?.data?.map((item) => (
          <li key={item.id} className="basket__goods-item">
            <div className="basket__goods-item-img">
              <img src={item.img} alt="" />
            </div>
            <div className="basket__goods-item-heading">
              <h4>{item.name}</h4>
            </div>
            <div className="basket__goods-item-present">Артикул: {item.id}</div>
            <div className="basket__goods-item-count">
              <span className="basket__goods-item-plus" onClick={() => totalCount('plus', item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <circle cx="13" cy="13" r="13" fill="#F5F5F5" />
                  <path
                    d="M19 11.6091V14.3909H14.3909V19H11.6091V14.3909H7V11.6091H11.6091V7H14.3909V11.6091H19Z"
                    fill="#686868"
                  />
                </svg>
              </span>
              {order.products.map((orderItem, index) => (
                <React.Fragment key={index}>
                  {orderItem.id == item.id ? (
                    <input
                      type="text"
                      className="basket__goods-item-input"
                      disabled
                      value={orderItem.count}
                    />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ))}

              <span className="basket__goods-item-minus"  onClick={() => totalCount('minus', item.id)}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13" cy="13" r="13" fill="#F5F5F5" />
                  <path d="M8 15V12H19V15H8Z" fill="#686868" />
                </svg>
              </span>
            </div>
            <div className="basket__goods-item-buttons">
              <span
                onClick={() => DeleteBasket(item.id)}
                className="basket__goods-item-delete"
              >
                Удалить
              </span>
            </div>
            <div className="basket__goods-item-prices">
              <span className="basket__goods-new-price">{item.price} ₽</span>
              <span className="basket__goods-old-price">{item.oldPrice} ₽</span>
            </div>
          </li>
        ))}
      </ul>

      <span className="basket__icon">1</span>
    </div>
  );
};

export default BasketGoods;
