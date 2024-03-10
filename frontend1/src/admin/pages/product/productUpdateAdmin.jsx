import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { fetchOneProduct } from "../../../API/ProductService";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch, useSelector } from "react-redux";
import MyReactQuill from "../../components/MyReactQuill";

const ProductUpdateAdmin = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [file, setFile] = useState("");
  const [gallery, setGallery] = useState([]);
  const valueTransliterate = useTransliterateHook(name);

  const subCategory = useSelector((state) => state.subCategory.subCategory);
  const category = useSelector((state) => state.category.category);
  useMemo(() => {
    setUrl(valueTransliterate);
  }, [name]);

  async function productItem() {
    const response = await fetchOneProduct(params.id);
    setName(response.data.name);
    setUrl(response.data.url);
    setPrice(response.data.price);
    setOldPrice(response.data.oldPrice);
    setSubCategoryId(response.data.subCategoryId);
  }
  useEffect(() => {
    productItem();
  }, []);
  async function updateProduct(e) {
    let idCategory;
    let urlCategory;
    let urlSubCategory;
    for (let i = 0; i < subCategory.data.length; i++) {
      if (subCategory.data[i].id == subCategoryId) {
        idCategory = subCategory.data[i].category_id;
        urlSubCategory = subCategory.data[i].url;
      }
    }

    for (let i = 0; i < category.data.length; i++) {
      if (category.data[i].id == idCategory) {
        urlCategory = category.data[i].url;
      }
    }

    let urlTotal = `/${urlCategory}/${urlSubCategory}/${url}`

    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("url", url);
    data.append("path", urlTotal);
    data.append("price", price);
    data.append("oldPrice", oldPrice);
    data.append("subCategory_id", subCategoryId);
    data.append("category_id", idCategory);
    data.append("desc", desc);
    data.append("img", file);
    for (let i = 0; i < gallery.length; i++) {
      data.append("gallery[]", gallery[i]);
    }
    await axios.post(
      process.env.REACT_APP_SERVER + "products/" + params.id,
      data
    ).then((response) => {
      // if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href ="/admin/product";
      // }
    });
  }
  return (
    <section className="admin-update">
      <div className="container">
        <div className="form-admin">
          <Link to="/admin/product" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <h1 className="form-admin__heading heading-admin">
            Обновить продукт
          </h1>
          <form>
            <div className="admin-update__inputs">
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Название продукта"
              />
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="url"
              />
              <input
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Цена"
              />
              <input
                value={oldPrice}
                onChange={(event) => setOldPrice(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Старая цена"
              />
              <MyReactQuill desc={desc} setDesc={setDesc} />
              <input
                value={subCategoryId}
                onChange={(event) => setSubCategoryId(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="id подкатегории"
              />
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                placeholder="картинка"
              />
              <input
                onChange={(event) => setGallery(event.target.files)}
                multiple
                name="gallery[]"
                type="file"
                placeholder="галерея"
              />
              <button
                onClick={updateProduct}
                className="btn-admin"
                type="submit"
              >
                Обновить продукт
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductUpdateAdmin;
