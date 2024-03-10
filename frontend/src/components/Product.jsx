import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { openInfo } from "../store/modalsReducer";
import { fetchBasket } from "../API/BasketService";
import { fetchFavorites } from "../API/FavoritesService";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);
  const user = useSelector((state) => state.user.user);
  const favorites = useSelector((state) => state.user.favorites);
  const [favoritesActive, setFavoritesActive] = useState(false)
  const [startFavorites, setStartFavorites] = useState(true)
  function AddBasket(e) {
    e.preventDefault();
    axios.post(process.env.REACT_APP_SERVER + 'basket', {product_id: product.id},  {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then((response) => {
      // dispatch(fetchBasket(user.id));
      // dispatch(openInfo({name: true, desc: response.data}))
    });
  }

  function AddDeleteFavorites(e) {
    e.preventDefault();
    axios.post(process.env.REACT_APP_SERVER + 'favorite', {product_id: product.id},  {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then((response) => {
      // dispatch(fetchBasket(user.id));
      // dispatch(openInfo({name: true, desc: response.data}))
    });
  }
  // function AddDeleteFavorites(e) {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append("userId", user.id);
  //   data.append("productId", product.id);
  //   axios.post("http://localhost:5000/api/favorites/", data).then((response) => {
  //     dispatch(fetchFavorites(user.id));
  //     setFavoritesActive(response.data)
  //   });
  // }
  // useEffect(() => {
  //   if(startFavorites) {
  //     for(let i = 0; i < favorites.length; i++) {
  //       if(favorites[i].productId == product.id) {
  //         setFavoritesActive(true)
  //       }
  //     }  
  //   }
  //   if(favorites.length && startFavorites) {
  //     setStartFavorites(false)
  //   }
  // }, [favorites])
  return (
    <li className="product">
      <div className="product__link">
        <Link to={`${product.path}`}>
          <img
            className="product__img"
            src={product.img}
            alt="foto1"
          />
          <h3 className="product__heading">{product.name}</h3>
        </Link>

     
        <div className="product__row-prices">
          <span className="product__new-price">{product.price} ₽</span>
          <span className="product__old-price">{product.oldPrice}</span>
        </div>
        <div className="product__row-bottom">
          
            <button
              onClick={AddBasket}
              className="product-button product__btn btn"
            >
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1147 3.14891H3.84302C3.81523 3.14891 3.79021 3.15858 3.76392 3.16391L3.18343 1.38014C3.17689 1.36086 3.16297 1.34659 3.15372 1.32876C3.13788 1.1453 2.97631 1 2.77417 1C2.77381 1 2.77303 1 2.77261 1L0.884173 1.00744C0.670872 1.00855 0.499222 1.16918 0.500003 1.3662C0.500783 1.56287 0.673212 1.72173 0.885733 1.72173C0.886093 1.72173 0.886873 1.72173 0.887294 1.72173L2.48687 1.71529L6.17937 13.0565C5.81254 13.3667 5.57842 13.8086 5.57842 14.3044C5.57842 15.2408 6.39843 16 7.41056 16C8.42233 16 9.24271 15.2407 9.24271 14.3044C9.24271 14.0603 9.18485 13.8296 9.08456 13.6201H14.4152C14.3149 13.8297 14.2571 14.0603 14.2571 14.3044C14.2571 15.2408 15.0771 16 16.0892 16C17.101 16 17.9214 15.2407 17.9214 14.3044C17.9214 13.3681 17.1009 12.6089 16.0892 12.6089C15.7051 12.6089 15.349 12.7192 15.0544 12.9062H8.44508C8.15039 12.7192 7.79473 12.6089 7.41056 12.6089C7.21965 12.6089 7.03912 12.6435 6.86591 12.6935L6.31507 11.0022L16.0329 10.995C16.203 10.995 16.343 10.8911 16.394 10.7494C16.4071 10.7269 16.4214 10.7051 16.4291 10.6794L18.4861 3.6593C18.4993 3.6147 18.5008 3.57004 18.4954 3.52688C18.4957 3.51938 18.5 3.51333 18.5 3.50617C18.5004 3.30882 18.3276 3.14891 18.1147 3.14891ZM16.0896 13.3225C16.6748 13.3225 17.1504 13.7626 17.1504 14.3042C17.1504 14.8456 16.6748 15.2858 16.0896 15.2858C15.5045 15.2858 15.0289 14.8457 15.0289 14.3042C15.029 13.7626 15.5045 13.3225 16.0896 13.3225ZM7.41098 13.3225C7.99615 13.3225 8.47173 13.7626 8.47173 14.3042C8.47173 14.8456 7.99615 15.2858 7.41098 15.2858C6.82581 15.2858 6.35024 14.8457 6.35024 14.3042C6.35024 13.7626 6.82581 13.3225 7.41098 13.3225ZM15.7468 10.2814L6.08334 10.2886L3.99156 3.8632H17.6275L15.7468 10.2814Z"
                  fill="#323232"
                  stroke="#323232"
                  strokeWidth="0.4"
                />
              </svg>
              <span>В корзину</span>
            </button>
          

          {/* <button className="button product__video btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
            >
              <path
                d="M23.75 16.067C24.0833 16.2594 24.0833 16.7406 23.75 16.933L14 22.5622C13.6667 22.7546 13.25 22.5141 13.25 22.1292L13.25 10.8708C13.25 10.4859 13.6667 10.2454 14 10.4378L23.75 16.067Z"
                fill="#686868"
                stroke="#686868"
              />
              <circle cx="17" cy="16.5" r="16" stroke="#686868" />
            </svg>
            <span>видео</span>
          </button> */}
            <button onClick={AddDeleteFavorites} className={`button product__favorites btn ${favoritesActive ? "active" : ""}`}>
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.1096 3.387C28.3521 2.63025 27.4528 2.02994 26.4629 1.62037C25.4731 1.21081 24.4121 1 23.3406 1C22.2691 1 21.2082 1.21081 20.2183 1.62037C19.2284 2.02994 18.3291 2.63025 17.5716 3.387L15.9996 4.95678L14.4276 3.387C12.8976 1.85914 10.8224 1.00079 8.65859 1.00079C6.4948 1.00079 4.41963 1.85914 2.8896 3.387C1.35956 4.91486 0.5 6.98708 0.5 9.1478C0.5 11.3085 1.35956 13.3807 2.8896 14.9086L4.46161 16.4784L15.9996 28L27.5376 16.4784L29.1096 14.9086C29.8674 14.1522 30.4686 13.2541 30.8787 12.2657C31.2889 11.2772 31.5 10.2178 31.5 9.1478C31.5 8.07785 31.2889 7.01838 30.8787 6.02992C30.4686 5.04147 29.8674 4.14339 29.1096 3.387V3.387Z"
                  stroke="#686868"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          
        </div>
      </div>
    </li>
  );
};

export default Product;
