import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";

const BannerAddAdmin = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");

  function addBanner(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("img", file);
    axios.post(process.env.REACT_APP_SERVER + 'banners', data).then((response) => {
      // if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href = "/admin/banner";
      // }
    });
  }

  return (
    <section className="admin-add">
      <div className="container">
        <div className="admin-add__form form-admin">
          <Link to="/admin/banner" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <form>
            <div className="admin-add__inputs form-admin__inputs">
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                placeholder="картинка"
              />
            </div>
            <button
              onClick={addBanner}
              type="submit"
              className="admin-add__btn btn-admin"
            >
              Добавить баннер
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BannerAddAdmin;
