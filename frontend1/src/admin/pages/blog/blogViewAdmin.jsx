import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneBlogSlug } from "../../../API/BlogService";
import { useSelector } from "react-redux";
const BlogViewAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const params = useParams();
  const [blogData, setBlogData] = useState("");
  async function blogItem() {
    const response = await fetchOneBlogSlug(params.id);
    setBlogData(response.data);
  }
  useEffect(() => {
    blogItem();
  }, []);
  return (
    <section className="admin-view">
      <div className="container">
        <Link to="/admin/blog" className="btn-admin-back admin-view__back">
          Назад
        </Link>
        <h1 className="admin-view__heading heading-admin">Просмотр блога</h1>
        <table className="admin-view__table table-admin">
          <tbody>
            <tr>
              <td>#</td>
              <td>{blogData.id}</td>
            </tr>
            <tr>
              <td>Название блога</td>
              <td>{blogData.name}</td>
            </tr>
            <tr>
              <td>Url блога</td>
              <td>{blogData.url}</td>
            </tr>
            <tr>
              <td>Описание блога</td>
              <td dangerouslySetInnerHTML={{ __html: blogData.desc }}></td>
            </tr>
            <tr>
              <td>Краткое описание блога</td>
              <td>{blogData.detailed}</td>
            </tr>
            <tr>
              <td>Категория</td>
              <td>
                {category?.data?.map((item) => (
                  <React.Fragment>
                    {item.id == blogData.category_id ? item.name : ""}
                  </React.Fragment>
                ))}{" "}
              </td>
            </tr>
            <tr>
              <td>Картинка</td>
              <td>
                <img
                  src={blogData.img}
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

export default BlogViewAdmin;
