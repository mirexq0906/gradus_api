import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { fetchOneSubCategory } from "../../../API/SubCategoryService";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import { useSelector } from "react-redux";
import MyDropdown from "../../components/MyDropdown";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";

const SubCategoryUpdateAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const params = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const valueTransliterate = useTransliterateHook(name);

  useMemo(() => {
    setUrl(valueTransliterate);
  }, [name]);

  async function subCategoryItem() {
    const response = await fetchOneSubCategory(params.id);
    setName(response.name);
    setUrl(response.url);
    setCategoryId(response.categoryId)
  }
  useEffect(() => {
    subCategoryItem();
  }, []);
  async function updateSubCategory(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("url", url);
    data.append("category_id", categoryId);
    data.append("img", file);
    await axios.post(
      process.env.REACT_APP_SERVER + "sub_categories/" + params.id,
      data
    ).then((response) => {
      // if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href = "/admin/subcategory";
      // }
    });
  }
  return (
    <section className="admin-update">
      <div className="container">
        <div className="form-admin">
          <Link
            to="/admin/subcategory"
            className="btn-admin-back form-admin__back"
          >
            Назад
          </Link>
          <h1 className="form-admin__heading heading-admin">
            Обновить подкатегорию
          </h1>
          <form>
            <div className="admin-update__inputs">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="name"
              />
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="url"
              />
              <MyDropdown categoryId={categoryId} setCategoryId={setCategoryId} category={category.data} />
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                placeholder="Вставьте фото"
              />
              <button
                onClick={updateSubCategory}
                className="btn-admin"
                type="submit"
              >
                Обновить подкатегорию
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubCategoryUpdateAdmin;
