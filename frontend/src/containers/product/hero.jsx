import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { Thumbs } from "swiper";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import axios from "axios";
import { fetchBasket } from "../../API/BasketService";
import { openInfo } from "../../store/modalsReducer";
import { fetchFavorites } from "../../API/FavoritesService";

const Hero = ({ product }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);
  const user = useSelector((state) => state.user.user);
  const favorites = useSelector((state) => state.user.favorites);
  const [favoritesActive, setFavoritesActive] = useState(false)
  const [startFavorites, setStartFavorites] = useState(true)
  function AddBasket(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("userId", user.id);
    data.append("productId", product.id);
    axios.post("http://localhost:5000/api/basket/", data).then((response) => {
      dispatch(fetchBasket(user.id));
      dispatch(openInfo({name: true, desc: response.data}))
    });
  }

  function AddDeleteFavorites(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("userId", user.id);
    data.append("productId", product.id);
    axios.post("http://localhost:5000/api/favorites/", data).then((response) => {
      dispatch(fetchFavorites(user.id));
      setFavoritesActive(response.data)
    });
  }
  
  useEffect(() => {
    if(startFavorites) {
      for(let i = 0; i < favorites.length; i++) {
        if(favorites[i].productId == product.id) {
          setFavoritesActive(true)
        }
      }  
    }

  }, [favorites, product])

  const windowWidth = useWindowDimensions();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className={"hero"}>
      <div className={"container"}>
        <h1 className={"hero__heading heading"}>
          {product.name}
        </h1>
        {product.rating}
        <div className={"hero__row"}>
          <div className={"hero__gallery"}>
            <Swiper
              spaceBetween={10}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              navigation={{
                nextEl: ".hero__btn-next",
                prevEl: ".hero__btn-prev",
              }}
              modules={[Thumbs, Navigation]}
              className={"hero__gallery-main"}
            >
              {product.gallery.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} />
                </SwiperSlide> 
              ))}
            </Swiper>
            {windowWidth > 1549 ? (
              <Swiper
                onSwiper={setThumbsSwiper}
                direction={"vertical"}
                spaceBetween={20}
                slidesPerView={"auto"}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className={"hero__gallery-thumbs"}
              >
                {product.gallery.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item} />
                  </SwiperSlide>
                ))}
              </Swiper> 
            ) : (
              ""
            )}
            <div className="hero__btn-next btn-next">
              <span>
                <img src="/images/arrow-right.svg" alt="" />
              </span>
            </div>
            <div className="hero__btn-prev btn-prev">
              <span>
                <img src="/images/arrow-right.svg" alt="" />
              </span>
            </div>
          </div>

          <div className={"hero__order order-hero"}>
            <div className={"order-hero__prices"}>
              <span className="order-hero__new-price">{product.price} ₽</span>
              <span className="order-hero__old-price">
                {product.oldPrice} ₽
              </span>
            </div>
            {auth ? (
            <button onClick={AddBasket} className={"order-hero__btn-order product-button btn"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="36"
                viewBox="0 0 43 36"
                fill="none"
              >
                <path
                  d="M41.6009 5.51413H8.30038C8.23554 5.51413 8.17715 5.53668 8.11581 5.54912L6.76134 1.38699C6.74608 1.34202 6.71359 1.30871 6.69202 1.26711C6.65505 0.839036 6.27806 0.5 5.80641 0.5C5.80557 0.5 5.80375 0.5 5.80277 0.5L1.3964 0.517366C0.8987 0.519959 0.498186 0.894764 0.500006 1.35446C0.501827 1.81337 0.904162 2.18403 1.40004 2.18403C1.40088 2.18403 1.4027 2.18403 1.40369 2.18403L5.13603 2.169L13.7519 28.6318C12.8959 29.3556 12.3496 30.3867 12.3496 31.5437C12.3496 33.7285 14.263 35.5 16.6246 35.5C18.9854 35.5 20.8997 33.7284 20.8997 31.5437C20.8997 30.974 20.7647 30.4359 20.5306 29.947H32.9689C32.7349 30.436 32.5999 30.974 32.5999 31.5437C32.5999 33.7285 34.5132 35.5 36.8749 35.5C39.2357 35.5 41.1499 33.7284 41.1499 31.5437C41.1499 29.359 39.2355 27.5874 36.8749 27.5874C35.9785 27.5874 35.1478 27.8447 34.4602 28.2812H19.0385C18.3509 27.8447 17.521 27.5874 16.6246 27.5874C16.1792 27.5874 15.7579 27.6681 15.3538 27.7847L14.0685 23.8384L36.7435 23.8217C37.1404 23.8217 37.4671 23.5793 37.586 23.2486C37.6167 23.1961 37.6498 23.1453 37.6679 23.0853L42.4676 6.70503C42.4983 6.60096 42.5018 6.49676 42.4892 6.39606C42.4901 6.37856 42.5 6.36444 42.5 6.34772C42.501 5.88725 42.0978 5.51413 41.6009 5.51413ZM36.8758 29.2525C38.2411 29.2525 39.3509 30.2794 39.3509 31.543C39.3509 32.8065 38.2412 33.8336 36.8758 33.8336C35.5105 33.8336 34.4008 32.8066 34.4008 31.543C34.4009 30.2794 35.5106 29.2525 36.8758 29.2525ZM16.6256 29.2525C17.991 29.2525 19.1007 30.2794 19.1007 31.543C19.1007 32.8065 17.991 33.8336 16.6256 33.8336C15.2602 33.8336 14.1506 32.8066 14.1506 31.543C14.1506 30.2794 15.2602 29.2525 16.6256 29.2525ZM36.0758 22.1567L13.5278 22.1734L8.64698 7.18079H40.4642L36.0758 22.1567Z"
                  fill="#323232"
                  stroke="#323232"
                  strokeWidth="0.4"
                />
              </svg>
              В корзину
            </button>
            ) : (
              <button onClick={() => {
                dispatch(openInfo({name: true, desc:"Чтобы добавить товар в корзину - зарегистрируйтесь"}));
              }} 
              className={"order-hero__btn-order product-button btn"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="36"
                viewBox="0 0 43 36"
                fill="none"
              >
                <path
                  d="M41.6009 5.51413H8.30038C8.23554 5.51413 8.17715 5.53668 8.11581 5.54912L6.76134 1.38699C6.74608 1.34202 6.71359 1.30871 6.69202 1.26711C6.65505 0.839036 6.27806 0.5 5.80641 0.5C5.80557 0.5 5.80375 0.5 5.80277 0.5L1.3964 0.517366C0.8987 0.519959 0.498186 0.894764 0.500006 1.35446C0.501827 1.81337 0.904162 2.18403 1.40004 2.18403C1.40088 2.18403 1.4027 2.18403 1.40369 2.18403L5.13603 2.169L13.7519 28.6318C12.8959 29.3556 12.3496 30.3867 12.3496 31.5437C12.3496 33.7285 14.263 35.5 16.6246 35.5C18.9854 35.5 20.8997 33.7284 20.8997 31.5437C20.8997 30.974 20.7647 30.4359 20.5306 29.947H32.9689C32.7349 30.436 32.5999 30.974 32.5999 31.5437C32.5999 33.7285 34.5132 35.5 36.8749 35.5C39.2357 35.5 41.1499 33.7284 41.1499 31.5437C41.1499 29.359 39.2355 27.5874 36.8749 27.5874C35.9785 27.5874 35.1478 27.8447 34.4602 28.2812H19.0385C18.3509 27.8447 17.521 27.5874 16.6246 27.5874C16.1792 27.5874 15.7579 27.6681 15.3538 27.7847L14.0685 23.8384L36.7435 23.8217C37.1404 23.8217 37.4671 23.5793 37.586 23.2486C37.6167 23.1961 37.6498 23.1453 37.6679 23.0853L42.4676 6.70503C42.4983 6.60096 42.5018 6.49676 42.4892 6.39606C42.4901 6.37856 42.5 6.36444 42.5 6.34772C42.501 5.88725 42.0978 5.51413 41.6009 5.51413ZM36.8758 29.2525C38.2411 29.2525 39.3509 30.2794 39.3509 31.543C39.3509 32.8065 38.2412 33.8336 36.8758 33.8336C35.5105 33.8336 34.4008 32.8066 34.4008 31.543C34.4009 30.2794 35.5106 29.2525 36.8758 29.2525ZM16.6256 29.2525C17.991 29.2525 19.1007 30.2794 19.1007 31.543C19.1007 32.8065 17.991 33.8336 16.6256 33.8336C15.2602 33.8336 14.1506 32.8066 14.1506 31.543C14.1506 30.2794 15.2602 29.2525 16.6256 29.2525ZM36.0758 22.1567L13.5278 22.1734L8.64698 7.18079H40.4642L36.0758 22.1567Z"
                  fill="#323232"
                  stroke="#323232"
                  strokeWidth="0.4"
                />
              </svg>
              В корзину
            </button>
            )}
            {auth ? (
            <button onClick={AddDeleteFavorites} className={`order-hero__btn-favorite btn ${favoritesActive ? "active" : ""}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
              >
                <path
                  d="M23.5723 2.85655C22.9614 2.26797 22.2361 1.80107 21.4378 1.48251C20.6396 1.16396 19.7839 1 18.9199 1C18.0558 1 17.2001 1.16396 16.4019 1.48251C15.6036 1.80107 14.8783 2.26797 14.2674 2.85655L12.9997 4.07749L11.7319 2.85655C10.498 1.66822 8.8245 1.00062 7.07951 1.00062C5.33452 1.00062 3.66099 1.66822 2.42709 2.85655C1.1932 4.04489 0.5 5.65662 0.5 7.33718C0.5 9.01774 1.1932 10.6295 2.42709 11.8178L3.69485 13.0387L12.9997 22L22.3045 13.0387L23.5723 11.8178C24.1834 11.2295 24.6682 10.531 24.999 9.76219C25.3298 8.99339 25.5 8.16936 25.5 7.33718C25.5 6.50499 25.3298 5.68096 24.999 4.91216C24.6682 4.14336 24.1834 3.44486 23.5723 2.85655V2.85655Z"
                  stroke="#686868"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              в избранное
            </button>
            ) : (
              <button onClick={() => {
                dispatch(openInfo({name: true, desc:"Чтобы добавить товар в избранное - зарегистрируйтесь"}));
              }}
               className={`order-hero__btn-favorite btn`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
              >
                <path
                  d="M23.5723 2.85655C22.9614 2.26797 22.2361 1.80107 21.4378 1.48251C20.6396 1.16396 19.7839 1 18.9199 1C18.0558 1 17.2001 1.16396 16.4019 1.48251C15.6036 1.80107 14.8783 2.26797 14.2674 2.85655L12.9997 4.07749L11.7319 2.85655C10.498 1.66822 8.8245 1.00062 7.07951 1.00062C5.33452 1.00062 3.66099 1.66822 2.42709 2.85655C1.1932 4.04489 0.5 5.65662 0.5 7.33718C0.5 9.01774 1.1932 10.6295 2.42709 11.8178L3.69485 13.0387L12.9997 22L22.3045 13.0387L23.5723 11.8178C24.1834 11.2295 24.6682 10.531 24.999 9.76219C25.3298 8.99339 25.5 8.16936 25.5 7.33718C25.5 6.50499 25.3298 5.68096 24.999 4.91216C24.6682 4.14336 24.1834 3.44486 23.5723 2.85655V2.85655Z"
                  stroke="#686868"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              в избранное
            </button> 
            )}
            <ul className="order-hero__list-info">
              <li className="order-hero__item-info">
                <div className="order-hero__info-img">
                  <img src="/images/product-info-icon-1.svg" alt="foto" />
                </div>
                <div className="order-hero__info-content">
                  <h3 className="order-hero__info-heading">
                    В наличии
                  </h3>
                  <span className="order-hero__info-text">Бесплатно</span>
                </div>
              </li>
              <li className="order-hero__item-info">
                <div className="order-hero__info-img">
                  <img src="/images/product-info-icon-2.svg" alt="foto" />
                </div>
                <div className="order-hero__info-content">
                  <h3 className="order-hero__info-heading">
                    Экспресс доставка из магазина
                  </h3>
                  <span className="order-hero__info-text">
                    Сегодня или завтра
                  </span>
                </div>
              </li>
              <li className="order-hero__item-info">
                <div className="order-hero__info-img">
                  <img src="/images/product-info-icon-3.svg" alt="foto" />
                </div>
                <div className="order-hero__info-content">
                  <h3 className="order-hero__info-heading">
                    Со склада в пункт выдачи
                  </h3>
                  <span className="order-hero__info-text">Прибудет через 1-5 дней</span>
                </div>
              </li>
            </ul>

            <ul className="order-hero__list-rassrochka">
              <li className="order-hero__item-rassrochka title">
                Возьми в рассрочку!
              </li>
              <li className="order-hero__item-rassrochka">
                Первоначальный взнос - 0%
              </li>
              <li className="order-hero__item-rassrochka">
                Переплата - 0 рублей!
              </li>
              <li className="order-hero__item-rassrochka">
                Сроком на 4 месяца
              </li>
            </ul>
          </div>

          <div className={"hero__banner"}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
