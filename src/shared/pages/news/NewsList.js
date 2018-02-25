import React from "react";
import "./NewsList.css";

export default function NewsList({ news }) {
  return (
    <div className="newslist">
      {news &&
        news.map(post =>
          <div key={post.id}>
            <p>
              {post.id} ⬆ {post.title}
            </p>
            <small>
              {post.upvotes} upvotes by {post.author}
            </small>
          </div>
        )}
    </div>
  );
}
