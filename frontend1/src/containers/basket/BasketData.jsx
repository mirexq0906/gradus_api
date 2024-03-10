import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOneUser } from "../../API/UserSevice";
import { addOrderAdress, addOrderEmail, addOrderFullName, addOrderPhone } from "../../store/orderReducer";
const BasketData = () => { 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [userData, setUserData] = useState(false);
  async function fetchUserData() {
    const response = await fetchOneUser();
    setUserData(response.data);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    dispatch(addOrderEmail(userData.email))
    dispatch(addOrderPhone(userData.phone))
    dispatch(addOrderFullName(userData.name))
    dispatch(addOrderAdress(userData.adress))
  }, [user, userData]);
  return (
    <div className="basket__data">
      <h3 className="basket__data-heading">Данные покупателя</h3>
      <span className="basket__data-question"></span>
      <div className="basket__data-form">
        <div>{userData.phone}</div>
        <div>{userData.name}</div>
        <div>{userData.email}</div>
        <div>{userData.adress}</div>
      </div>
      <span className="basket__icon">2</span>
    </div>
  );
};

export default BasketData;
