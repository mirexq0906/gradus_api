import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Video from "../../components/Video";
const Reviews = ({rewiews=[]}) => {
  return (
    <section className="reviews">
      <div className="container">
        <h3 className="reviews__heading heading">
          Видео в этом разделе:
        </h3>
        <div className="reviews__row">
          <Swiper spaceBetween={30} slidesPerView={"auto"}>
            {rewiews.map((video) => (
              <React.Fragment key={video.id}>
                  <SwiperSlide>
                    <Video video={video} />
                  </SwiperSlide>
              </React.Fragment>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
