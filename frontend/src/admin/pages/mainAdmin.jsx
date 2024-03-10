import React from "react";
import { Link } from "react-router-dom";

const MainAdmin = () => {
  return (
    <div className="admin__middle middle-admin">
      <div className="container">
        <ul className="middle-admin__list">
          <li className="middle-admin__item">
            <Link to="/admin/category" className="middle-admin__link">
              Категории
            </Link>
          </li>
          <li className="middle-admin__item">
            <Link to="/admin/subcategory" className="middle-admin__link">
              Подкатегории
            </Link>
          </li>
          <li className="middle-admin__item">
            <Link to="/admin/product" className="middle-admin__link">
              Товары
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/blog" className="middle-admin__link">
              Блог
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/video" className="middle-admin__link">
              Видео
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/order" className="middle-admin__link">
              Заказы
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/email" className="middle-admin__link">
              Рассылка
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/call" className="middle-admin__link">
              Обратная связь
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/banner" className="middle-admin__link">
              Баннеры
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/product-week" className="middle-admin__link">
              Товары недели
            </Link >
          </li>
          <li className="middle-admin__item">
            <Link  to="/admin/kit" className="middle-admin__link">
              Заказы набор
            </Link >
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainAdmin;
