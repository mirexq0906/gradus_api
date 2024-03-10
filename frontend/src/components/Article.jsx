import React from "react";
import { Link } from "react-router-dom";
import DateDownload from "./DateDownload";
const Article = ({ article }) => {
  return (
    <div className="article">
      <Link to={`/blog/${article.url}`}>
        <img
          className="article__img"
          src={ article.img}
          alt="foto"
        />
        <div className="article__content">
          <h3 className="article__heading">{article.name}</h3>
          <p className="article__desc">{article.detailed}</p>
          <div className="article__row-bottom">
            <span className="article__views">
              <img src="/images/views-icon.svg" alt="foto" />
              {article.views}
            </span>
            {/* <DateDownload DateDownload={article} /> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Article;
