import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOrderPayment } from "../../store/orderReducer";
const BasketPayment = () => {
  const dispatch = useDispatch();
  const [payment, setPayment] = useState([
    {name: "При получении наличными", active: true },
    { name: "При получении картой", active: false },
  ]);
  function changeCheckbox(e) {
    const target = e.target;
    const name = Number(target.name);
    setPayment(prev => {
      for(let i = 0; i < payment.length; i++) {
        prev[i].active = false
      }
      prev[name].active = true
      return JSON.parse(JSON.stringify(prev));
    })
  }
  useEffect(() => {
    for(let i = 0; i < payment.length; i++) {
      if(payment[i].active) {
        dispatch(addOrderPayment(payment[i].name))
      }
    }
  }, [payment])
  return (
    <div className="basket__payment">
      <h3 className="basket__payment-heading">Выберите способ оплаты</h3>
      {payment.map((item, index) => (
        <label key={index} className="basket__payment-radio">
          <input
            type="checkbox"
            name={index}
            checked={item.active}
            onChange={changeCheckbox}
            className="basket__payment-input-disabled"
          />
          <span className="basket__payment-input-radio"></span>
          <span className="basket__payment-radio-text">{item.name}</span>
        </label>
      ))}

      <span className="basket__icon">3</span>
    </div>
  );
};

export default BasketPayment;
