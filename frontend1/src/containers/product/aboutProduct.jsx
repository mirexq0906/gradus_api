import React, { useState } from "react";
import { Link } from "react-router-dom";
const AboutProduct = ({product}) => {
  const [tabs, setTabs] = useState([
    { id: 1, active: true, name: "Описание" },
    { id: 2, active: false, name: "Доставка и оплата" },
  ]);
  function tabsActive(index) {
    for (let i = 0; i < tabs.length; i++) {
      setTabs((prev) => {
        prev[i].active = false;
        return JSON.parse(JSON.stringify(prev));
      });
    }
    setTabs((prev) => {
      prev[index].active = true;
      return JSON.parse(JSON.stringify(prev));
    });
  }
  return (
    <section className={"about-product"}>
      <div className="container">
        <div className="about-product__row">
          <div className="about-product__content">
            <ul className="about-product__list-name">
              {tabs.map((item, index) => (
                <li
                  onClick={() => tabsActive(index)}
                  key={item.id}
                  className={`about-product__item-name ${
                    item.active ? "active" : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <div
              className={`about-product__content-product product-content ${
                tabs[0].active ? "active" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: product.desc }}
            >
              
            </div>

            <div
              className={`about-product__content-product product-delivery ${
                tabs[1].active ? "active" : ""
              }`}
            >
              <div className="product-delivery__item">
                <p>
                  Магазин может доставить заказ до квартиры. Условия доставки:
                </p>
                <ul>
                  <li>Бесплатно — при заказе от 3000 рублей в черте города</li>
                  <li>200 рублей — при заказе до 3000 рублей в черте города</li>
                </ul>
                <p>
                  Мы доставляем наши товары по всей России и зарубеж. Срок
                  доставки в Киров: 2-4 дней. Наши менеджеры подберут наиболее
                  оптимальный для покупателя способ доставки: курьером, почтой
                  или самовывоз. Стоимость доставки зависит от веса посылки и
                  адреса получателя. Точные сроки и стоимость доставки узнавайте
                  по телефону в Кирове 8-8332-21-15-28 или бесплатному телефону
                  8(800) 500-27-56.
                </p>
                <a href="/#">Подробнее о доставке товаров</a>
              </div>
              <div className="product-delivery__item">
                <p>Любой заказ можно оплатить:</p>
                <ul>
                  <li>
                    Наличными. Забрать товар в одном из розничных магазинов или
                    со склада.
                  </li>
                  <li>
                    Наложенный платеж. Оплата после получения и осмотра товара в
                    транспортной компании или Почте России.
                  </li>
                  <li>
                    Онлайн на сайте. Принимаем банковские карты Visa или
                    MasterCard, Яндекс.Деньги, WebMoney, Альфа-Клик и другие.
                  </li>
                  <li>
                    Безналичный способ. Предусмотрен для организаций и
                    предпринимателей.
                  </li>
                  <li>
                    Купить в кредит. Оформляется через наш интернет-магазин.
                  </li>
                </ul>
                <a href="/#">Подробнее об оплате товаров</a>
              </div>
            </div>
          </div>

          <div className="about-product__kit">
            <h3 className="about-product__kit-heading">Собери свою печь и получи скидку</h3>
            <div className="about-product__kit-img">
              <img src="/images/kit/main-kit-dop-1.png" alt="" />
            </div>
            <Link to="/kit" className="btn about-product__kit-btn">Собрать</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
