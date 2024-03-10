import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOrderDelivery } from "../../store/orderReducer";
const BasketDelivery = () => {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState([
    { name: "Самовывоз", info: "Киров", active: true },
    { name: "Доставка на дом", info: "Из магазина", active: false },
    {
      name: "Доставка в пункт выдачи",
      info: "В отделение почты или офис транспортной компании",
      active: false,
    },
  ]);
  function changeCheckbox(e) {
    const target = e.target;
    const name = Number(target.name);
    setDelivery((prev) => {
      for (let i = 0; i < delivery.length; i++) {
        prev[i].active = false;
      }
      prev[name].active = true;
      return JSON.parse(JSON.stringify(prev));
    });
  }
  useEffect(() => {
    for (let i = 0; i < delivery.length; i++) {
      if (delivery[i].active) {
        dispatch(addOrderDelivery(delivery[i].name));
      }
    }
  }, [delivery]);
  return (
    <div className="basket__delivery">
      <h3 className="basket__delivery-heading">Выберите способ получения</h3>
      <div className="basket__delivery-row">
        {delivery.map((item, index) => (
          <label key={item.name} className="basket__delivery-radio">
            <input
              type="checkbox"
              checked={item.active}
              name={index}
              onChange={changeCheckbox}
              className="basket__delivery-radio-disabled"
            />
            <div className="basket__delivery-radio-wrapper">
              <h4 className="basket__delivery-radio-heading">{item.name}</h4>
              <span className="basket__delivery-radio-info">{item.info}</span>
            </div>
          </label>
        ))}
      </div>
      <div className="basket__delivery-info">
        <p className="basket__delivery-desc">
          Магазин: «Градус Хаус»
          <br />
          Адрес: г. Киров, Московская 38 
        </p>
        <p className="basket__delivery-desc">
          Режим работы:
          <br />
          ежедневно, c 09:00-20:00
        </p>
        <p className="basket__delivery-desc margin">
          Телефон магазина: 8-999-999-54-99
        </p>
        <span className="basket__delivery-geolocation">
          <img
            className="lazy"
            data-src="/themes/loft/images/updated-gradushaus/product/geolocation.svg"
            alt=""
          />
        </span>
      </div>
      <span className="basket__icon">4</span>
    </div>
  );
};

export default BasketDelivery;
