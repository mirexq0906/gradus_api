import React, { useState, useEffect } from "react";
import Product from "../../components/Product";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
const OtherProducts = ({ product }) => {
  const params = useParams();
  const category = useSelector((state) => state.category.category);
  const products = useSelector((state) => state.product.product);
  const [categoryId, setCategoryId] = useState(0);
  useEffect(() => {
    for (let i = 0; i < category.length; i++) {
      if (category[i].url == params.slug) {
        setCategoryId(category[i].id);
      }
    }
  }, [categoryId]);
  return (
    <section className={"other-products"}>
      <div className="container">
        <div className="other-products__similar">
          <h3 className="other-products__heading">Похожие товары:</h3>
          <div className="other-products__wrapper">
            <Swiper spaceBetween={30} slidesPerView={"auto"}>
              {products.map((item) =>
                product.id !== item.id && item.categoryId == categoryId ? (
                  <SwiperSlide key={item.id}> 
                    <Product product={item} key={product.id} />
                  </SwiperSlide> 
                ) : (
                  ""
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;
