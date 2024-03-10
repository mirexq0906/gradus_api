import React, { useState, useEffect } from 'react';
import Category from "../containers/catalog/category";
import PopularProducts from "../containers/catalog/popularProducts";
import Blog from "../containers/catalog/blog";
import Reviews from "../containers/catalog/reviews";
import { useParams } from "react-router-dom";
import { fetchOneCategory } from '../API/CategoryService';
const Catalog = () => {
    const [category, setCategory] = useState([])
    const params = useParams();

  useEffect( () => {
    async function Fetch() {
      const item = await fetchOneCategory(params.slug)
      setCategory(item)
    }
     Fetch()
  }, [])
    return (
        <main className="catalog-page">
            <Category name={category.name} category={category.sub_categories}/>
            <PopularProducts popularProducts={category.products}/>
            <Blog blog={category.blogs}/>
            <Reviews rewiews={category.videos}/>
        </main>
    );
};

export default Catalog;