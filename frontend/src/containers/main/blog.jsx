import React from "react";
import Article from "../../components/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from "react-redux";
const Blog = () => {
  const blog = useSelector((state) => state.blog.blog);
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__top">
          <h3 className="blog__heading heading">
            <img src="/images/blog-icon.svg" alt="foto" />
            Блог
          </h3>
          <span className="blog__watch watch">
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
        <div className="blog__wrapper">
          <Swiper spaceBetween={30} slidesPerView={"auto"}>
            {blog.map((article) => (
              <SwiperSlide>
                <Article key={article.id} article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
