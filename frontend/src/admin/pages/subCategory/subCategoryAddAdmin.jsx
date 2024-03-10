import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import { useDispatch, useSelector } from "react-redux";
import MyDropdown from "../../components/MyDropdown";
import { openInfo } from "../../../store/modalsReducer";
const SubCategoryAddAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");
  const [categoryId, setCategoryId] = useState();
  const valueTransliterate = useTransliterateHook(name);
  function addSubCategory(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("url", url);
    data.append("category_id", categoryId);
    data.append("img", file);
    axios.post(process.env.REACT_APP_SERVER + "sub_categories", data).then((response) => {
      // if (response.data.errors){
      //   if (response.data.errors[0].message) {
      //     dispatch(openInfo({name: true, desc: response.data.errors[0].message}))
      //   }
      // } else if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href = "/admin/subcategory";
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
            to="/admin/subcategory"
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
                placeholder="Введите название"
              />
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Введите url"
              />
              <MyDropdown
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                category={category.data}
              />
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                placeholder="Вставьте фото"
              />
            </div>
            <button
              onClick={addSubCategory}
              type="submit"
              className="admin-add__btn btn-admin"
            >
              Добавить подкатегорию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubCategoryAddAdmin;
