import React from "react";
const Video = ({ video }) => {
  return (
    <div data-fancybox={`video-${video.id}`} data-src={video.url} className="video">
      <div className="video__img">
        <img src={"https://hostingproject.ru/" + video.img} alt="foto" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="102"
          height="102"
          viewBox="0 0 102 102"
          fill="none"
        >
          <circle cx="51" cy="51" r="50.5" fill="#EEEC0B" stroke="#EEEC0B" />
          <path
            d="M70 47.5359C72.6667 49.0755 72.6667 52.9245 70 54.4641L44.5 69.1865C41.8333 70.7261 38.5 68.8016 38.5 65.7224L38.5 36.2776C38.5 33.1984 41.8333 31.2739 44.5 32.8135L70 47.5359Z"
            fill="#323232"
          />
        </svg>
        <div className="video__background"></div>
      </div>
      <div className="video__content">
        <p className="video__desc">{video.name}</p>
      </div>
    </div>
  );
};

export default Video;
