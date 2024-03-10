import React, { useEffect, useState, useMemo } from "react";
import Product from "../../components/Product";
import Filter from "../../components/Filter";
import { useSelector } from "react-redux";
const CatalogSearch = () => {
  const products = useSelector((state) => state.product.product);
  const searchProducts = useSelector((state) => state.product.filter);
  const maxPriceFilter = useSelector((state) => state.product.maxPriceFilter);
  const minPriceFilter = useSelector((state) => state.product.minPriceFilter);
  const selectValue = useSelector((state) => state.product.filterOption);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);
 
  const filterPrice = useMemo(() => {
    if (selectValue === "priceUp") {
      return [...filterProducts].sort((a, b) => a.price - b.price);
    }
    if (selectValue === "priceDown") {
      return [...filterProducts].sort((a, b) => b.price - a.price);
    }
    return filterProducts;
  }, [selectValue, filterProducts]);

  const sortedAndSearchProducts = useMemo(() => {
    const filtered = filterPrice.filter(
      (item) => item.price >= minPriceFilter && item.price <= maxPriceFilter
    );
    return filtered.filter((product) =>
      product.name.toLowerCase().includes(searchProducts.toLowerCase())
    );
  }, [searchProducts, filterPrice, maxPriceFilter, minPriceFilter]);
  return (
    <section className={"catalog-search"}>
      <div className={"container"}>
        <h3 className={"catalog-search__heading heading"}>
          {sortedAndSearchProducts.length
            ? `По вашему запросу "${searchProducts}" найдено:`
            : `По вашему запросу "${searchProducts}" ничего не найдено`}
        </h3>
        <div className={"catalog-search__hero catalog-search"}>
          <Filter classElement={"catalog-search__filter"} />
          <div className="catalog-search__sort">
            <img src="/images/filter.svg" alt="" />
            Сортировка
          </div>
          <ul className={"catalog-search__list"}>
            {sortedAndSearchProducts.map((item) => (
              <React.Fragment key={item.id}>
                {item ? <Product product={item} key={item.id} /> : ""}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CatalogSearch;
