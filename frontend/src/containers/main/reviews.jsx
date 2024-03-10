import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Video from "../../components/Video";
import { useSelector } from "react-redux";
const Reviews = () => {
    const reviews =  useSelector((state) => state.video.video);
    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews__top">
                    <h3 className="reviews__heading heading">
                        <img src="/images/video-icon.svg" alt="foto"/>
                        Видео
                    </h3>
                    <span className="reviews__watch watch">
                        Смотреть всё
                        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 8L5.25 4.5L1.25 1" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
                <div className="reviews__row">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={"auto"}
                    >
                        {reviews.data.map((video) =>
                            <SwiperSlide key={video.id}>
                                <Video video={video}/>
                            </SwiperSlide>
                        )}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default Reviews;