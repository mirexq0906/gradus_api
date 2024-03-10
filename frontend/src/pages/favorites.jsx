import React, { useEffect,useState } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { addUserFavorites } from "../store/userReducer";
import axios from "axios";

const Favorites = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);
  const favorites = useSelector((state) => state.user.favorites);
  const userFavorites = useSelector((state) => state.user.userFavorites);
  const [favoritesProducts, setFavoritesProducts] = useState()

  function GetFavorites() {
    axios.get(process.env.REACT_APP_SERVER + 'favorite', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).then((response) => {
      setFavoritesProducts(response)
    });
  }
  useEffect(() => {
    GetFavorites(); 
    
  },[]); 
  // useEffect(() => {
  //   let q = [];
  //   for (let i = 0; i < favorites.length; i++) {
  //     for (let j = 0; j < products.length; j++) {
  //       if (favorites[i].productId == products[j].id) {
  //         q.push(products[j]);
  //       }
  //     }
  //   }
  //   dispatch(addUserFavorites(q));
  // }, [favorites]);
  return (
    <main className="favorites">
      <div className="container">
        <h1 className="heading favorites__heading">Избранные товары</h1>
        <ul className="favorites__list">
          {favoritesProducts?.data?.data?.length ? (
            favoritesProducts?.data?.data?.map((item) => (
              <Product product={item} key={item.id} />
            ))
          ) : (
            <h3>Избранные товары отсутствуют</h3>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Favorites;
