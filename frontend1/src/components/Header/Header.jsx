import React, { useState } from "react";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { addFilter } from "../../store/productReducer";
import { openCall, openInfo } from "../../store/modalsReducer";
const Header = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);
  const widthWindow = useWindowDimensions();
  const [navTop, setNavTop] = useState([
    { id: 1, name: "О нас", href: "/about" },
    { id: 2, name: "Доставка", href: "/delivery" },
    { id: 3, name: "Оплата", href: "/payment" },
    { id: 4, name: "Как заказать", href: "/order" },
    { id: 5, name: "Контакты", href: "/contacts" },
    { id: 6, name: "Блог", href: "/blog" },
  ]);
  const navBottom = useSelector((state) => state.category.category);
  const auth = useSelector((state) => state.user.auth);
  const user = useSelector(state => state.user.user)
  const basket = useSelector((state) => state.user.basket);
  return (
    <header className={"header"}>
      <div className={"header__top"}>
        <div className={"container"}>
          <div className={"header__top-row"}>
            <ul className={"header__top-list"}>
              {navTop.map((link) => (
                <li key={link.id} className={"header__top-item"}>
                  <a className={"header__top-link"} href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className={"header__top-feedback"}>
              <a href="tel:89999999999" className={"header__top-phone"}>
                8 999 999 99 99
              </a>
              <button onClick={() => dispatch(openCall({name:true, desc: ''}))} className="header__top-btn btn">Заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
      <div className={"header__middle"}>
        <div className={"container"}>
          <div className={"header__middle-row"}>
            <a className={"header__middle-logo"} href="/">
              <picture>
                <source
                  srcSet="/images/logo-mob.svg"
                  media="(max-width: 991px)"
                />
                <img src="/images/logo.svg" alt="#" />
              </picture>
            </a>
            <div className={"header__middle-search"}>
              <input
                className={"header__middle-search-input"}
                type="text"
                value={filter}
                onChange={(e) => dispatch(addFilter(e.target.value))}
                placeholder={"Поиск..."}
              />
              {filter.length ? (
                <Link to="/search" className="header__middle-search-btn btn">
                  <picture>
                    <source
                      srcSet="/images/search-mob.svg"
                      media="(max-width: 991px)"
                    />
                    <img
                      className={"header__middle-item-img"}
                      src="/images/search.svg"
                      alt="#"
                    />
                  </picture>
                </Link>
              ) : (
                <button onClick={() => dispatch(openInfo({ name: true, desc: 'Введите значение' }))} className="header__middle-search-btn btn">
                  <picture>
                    <source
                      srcSet="/images/search-mob.svg"
                      media="(max-width: 991px)"
                    />
                    <img
                      className={"header__middle-item-img"}
                      src="/images/search.svg"
                      alt="#"
                    />
                  </picture>
                </button>
              )}
            </div>
            <ul className={"header__middle-list"}>
              <li className={"header__middle-item"}>
                {auth ? (
                  <Link className={"header__middle-link"} to="/account">
                    <picture>
                      <source
                        srcSet="/images/account-mob.svg"
                        media="(max-width: 991px)"
                      />
                      <img
                        className={"header__middle-item-img"}
                        src="/images/account.svg"
                        alt="#"
                      />
                    </picture> 
                    <span className={"header__middle-item-name"}>Профиль</span>
                  </Link>
                ) : (
                  <Link className={"header__middle-link"} to="/registration">
                    <picture>
                      <source
                        srcSet="/images/account-mob.svg"
                        media="(max-width: 991px)"
                      />
                      <img
                        className={"header__middle-item-img"}
                        src="/images/account.svg"
                        alt="#"
                      />
                    </picture>
                    <span className={"header__middle-item-name"}>Профиль</span>
                  </Link>
                )}
              </li>
              {widthWindow <= 991 ? (
                <li className={"header__middle-item"}>
                  <a className={"header__middle-link"} href="/#">
                    <img
                      className={"header__middle-item-img"}
                      src="/images/phone.svg"
                      alt="foto"
                    />
                  </a>
                </li>
              ) : (
                <li className={"header__middle-item"}>
                  <Link className={"header__middle-link"} to="/favorites">
                    <img
                      className={"header__middle-item-img"}
                      src="/images/heart.svg"
                      alt="foto"
                    />
                    <span className={"header__middle-item-name"}>
                      Избранное
                    </span>
                  </Link>
                </li>
              )}

              <li className={"header__middle-item"}>
                <Link className={"header__middle-link-basket"} to="/basket">
                  <picture>
                    <source
                      srcSet="/images/basket-mob.svg"
                      media="(max-width: 991px)"
                    />
                    <img src="/images/basket.svg" alt="#" />
                  </picture>
                  <span className="header__middle-item-count">
                    {basket.length}
                  </span>
                  <span className={"header__middle-item-name"}>Корзина</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"header__bottom"}>
        <div className={"container"}>
          <div className="header__bottom-list">
            <Swiper spaceBetween={30} loop={false} slidesPerView={"auto"}>
              {navBottom?.data?.map((link) => (
                <SwiperSlide key={link.id}>
                  <div className={"header__bottom-item"}>
                    <Link className="header__bottom-link" to={`/${link.url}`}>
                      {link.name}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
