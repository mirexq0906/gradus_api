import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
const Category = ({ name='', category=[] }) => {
  return (
    <section className="category">
      <div className="container">
        <h3 className="heading category__heading">
          {name}
        </h3>
        <div className="category__wrapper">
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
            {category.map((item) => (
              <React.Fragment key={item.id}>
                  <SwiperSlide key={item.id} className="category__item">
                    <Link
                      className="category__link"
                      to={item.url}
                    >
                      <div className="category__item-img">
                        <img
                          src={item.img}
                          alt="foto"
                        />
                      </div>
                      <div className="category__item-content">
                        <h3 className="category__item-heading">{item.name}</h3>
                        <p className="category__item-desc">{item.desc}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
              </React.Fragment>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Category;
