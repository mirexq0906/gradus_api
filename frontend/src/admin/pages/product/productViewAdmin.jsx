import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneProduct } from "../../../API/ProductService";
import { useSelector } from "react-redux";
const ProductViewAdmin = () => {
  const category = useSelector((state) => state.category.category);
  const subCategory = useSelector((state) => state.subCategory.subCategory);
  const params = useParams();
  const [productData, setProductData] = useState({ gallery: [] });
  async function productItem() {
    const response = await fetchOneProduct(params.id);
    setProductData(response.data);
  }
  useEffect(() => {
    productItem();
  }, []);
  return (
    <section className="admin-view">
      <div className="container">
        <Link to="/admin/product" className="btn-admin-back admin-view__back">
          Назад
        </Link>
        <h1 className="admin-view__heading heading-admin">Просмотр продукт</h1>
        <table className="admin-view__table table-admin">
          <tbody>
            <tr>
              <td>#</td>
              <td>{productData.id}</td>
            </tr>
            <tr>
              <td>Название продукта</td>
              <td>{productData.name}</td>
            </tr>
            <tr>
              <td>Url продукта</td>
              <td>{productData.url}</td>
            </tr>
            <tr>
              <td>Цена</td>
              <td>{productData.price}</td>
            </tr>
            <tr>
              <td>Старая цена</td>
              <td>{productData.oldPrice}</td>
            </tr>
            <tr>
              <td>Подкатегория</td>
              <td>
                {productData.subCategory_id}
                </td>
            </tr>
            <tr>
              <td>Категория</td>
              <td>
                {productData.category_id}
              </td>
            </tr>
            <tr>
              <td>Описание блога</td>
              <td dangerouslySetInnerHTML={{ __html: productData.desc }}></td>
            </tr>
            <tr>
              <td>Картинка</td>
              <td><img src={process.env.REACT_APP_IMAGE + productData.img} alt="#"/></td>
            </tr> 
            <tr>
              <td>Галерея</td>
              <td>
                {productData.gallery.map((item, index) => (
                  <img key={index} src={process.env.REACT_APP_IMAGE + item} alt="#"/>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductViewAdmin;
