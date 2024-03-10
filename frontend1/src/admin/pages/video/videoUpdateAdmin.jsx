import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { fetchOneVideo } from "../../../API/VideoService";
import { useSelector } from "react-redux";
import MyDropdown from "../../components/MyDropdown";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";

const VideoUpdateAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const params = useParams();
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");

  async function videoItem() {
    const response = await fetchOneVideo(params.id);
    setName(response.name);
    setUrl(response.url);
    setCategoryId(response.categoryId);
  }
  useEffect(() => {
    videoItem();
  }, []);
  async function updateVideo(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("img", file);
    data.append("url", url);
    data.append("category_id", categoryId);
    await axios.post(
      process.env.REACT_APP_SERVER + 'videos/' + params.id,
      data
    ).then((response) => {
      if (response.data.message) {
        dispatch(openInfo({name: true, desc: response.data.message}))
      } else {
        window.location.href ="/admin/video";
      }
    });
  }
  return (
    <section className="admin-update">
      <div className="container">
        <div className="form-admin">
          <Link to="/admin/video" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <h1 className="form-admin__heading heading-admin">Обновить видео</h1>
          <form>
            <div className="admin-update__inputs">
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
              <MyDropdown categoryId={categoryId} setCategoryId={setCategoryId} category={category.data} />
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                placeholder="картинка"
              />
              <button onClick={updateVideo} className="btn-admin" type="submit">
                Обновить видео
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VideoUpdateAdmin;
