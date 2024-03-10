import React from "react";
import Product from "../../components/Product";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const PopularProducts = () => {
  const popularProducts = useSelector((state) => state.product.product);
  return ( 
    <section className="popular-products">
      <div className="container">
        <div className="popular-products__top">
          <h3 className="heading popular-products__heading">
            <img src="/images/popular-icon.svg" alt="foto" />
            Товары
          </h3>
          <span className="popular-products__watch watch">
            Смотреть всё
            <svg
              width="7"
              height="9"
              viewBox="0 0 7 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 8L5.25 4.5L1.25 1"
                stroke="#323232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="popular-products__wrapper">
          <Swiper spaceBetween={30} slidesPerView={"auto"}>
            {popularProducts.data.map((product) => (
              <SwiperSlide>
                <Product product={product} key={product.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
