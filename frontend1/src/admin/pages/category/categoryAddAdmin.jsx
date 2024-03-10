import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";
const CategoryAddAdmin = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const valueTransliterate = useTransliterateHook(name);
  function addCategory(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("url", url);
    axios.post(process.env.REACT_APP_SERVER + 'categories', data).then((response) => {
      // if (response.data.errors){
      //   dispatch(openInfo({name: true, desc: response.data.errors[0].message}))
      // } else {
      //   window.location.href = "/admin/category";
      // }
    });
  }
  useMemo(() => {
    setUrl(valueTransliterate);
  }, [name]);
  return (
    <section className="admin-add">
      <div className="container">
        <div className="admin-add__form form-admin">
          <Link
            to="/admin/category"
            className="btn-admin-back form-admin__back"
          >
            Назад
          </Link>
          <form>
            <div className="admin-add__inputs form-admin__inputs">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Введите название категории"
              />
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Введите url категории"
              />
            </div>
            <button
              onClick={addCategory}
              type="submit"
              className="admin-add__btn btn-admin"
            >
              Добавить категорию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CategoryAddAdmin;
