import React from "react";
import Product from "../../components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
const PopularProducts = ({ popularProducts=[] }) => {
  return (
    <section className="popular-products">
      <div className="container">
        <h3 className="popular-products__heading heading">
          Товары в этом разделе:
        </h3>
        <div className="popular-products__wrapper">
          <Swiper
            slidesPerView={"auto"}
            breakpoints={{
              0: {
                spaceBetween: 15,
              },
              576: {
                spaceBetween: 30,
              },
            }}
          >
            {popularProducts.map((item) => (
              <React.Fragment key={item.id}>
                  <SwiperSlide key={item.id}>
                      <Product product={item} />
                  </SwiperSlide>
              </React.Fragment>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
