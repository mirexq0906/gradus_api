import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneVideo } from "../../../API/VideoService";
import { useSelector } from "react-redux";
const VideoViewAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const params = useParams();
  const [videoData, setVideoData] = useState("");
  async function videoItem() {
    const response = await fetchOneVideo(params.id);
    setVideoData(response.data);
  }
  useEffect(() => {
    videoItem();
  }, []);
  return (
    <section className="admin-view">
      <div className="container">
        <Link to="/admin/video" className="btn-admin-back admin-view__back">
          Назад
        </Link>
        <h1 className="admin-view__heading heading-admin">Просмотр видео</h1>
        <table className="admin-view__table table-admin">
          <tbody>
            <tr>
              <td>#</td>
              <td>{videoData.id}</td>
            </tr>
            <tr>
              <td>Название видео</td>
              <td>{videoData.name}</td>
            </tr>
            <tr>
              <td>Url видео</td>
              <td>{videoData.url}</td>
            </tr>
            <tr>
              <td>Категория</td>
              <td>
                {category?.data?.map((item) => (
                  <React.Fragment>
                    {item.id == videoData.category_id ? item.name : ""}
                  </React.Fragment>
                ))}{" "}
              </td>
            </tr>
            <tr>
              <td>Картинка</td>
              <td>
                <img
                  src={ videoData.img}
                  alt="#"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default VideoViewAdmin;
