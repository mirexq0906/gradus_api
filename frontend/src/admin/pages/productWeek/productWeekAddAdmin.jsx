import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { openInfo } from "../../../store/modalsReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ProductWeekAddAdmin = () => {
  const product = useSelector((state) => state.product.product);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  const dispatch = useDispatch();
  useMemo(() => {
    if (searchProducts.length) {
      setFilterProducts(
        product.data.filter((product) =>
          product.name.toLowerCase().includes(searchProducts.toLowerCase())
        )
      );
    } else {
      setFilterProducts([]);
    }
  }, [searchProducts]);

  function addProduct(e) {
    e.preventDefault();
    let bool = false;
    for (let i = 0; i < product.data.length; i++) {
      if (product.data[i].name == searchProducts) {
        const data = new FormData();
        data.append("product_id", product.data[i].id);
        axios
          .post(process.env.REACT_APP_SERVER + "week_products", data)
          .then((response) => {
            // if (response.data.errors) {
            //   dispatch(
            //     openInfo({ name: true, desc: "Поле не должно быть пустым" })
            //   );
            // } else {
            //   window.location.href = "/admin/product-week";
            // }
          });
          bool = true;
        break;
      } else {
        bool = false;
      }
    }
    if (bool == false) {
      dispatch(openInfo({ name: true, desc: "Товара не существует" }));
    }
  }

  return (
    <section className="admin-add">
      <div className="container">
        <div className="admin-add__form form-admin">
          <Link
            to="/admin/product-week"
            className="btn-admin-back form-admin__back"
          >
            Назад
          </Link>
          <form>
            <div className="admin-add__inputs form-admin__inputs">
              <input
                className="input-admin"
                type="text"
                value={searchProducts}
                onChange={(e) => setSearchProducts(e.target.value)}
              />
              <ul className="admin-add__list">
                {filterProducts.map((item) => (
                  <li onClick={() => setSearchProducts(item.name)}>
                    {item.name}
                  </li>
                ))}
              </ul>
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

export default ProductWeekAddAdmin;
