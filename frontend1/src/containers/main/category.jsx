import React, { useState } from "react";

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <div className="category__top">
          <h3 className="category__heading heading">
            <img src="/images/category-icon.svg" alt="foto" />
            Категории
          </h3>
          <span className="category__watch watch">
            Смотреть всё
            <svg
              width="7"
              height="9"
              viewBox="0 0 7 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 8L5.25 4.5L1.25 1"
                stroke="#323232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <ul className="category__list">
          <li className="category__item">
            <div className="category__item-content">
              <h3 className="category__item-heading">Консервирование</h3>
              <ul className="category__item-list">
                <li>Автоклавы</li>
                <li>Комплектующие</li>
                <li>Аксессуары</li>
              </ul>
            </div>
            <div className="category__item-img">
              <img src="/images/category-1.png" alt="foto" />
            </div>
          </li>
          <li className="category__item">
            <div className="category__item-content">
              <h3 className="category__item-heading">Самогоноварение</h3>
              <ul className="category__item-list">
                <li>Самогонные аппараты</li>
                <li>Наборы для настаивания</li>
                <li>Комплектующие</li>
              </ul>
            </div>
            <div className="category__item-img">
              <img src="/images/category-2.png" alt="foto" />
            </div>
          </li>
          <li className="category__item">
            <div className="category__item-content">
              <h3 className="category__item-heading">Прессы для сока</h3>
              <ul className="category__item-list">
                <li>Домкратные прессы</li>
                <li>Гидравлические прессы</li>
                <li>Измельчители</li>
              </ul>
            </div>
            <div className="category__item-img">
              <img src="/images/category-3.png" alt="foto" />
            </div>
          </li>
          <li className="category__item">
            <div className="category__item-content">
              <h3 className="category__item-heading">Все для копчения</h3>
              <ul className="category__item-list">
                <li>Дымогенераторы</li>
                <li>Коптильни</li>
                <li>Щепа</li>
              </ul>
            </div>
            <div className="category__item-img">
              <img src="/images/category-4.png" alt="foto" />
            </div>
          </li>
          <li className="category__item">
            <div className="category__item-content">
              <h3 className="category__item-heading">Сыроварение</h3>
              <ul className="category__item-list">
                <li>Сыроварни</li>
                <li>Закваски</li>
                <li>Ферменты</li>
              </ul>
            </div>
            <div className="category__item-img">
              <img src="/images/category-5.png" alt="foto" />
            </div>
          </li>
          <li className="category__item">
            <div className="category__item-content">
              <h3 className="category__item-heading">Инструменты</h3>
              <ul className="category__item-list">
                <li>Трубогибы и профилегибы</li>
                <li>Станки для холодной ковки</li>
                <li>Шлифовальные станки</li>
              </ul>
            </div>
            <div className="category__item-img">
              <img src="/images/category-6.png" alt="foto" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Category;
