import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import Count from "../../components/UI/Count/Count";
import { openInfo } from "../../store/modalsReducer";

import axios from "axios";
import { fetchBasket } from "../../API/BasketService";

const Hero = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);
  const user = useSelector((state) => state.user.user);
  const banner = useSelector((state) => state.banner.banner);
  const product = useSelector((state) => state.product.product);
  const productWeek = useSelector((state) => state.product.productWeek);

  function AddBasket(id) {
    const data = new FormData();
    data.append("userId", user.id);
    data.append("productId", id);
    axios.post("http://localhost:5000/api/basket/", data).then((response) => {
      dispatch(fetchBasket(user.id));
      dispatch(openInfo({name: true, desc: response.data}))
    });
  }
  return (
    <section className={"hero"}>
      <div className={"container"}>
        <div className={"hero__row"}>
          <div className={"hero__banner"}>
            <Swiper
              spaceBetween={50}
              loop={true}
              loopedSlides={1}
              breakpoints={{
                1: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                  spaceBetween: 30,
                },
                1550: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }}
            >
            {banner?.data?.map((item) =>
              <SwiperSlide>
               <img src={item.img} alt="foto" />
              </SwiperSlide>
            )}
            </Swiper>
          </div>
          <div className={"hero__product"}>
            <Swiper spaceBetween={50} slidesPerView={1}>
              {productWeek.map((item) => 
                    <SwiperSlide>
                      <div className={"hero__product-top"}>
                        <h3 className={"hero__product-heading"}>
                          Товар недели
                        </h3>
                        <div className={"hero__product-count"}>
                          <Count />
                        </div>
                      </div>
                      <div className={"hero__product-bottom"}>
                        <img
                          className={"hero__product-image"}
                          src={item.img}
                          alt="foto"
                        />
                        <div className={"hero__product-content"}>
                          <div className={"hero__product-prices"}>
                            <span className={"hero__product-new-price"}>
                              {item.price.toLocaleString()}&nbsp;₽
                            </span>
                            <span className={"hero__product-old-price"}>
                            {item.oldPrice.toLocaleString()}&nbsp;₽
                            </span>
                          </div>
                          <p className={"hero__product-desc"}>
                            {item.name}
                          </p>
                          {auth ? (
                            <button onClick={() => AddBasket(item.id)} className="hero__product-btn product-button btn">
                              <svg
                                width="19"
                                height="17"
                                viewBox="0 0 19 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1147 3.14891H3.84302C3.81523 3.14891 3.79021 3.15858 3.76392 3.16391L3.18343 1.38014C3.17689 1.36086 3.16297 1.34659 3.15372 1.32876C3.13788 1.1453 2.97631 1 2.77417 1C2.77381 1 2.77303 1 2.77261 1L0.884173 1.00744C0.670872 1.00855 0.499222 1.16918 0.500003 1.3662C0.500783 1.56287 0.673212 1.72173 0.885733 1.72173C0.886093 1.72173 0.886873 1.72173 0.887294 1.72173L2.48687 1.71529L6.17937 13.0565C5.81254 13.3667 5.57842 13.8086 5.57842 14.3044C5.57842 15.2408 6.39843 16 7.41056 16C8.42233 16 9.24271 15.2407 9.24271 14.3044C9.24271 14.0603 9.18485 13.8296 9.08456 13.6201H14.4152C14.3149 13.8297 14.2571 14.0603 14.2571 14.3044C14.2571 15.2408 15.0771 16 16.0892 16C17.101 16 17.9214 15.2407 17.9214 14.3044C17.9214 13.3681 17.1009 12.6089 16.0892 12.6089C15.7051 12.6089 15.349 12.7192 15.0544 12.9062H8.44508C8.15039 12.7192 7.79473 12.6089 7.41056 12.6089C7.21965 12.6089 7.03912 12.6435 6.86591 12.6935L6.31507 11.0022L16.0329 10.995C16.203 10.995 16.343 10.8911 16.394 10.7494C16.4071 10.7269 16.4214 10.7051 16.4291 10.6794L18.4861 3.6593C18.4993 3.6147 18.5008 3.57004 18.4954 3.52688C18.4957 3.51938 18.5 3.51333 18.5 3.50617C18.5004 3.30882 18.3276 3.14891 18.1147 3.14891ZM16.0896 13.3225C16.6748 13.3225 17.1504 13.7626 17.1504 14.3042C17.1504 14.8456 16.6748 15.2858 16.0896 15.2858C15.5045 15.2858 15.0289 14.8457 15.0289 14.3042C15.029 13.7626 15.5045 13.3225 16.0896 13.3225ZM7.41098 13.3225C7.99615 13.3225 8.47173 13.7626 8.47173 14.3042C8.47173 14.8456 7.99615 15.2858 7.41098 15.2858C6.82581 15.2858 6.35024 14.8457 6.35024 14.3042C6.35024 13.7626 6.82581 13.3225 7.41098 13.3225ZM15.7468 10.2814L6.08334 10.2886L3.99156 3.8632H17.6275L15.7468 10.2814Z"
                                  fill="#323232"
                                  stroke="#323232"
                                  strokeWidth="0.4"
                                />
                              </svg>
                              В корзину
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                dispatch(
                                  openInfo({
                                    name: true,
                                    desc: "Чтобы добавить товар в корзину - зарегистрируйтесь",
                                  })
                                );
                              }}
                              className="hero__product-btn product-button btn"
                            >
                              <svg
                                width="19"
                                height="17"
                                viewBox="0 0 19 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1147 3.14891H3.84302C3.81523 3.14891 3.79021 3.15858 3.76392 3.16391L3.18343 1.38014C3.17689 1.36086 3.16297 1.34659 3.15372 1.32876C3.13788 1.1453 2.97631 1 2.77417 1C2.77381 1 2.77303 1 2.77261 1L0.884173 1.00744C0.670872 1.00855 0.499222 1.16918 0.500003 1.3662C0.500783 1.56287 0.673212 1.72173 0.885733 1.72173C0.886093 1.72173 0.886873 1.72173 0.887294 1.72173L2.48687 1.71529L6.17937 13.0565C5.81254 13.3667 5.57842 13.8086 5.57842 14.3044C5.57842 15.2408 6.39843 16 7.41056 16C8.42233 16 9.24271 15.2407 9.24271 14.3044C9.24271 14.0603 9.18485 13.8296 9.08456 13.6201H14.4152C14.3149 13.8297 14.2571 14.0603 14.2571 14.3044C14.2571 15.2408 15.0771 16 16.0892 16C17.101 16 17.9214 15.2407 17.9214 14.3044C17.9214 13.3681 17.1009 12.6089 16.0892 12.6089C15.7051 12.6089 15.349 12.7192 15.0544 12.9062H8.44508C8.15039 12.7192 7.79473 12.6089 7.41056 12.6089C7.21965 12.6089 7.03912 12.6435 6.86591 12.6935L6.31507 11.0022L16.0329 10.995C16.203 10.995 16.343 10.8911 16.394 10.7494C16.4071 10.7269 16.4214 10.7051 16.4291 10.6794L18.4861 3.6593C18.4993 3.6147 18.5008 3.57004 18.4954 3.52688C18.4957 3.51938 18.5 3.51333 18.5 3.50617C18.5004 3.30882 18.3276 3.14891 18.1147 3.14891ZM16.0896 13.3225C16.6748 13.3225 17.1504 13.7626 17.1504 14.3042C17.1504 14.8456 16.6748 15.2858 16.0896 15.2858C15.5045 15.2858 15.0289 14.8457 15.0289 14.3042C15.029 13.7626 15.5045 13.3225 16.0896 13.3225ZM7.41098 13.3225C7.99615 13.3225 8.47173 13.7626 8.47173 14.3042C8.47173 14.8456 7.99615 15.2858 7.41098 15.2858C6.82581 15.2858 6.35024 14.8457 6.35024 14.3042C6.35024 13.7626 6.82581 13.3225 7.41098 13.3225ZM15.7468 10.2814L6.08334 10.2886L3.99156 3.8632H17.6275L15.7468 10.2814Z"
                                  fill="#323232"
                                  stroke="#323232"
                                  strokeWidth="0.4"
                                />
                              </svg>
                              В корзину
                            </button>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                )
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
