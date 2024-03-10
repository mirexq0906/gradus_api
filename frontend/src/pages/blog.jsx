import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openInfo } from "../store/modalsReducer";
const Blog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState("");
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER + 'blogs/' + params.slug)
      .then((response) => {
        if (response.data.message) {
          dispatch(openInfo({ name: true, desc: "Данные не загрузились" }));
        } else {
          setBlogData(response.data)
          const data = {};
          let count = +response.data.data.views + 1
          data['views'] = count
          axios.put(process.env.REACT_APP_SERVER + 'blogs/' + params.slug, data)
        }
      });
  }, []);
  return (
    <main className="blog-page">
      <div className="container">
        <div className="blog-page__content">
          <h3>{blogData?.data?.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: blogData?.data?.desc }}></div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
