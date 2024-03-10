import React, { useState, useMemo } from "react";
import { addDopKit, addMainKit } from "../store/kitReducer";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import Dropdown from "../components/UI/Dropdown";
import InputMask from "react-input-mask";
import axios from "axios";
import { openInfo } from "../store/modalsReducer";
function Kit() {
  const dispatch = useDispatch();
  const dops = useSelector((state) => state.kit.dopsState);
  const mainDops = useSelector((state) => state.kit.mainProductsState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  function changeCheckboxDops(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = Number(target.name);
    for (let i = 0; i < dops.length; i++) {
      if (i == name) {
        dops[i].selected = value;
      }
    }
    dispatch(addDopKit(dops));
  }
  function addDopMobile(id) {
    for (let i = 0; i < dops.length; i++) {
      if (id == dops[i].id) {
        dops[i].selected = !dops[i].selected;
      }
    }
    dispatch(addDopKit(dops));
  }

  useMemo(() => {
    setTotalPrice(
      mainDops.reduce((sum, item) => {
        if (item.selected) {
          return sum + item.price;
        }
        return sum;
      }, 0) +
        dops.reduce((sum, item) => {
          if (item.selected) {
            return sum + item.price;
          }
          return sum;
        }, 0)
    );
  }, [dops, mainDops]);
  function AddOrderKit(e) {
    e.preventDefault();
    let dopNames = [];
    for (let i = 0; i < dops.length; i++) {
      if (dops[i].selected) {
        dopNames.push(dops[i].name);
      }
    }
    const data = new FormData();
    data.append("products", JSON.stringify(dopNames));
    data.append("phone", phone);
    data.append("fullName", fullName);
    data.append("totalPrice", totalPrice);
    axios
      .post(process.env.REACT_APP_SERVER + "kit_orders", data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
      .then((response) => {
        // if (response.data.errors) {
        //   dispatch(
        //     openInfo({ name: true, desc: response.data.errors[0].message })
        //   );
        // } else {
        //   for (let i = 0; i < dops.length; i++) {
        //     dops[i].selected = false;
        //   }
        //   setFullName('')
        //   setPhone('')
        //   dispatch(addDopKit(dops));
        //   dispatch(openInfo({ name: true, desc: response.data }));
        // }
      });
  }
  return (
    <section className="kit">
      <div className="container">
        <h3 className="kit__heading heading">Соберите свою банную печь</h3>
        <div className="kit__box">
          <div className="kit__block-list">
            <ul className="kit__list">
              {dops.map((item, index) => (
                <li key={item.id} className="kit__item">
                  <div className="kit__item-content">
                    <label className="kit__item-checkbox checkbox">
                      <input
                        checked={item.selected}
                        onChange={(e) => changeCheckboxDops(e)}
                        name={index}
                        className="checkbox__disabled"
                        type="checkbox"
                      />
                      <span className="checkbox__active"></span>
                    </label>
                    <div className="kit__item-img">
                      <picture>
                        <source srcSet={item.webp} type="image/webp" />
                        <img src={item.src} alt="#" />
                      </picture>
                    </div>
                    <span
                      onClick={() =>
                        dispatch(openInfo({ name: true, desc: item.info }))
                      }
                      className="kit__item-name"
                    >
                      {item.name}
                    </span>
                  </div>

                  <div className="kit__item-prices">
                    <span className="kit__old-price">{item.oldPrice} ₽</span>
                    <span className="kit__new-price">
                      {item.price.toLocaleString()} ₽
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="kit__block-images">
            <div className="kit__images">
              {dops.map((item) => (
                <React.Fragment key={item.id}>
                  <Transition in={item.selected} timeout={200}>
                    {(state) => (
                      <React.Fragment>
                        <div className={`kit__img dops-${item.sort} ${state}`}>
                          <picture>
                            <source srcSet={item.kitWebp} type="image/webp" />
                            <img src={item.kitImg} alt="#" />
                          </picture>
                        </div>
                        {item.id == "482741" ? (
                          <div className={`kit__img accessories-2_2 ${state}`}>
                            <picture>
                              <source
                                srcSet="/images/sale-kit-dop-9_2.webp"
                                type="image/webp"
                              />
                              <img src="/images/sale-kit-dop-9_2.png" alt="#" />
                            </picture>
                          </div>
                        ) : (
                          ""
                        )}
                      </React.Fragment>
                    )}
                  </Transition>
                  <div
                    onClick={() => addDopMobile(item.id)}
                    className={`kit__icon dops-${item.sort} ${
                      item.selected ? "active" : ""
                    }`}
                  >
                    <span></span>
                  </div>
                </React.Fragment>
              ))}
              {mainDops.map((item, index) => (
                <Transition key={item.id} in={item.selected} timeout={0}>
                  {(state) => (
                    <div className={`kit__img main-${index} ${state}`}>
                      <picture>
                        <source srcSet={item.kitWebp} type="image/webp" />
                        <img src={item.kitImg} alt="#" />
                      </picture>
                    </div>
                  )}
                </Transition>
              ))}
            </div>
          </div>
          <div className="kit__block-form">
            <div className="kit__form form-kit">
              <h3 className="form-kit__heading">Заказ</h3>
              <Dropdown
                mainDops={mainDops}
                payload={addMainKit}
                classItem="form-kit__dropdown"
              />

              <ul className="form-kit__list">
                {dops.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.selected ? (
                      <li className="form-kit__item">
                        <span className="form-kit__item-name">
                          <span>{item.name}</span>
                        </span>
                        <span className="form-kit__item-price">
                          {item.price} руб.
                        </span>
                      </li>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </ul>

              <div className="form-kit__total-price">
                Итого:
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              <form>
                <div className="form-kit__inputs">
                  <input
                    className="input form-kit__name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Имя"
                  />
                  <InputMask
                    className="input"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___)-___-__-__"
                    mask="+7 999 999 99 99"
                    maskChar="_"
                  />
                </div>
                <p className="form-kit__info">
                  Менеджеры свяжутся с вами в ближайшее время для уточнения
                  деталей заказа
                </p>
                <button onClick={AddOrderKit} className="form-kit__btn">
                  Заказать
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kit;
