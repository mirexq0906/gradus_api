import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import axios from "axios";
import { closeModal, openInfo } from "../../store/modalsReducer";
const Forms = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  function addCall(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("phone", phone);
    axios
      .post(process.env.REACT_APP_SERVER + "call_clients", data)
      .then((response) => {
        // if (response.data.errors) {
        //   dispatch(closeModal(false));
        //   dispatch(
        //     openInfo({ name: true, desc: response.data.errors[0].message })
        //   );
        // } else {
        //   dispatch(closeModal(false));
        //   dispatch(openInfo({ name: true, desc: "Форма успешно отправлена" }));
        //   setName("");
        //   setPhone("");
        // }
      });
  }
  function addEmail(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    axios
      .post(process.env.REACT_APP_SERVER + "email_clients", data)
      .then((response) => {
        // if (response.data.errors) {
        //   dispatch(closeModal(false));
        //   dispatch(
        //     openInfo({ name: true, desc: response.data.errors[0].message })
        //   );
        // } else {
        //   dispatch(closeModal(false));
        //   dispatch(openInfo({ name: true, desc: "Форма успешно отправлена" }));
        //   setEmail("");
        // }
      });
  }
  return (
    <section className="forms">
      <div className="container">
        <div className="forms__row">
          <div className="feedback">
            <img
              className="feedback__image"
              src="/images/feedback-image.png"
              alt="foto"
            />
            <div className="feedback__content">
              <h3 className="feedback__heading">ОСТАЛИСЬ ВОПРОСЫ?</h3>
              <p className="feedback__desc">
                Звоните прямо сейчас, и мы ответим или оставьте свои данные, и
                мы свяжемся с вами в ближайшее время
              </p>
              <a className="feedback__phone" href="tel:89999999999">
                8 999 999 99 99
              </a>
              <form className="feedback__form" method="post">
                <div className="feedback__input-wrapper">
                  <InputMask
                    className="feedback__name"
                    placeholder="Имя"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maskChar="_"
                  />
                </div>
                <div className="feedback__input-wrapper">
                  <InputMask
                    className="feedback__form-phone"
                    placeholder="+7"
                    type="text"
                    value={phone}
                    mask="+7 999 999 99 99"
                    onChange={(e) => setPhone(e.target.value)}
                    maskChar="_"
                  />
                </div>
                <button className="feedback__btn btn" onClick={addCall}>
                  Позвоните мне
                </button>
              </form>
            </div>
          </div>
          <div className="subscription">
            <img
              className="subscription__image"
              src="/images/subscr-image.png"
              alt="foto"
            />
            <div className="subscription__content">
              <h3 className="subscription__heading">
                Дарим <span>300 рублей</span>
              </h3>
              <p className="subscription__small">*при покупке от 5000 рублей</p>
              <p className="subscription__desc">
                Подпишитесь и получайте наши выгодные предложения, новости и
                полезные материалы
              </p>
              <form className="subscription__form" method="post">
                <input
                  className="subscription__email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={addEmail} className="subscription__btn btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                  >
                    <path
                      d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
