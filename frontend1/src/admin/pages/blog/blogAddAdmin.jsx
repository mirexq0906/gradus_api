import React, { useState, useMemo } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import "react-quill/dist/quill.snow.css";
import MyReactQuill from "../../components/MyReactQuill";
import MyDropdown from "../../components/MyDropdown";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";

const BlogAddAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [detailed, setDetailed] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const valueTransliterate = useTransliterateHook(name);
  function addBlog(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("img", file);
    data.append("url", url);
    data.append("desc", desc);
    data.append("detailed", detailed);
    data.append("category_id", categoryId);
    axios.post(process.env.REACT_APP_SERVER + "blogs", data).then((response) => {
      // if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href = "/admin/blog";
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
          <Link to="/admin/blog" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <form>
            <div className="admin-add__inputs form-admin__inputs">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Название блога"
              />
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="url блога"
              />
              <MyReactQuill desc={desc} setDesc={setDesc} />
              <input
                value={detailed}
                onChange={(event) => setDetailed(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Краткое описание блога"
              />
              <MyDropdown
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                category={category.data}
              />
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                placeholder="картинка"
              />
            </div>
            <button
              onClick={addBlog}
              type="submit"
              className="admin-add__btn btn-admin"
            >
              Добавить блог
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogAddAdmin;
