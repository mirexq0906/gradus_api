import React, { useState } from "react";
import { registration, login, logout } from "../http/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeAuth } from "../store/userReducer";
import { Link } from "react-router-dom";
import { openInfo } from "../store/modalsReducer";

const Registration = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changePage, setChangePage] = useState(false);

const logoutBe = async () => {
    const response = await logout();
console.log(response)
};

  const click = async (e) => {
    e.preventDefault();
    if (changePage) {
      const response = await login(email, password);
      // if (typeof response === "string") {
      //   dispatch(openInfo({ name: true, desc: response }));
      // } else {
      //   dispatch(addUser(response));
      //   dispatch(changeAuth(true));
      //   window.location.href = "/";
      // }
      console.log(response)
    } else {
      const response = await registration(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      console.log(response)
      // dispatch(openInfo({ name: true, desc: response }));
    }
  };

  return (
    <main className="registration">
      <form className="registration__form">
        <h3 className="registration__heading heading">
          {changePage ? "Авторизация" : "Регистрация"}
        </h3>
        <div className="registration__inputs">
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="registration__login input"
            type="text"
            placeholder="Введите name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="registration__login input"
            type="text"
            placeholder="Введите email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="registration__password input"
            type="password"
            placeholder="Введите пароль"
          />
          <input
            onClick={click}
            className="registration__btn product-button"
            type="submit"
          />
        </div>
        <Link
          onClick={() => setChangePage(!changePage)}
          className="registration__info"
          to={changePage ? "/registration" : "/login"}
        >
          {changePage
            ? "Нет аккаунта? Зарегистрируйтесь."
            : "Зарегистрированы? Войдите в аккаунт."}
        </Link>
      </form>
{/* 
      <button onClick={logoutBe}>dsqnbs</button> */}
    </main>
  );
};

export default Registration;
