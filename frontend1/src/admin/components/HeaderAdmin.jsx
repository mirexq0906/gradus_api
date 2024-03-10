import React from "react";

const HeaderAdmin = () => {
  return (
    <div className="admin__top top-admin">
      <div className="container">
        <div className="top-admin__row">
          <h1 className="top-admin__heading">Админ панель</h1>
          <a href="/" className="top-admin__exit">
            Выйти
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
