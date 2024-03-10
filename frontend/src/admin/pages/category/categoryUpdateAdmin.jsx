import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { fetchOneCategory } from "../../../API/CategoryService";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";


const CategoryUpdateAdmin = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [name, setName] = useState("");
  const valueTransliterate = useTransliterateHook(name); 
  const [url, setUrl] = useState('');

  useMemo(() => {
    setUrl(valueTransliterate)
  }, [name])

  async function categoryItem() {
    const response = await fetchOneCategory(params.id);
    setName(response.name);
    setUrl(response.url);
  }
  useEffect(() => {
    categoryItem();
  }, []);
  async function updateCategory(e) {
    e.preventDefault();
    const data = {}
    data['name'] = name
    data['url'] = url
    await axios.put(
      process.env.REACT_APP_SERVER + 'categories/' + params.id,
      data
    ).then((response) => {
      // if (response.data.errors){
      //   dispatch(openInfo({name: true, desc: response.data.errors[0].message}))
      // } else {
      //   window.location.href = "/admin/category";
      // }
    });
  }
  return (
    <section className="admin-update">
      <div className="container">
        <div className="form-admin">
          <Link to="/admin/category" className="btn-admin-back form-admin__back">Назад</Link>
          <h1 className="form-admin__heading heading-admin">Обновить категорию</h1>
          <form>
            <div className="admin-update__inputs">
              <input
                className="input-admin"
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Введите название категории"
              />
              <input
                className="input-admin"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                type="text"
                placeholder="Введите url категории"
              />
              <button
                onClick={updateCategory}
                className="btn-admin"
                type="submit"
              >
                Обновить категорию
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CategoryUpdateAdmin;
