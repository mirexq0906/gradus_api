import React from "react";
import { useSelector } from "react-redux";
import Article from "../components/Article";
const BlogMain = () => {
  const blog = useSelector((state) => state.blog.blog);
  return (
    <main className="blog-main">
      <div className="container">
        <ul className="blog-main__list">
          {blog.length ? (
            blog.map((article) => (
              <li className="blog-main__item">
                <Article key={article.id} article={article} />
              </li>
            ))
          ) : (
            <h3>Блогов нет</h3>
          )}
        </ul>
      </div>
    </main>
  );
};

export default BlogMain;
