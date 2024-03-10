import React, { useEffect, useState, useMemo } from "react";
import Product from "../../components/Product";
import Filter from "../../components/Filter";
import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
const Catalog = () => {
  const params = useParams();
  const subCategories = useSelector((state) => state.subCategory.subCategory);
  const products = useSelector((state) => state.product.product);
  const [currentId, setCurrentId] = useState();
  const [fetchSubCategories, setFetchSubCategories] = useState();
  const searchProducts = useSelector((state) => state.product.filter);
  const maxPriceFilter = useSelector((state) => state.product.maxPriceFilter);
  const minPriceFilter = useSelector((state) => state.product.minPriceFilter);
  const selectValue = useSelector((state) => state.product.filterOption);
  const [filterProducts, setFilterProducts] = useState([]);
  const [fetchData, setFetchData] = useState({});

  useEffect(() => {
    const updatedFetchData = { ...fetchData };

  // Filters
  const priceFilters = [];
  if (maxPriceFilter !== 0 || !maxPriceFilter.length) {
    priceFilters.push({
      field: "price",
      operator: "decrease",
      value: maxPriceFilter,
    });
  }
  if (minPriceFilter !== 0 || !minPriceFilter.length) {
    priceFilters.push({
      field: "price",
      operator: "increase",
      value: minPriceFilter,
    });
  }
  updatedFetchData.filters = priceFilters;
  if ((maxPriceFilter == 0 || !maxPriceFilter.length) && (minPriceFilter == 0 || !minPriceFilter.length)) {
    delete updatedFetchData.filters
  }
  // Sorting
  if (selectValue === "priceUp") {
    updatedFetchData.sort = { field: "price", order: "asc" };
  } else if (selectValue === "priceDown") {
    updatedFetchData.sort = { field: "price", order: "desc" };
  } else {
    updatedFetchData.sort = {};
  }

  setFetchData(updatedFetchData);
    
  }, [maxPriceFilter, minPriceFilter, selectValue]);
  

  useEffect(() => {
    async function FetchData() {
      const response = await axios.get(process.env.REACT_APP_SERVER + 'sub_categories/' + params.subcategory, { params: fetchData })
      setFetchSubCategories(response.data.data)
    }
    FetchData()

  }, [fetchData]);

  return (
    <section className={"catalog"}>
      <div className={"container"}>
        <h1 className={"catalog__heading heading"}>{fetchSubCategories?.name}</h1>
        <div className={"catalog__hero hero-catalog"}>
          <Filter classElement={"hero-catalog__filter"} />
          <div className="catalog__sort">
            <img src="/images/filter.svg" alt="" />
            Сортировка
          </div>
          <ul className={"hero-catalog__list"}>
            {fetchSubCategories?.products.length
            ?
            fetchSubCategories?.products.map((item) => 
            <React.Fragment>
                  <Product product={item}  />
              </React.Fragment>) 
              :
              <h3>Товаров нет</h3>
}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
