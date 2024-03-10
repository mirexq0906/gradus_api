import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useTransliterateHook } from "../../../hooks/useTransliterateHook";
import MyReactQuill from "../../components/MyReactQuill";
import MyDropdown from "../../components/MyDropdown";
import { openInfo } from "../../../store/modalsReducer";
import { useDispatch } from "react-redux";

const ProductAddAdmin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState("");
  const [gallery, setGallery] = useState([]);
  const subCategory = useSelector((state) => state.subCategory.subCategory);
  const category = useSelector((state) => state.category.category);
  const valueTransliterate = useTransliterateHook(name);
  function addProduct(e) {
    e.preventDefault();
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
      
    

    axios.post(process.env.REACT_APP_SERVER + "products", data).then((response) => {
      // if (response.data.errors){
      //   if (response.data.errors[0].message) {
      //     dispatch(openInfo({name: true, desc: response.data.errors[0].message}))
      //   }
      // } else if (response.data.message) {
      //   dispatch(openInfo({name: true, desc: response.data.message}))
      // } else {
      //   window.location.href ="/admin/product";
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
          <Link to="/admin/product" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <form>
            <div className="admin-add__inputs form-admin__inputs">
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
              <MyDropdown
                categoryId={subCategoryId}
                setCategoryId={setSubCategoryId}
                category={subCategory.data}
              />
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                placeholder="картинка"
              />
              <input
                onChange={(event) => setGallery(event.target.files)}
                multiple
                type="file"
                name="gallery[]"
                id="1"
                placeholder="галерея"
              />
            </div>
            <button
              onClick={addProduct}
              type="submit"
              className="admin-add__btn btn-admin"
            >
              Добавить продукт
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductAddAdmin;
