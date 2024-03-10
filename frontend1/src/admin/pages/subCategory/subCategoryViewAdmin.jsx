import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneSubCategory } from "../../../API/SubCategoryService";
import { useSelector } from "react-redux";
const SubCategoryViewAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const params = useParams();
  const [subCategoryData, setSubCategoryData] = useState("");
  async function subCategoryItem() {
    const response = await fetchOneSubCategory(params.id);
    setSubCategoryData(response.data);
  }
  useEffect(() => {
    subCategoryItem();
  }, []);
  return (
    <section className="admin-view">
      <div className="container">
        <Link
          to="/admin/subcategory"
          className="btn-admin-back admin-view__back"
        >
          Назад
        </Link>
        <h1 className="admin-view__heading heading-admin">
          Просмотр подкатегории
        </h1>
        <table className="admin-view__table table-admin">
          <tbody>
            <tr>
              <td>#</td>
              <td>{subCategoryData.id}</td>
            </tr>
            <tr>
              <td>Название подкатегории</td>
              <td>{subCategoryData.name}</td>
            </tr>
            <tr>
              <td>Категория</td>
              <td>
                {category?.data?.map((item) => (
                  <React.Fragment>
                    {item.id == subCategoryData.category_id ? item.name : ""}
                  </React.Fragment>
                ))}{" "}
              </td>
            </tr>
            <tr>
              <td>Картинка</td>
              <td>
                <img
                  src={ subCategoryData.img}
                  alt="#"
                />
              </td>
            </tr>
            <tr>
              <td>Url подкатегории</td>
              <td>{subCategoryData.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SubCategoryViewAdmin;
