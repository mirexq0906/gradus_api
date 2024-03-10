import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import MyDropdown from "../../components/MyDropdown";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";

const VideoAddAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const valueTransliterate = useTransliterateHook(name);
  function addVideo(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("img", file);
    data.append("url", url);
    data.append("category_id", categoryId);
    axios.post(process.env.REACT_APP_SERVER + 'videos', data).then((response) => {
      // if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href ="/admin/video";
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
          <Link to="/admin/video" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <form>
            <div className="admin-add__inputs form-admin__inputs">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Название видео"
              />
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="url видео"
              />
              <MyDropdown
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                category={category?.data}
              />
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                placeholder="картинка"
              />
            </div>
            <button
              onClick={addVideo}
              type="submit"
              className="admin-add__btn btn-admin"
            >
              Добавить видео
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VideoAddAdmin;
