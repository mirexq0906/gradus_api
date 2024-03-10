import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal/Modal";
import InputMask from "react-input-mask";
import axios from "axios";
import { closeModal, openInfo } from "../store/modalsReducer";

function ModalCall() {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.modals.ModalCall);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  function addCall(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("phone", phone);
    axios
      .post("http://localhost:5000/api/call-client/", data)
      .then((response) => {
        if (response.data.errors) {
          dispatch(closeModal(false));
          dispatch(
            openInfo({ name: true, desc: response.data.errors[0].message })
          );
        } else {
          dispatch(closeModal(false));
          dispatch(
            openInfo({ name: true, desc: "Форма успешно отправлена" })
          );
          setName('')
          setPhone('')
        }
      });
  }
  return (
    <Modal modalClass={"modal-call"} active={activeModal.name}>
      <h3>Заказать звонок</h3>
      <form>
        <div className="modal-call__inputs">
          <InputMask
            className="input"
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maskChar="_"
          />

          <InputMask
            className="input"
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="+7 999 999 99 99"
            maskChar="_"
          />
        </div>
        <button onClick={addCall} className="btn modal-call__btn">
          Отправить
        </button>
      </form>
      <p>
        Мы свяжемся с Вами в течение 10 минут и проконсультируем по любым
        вопросам
      </p>
    </Modal>
  );
}

export default ModalCall;
