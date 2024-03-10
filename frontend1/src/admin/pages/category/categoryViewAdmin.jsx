import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneCategory } from "../../../API/CategoryService";
const CategoryViewAdmin = () => {
  const params = useParams();
  const [categoryData, setCategoryData] = useState("");
  async function categoryItem() {
    const response = await fetchOneCategory(params.id);
    setCategoryData(response);
  }
  useEffect(() => {
    categoryItem();
  }, []);
  console.log(params)
  return (
    <section className="admin-view">
      <div className="container">
        <Link to="/admin/category" className="btn-admin-back admin-view__back">
          Назад
        </Link>
        <h1 className="admin-view__heading heading-admin">
          Просмотр категории
        </h1>
        <table className="admin-view__table table-admin">
          <tbody>
            <tr>
              <td>#</td>
              <td>{categoryData.id}</td>
            </tr>
            <tr>
              <td>Название категории</td>
              <td>{categoryData.name}</td>
            </tr>
            <tr>
              <td>Url категории</td>
              <td>{categoryData.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CategoryViewAdmin;
