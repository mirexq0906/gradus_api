import React, { useState, useEffect, useMemo} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { fetchOneBlog } from "../../../API/BlogService";
import { useSelector } from "react-redux";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import MyReactQuill from "../../components/MyReactQuill";
import MyDropdown from "../../components/MyDropdown";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";
const BlogUpdateAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const params = useParams();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [detailed, setDetailed] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const valueTransliterate = useTransliterateHook(name);

  useMemo(() => {
    setUrl(valueTransliterate);
  }, [name]);

  async function blogItem() {
    const response = await fetchOneBlog(params.id);
    setName(response.name);
    setUrl(response.url);
    setDesc(response.desc);
    setDetailed(response.detailed);
    setCategoryId(response.categoryId);
  }
  useEffect(() => {
    blogItem();
  }, []);
  async function updateBlog(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("img", file);
    data.append("url", url);
    data.append("desc", desc);
    data.append("detailed", detailed);
    data.append("category_id", categoryId);
    await axios.post(process.env.REACT_APP_SERVER + "blogs/" + params.id, data).then((response) => {
      // if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href = "/admin/blog";
      // }
    });
  }

  return (
    <section className="admin-update">
      <div className="container">
        <div className="form-admin">
          <Link to="/admin/blog" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <h1 className="form-admin__heading heading-admin">Обновить блог</h1>
          <form>
            <div className="admin-update__inputs">
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
              <MyDropdown categoryId={categoryId} setCategoryId={setCategoryId} category={category.data} />
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                placeholder="картинка"
              />
              <button onClick={updateBlog} className="btn-admin" type="submit">
                Обновить блог
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogUpdateAdmin;
