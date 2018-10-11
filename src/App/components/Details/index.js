import React from "react";
import { Link } from "react-router-dom";

const Details = props => {
  const article = props.article;
  if (article) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-xs-12" />
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <div className="mainheading">
              <h1 class="posttitle">{article.title}</h1>
            </div>
            <img
              className="featured-image img-fluid"
              src={article.media}
              alt=""
            />
            <div className="article-post">{article.full_text}</div>
            <div className="metafooter">
              <span className="meta-footer-thumb">
                <img
                  className="author-thumb"
                  src="/images/no-profile.png"
                  alt={article.title}
                />
              </span>
              <span className="author-meta">
                <span className="post-name">
                  <Link key={article.owner} to={`/user/${article.owner}`}>
                    {article.owner}
                  </Link>
                </span>
                <br />
                <span className="post-date">
                  {new Date(article.created_on).toDateString()}
                </span>
                <br />
              </span>
              <span className="after-post-tags pull-right">
                <ul className="tags">
                  {article.category.map(cat => {
                    return (
                      <li>
                        <Link key={cat} to={`/category/${cat}`}>
                          {cat}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container">No existe este artículo</div>;
  }
};
export default Details;
