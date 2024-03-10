import React from "react";
import Article from "../../components/Article";
import { Swiper, SwiperSlide } from "swiper/react";
const Blog = ({ blog=[] }) => {
  return (
    <section className="blog">
      <div className="container">
        <h3 className="blog__heading heading">
          Статьи в этом разделе:
        </h3>
        <div className="blog__wrapper">
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
            {blog.map((item) => (
              <React.Fragment key={item.id}>
                  <SwiperSlide key={item.id}>
                      <Article article={item} />
                  </SwiperSlide>
              </React.Fragment>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
