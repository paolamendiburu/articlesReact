import React from "react";

import { Link } from "react-router-dom";

const LastArticles = props => {
  if (props.articles.length === 0) {
    return <div className="container">Ningun artículo encontrado</div>;
  }

  return (
    <div className="container">
      <section className="recent-posts">
        <div className="card-columns listfeaturedtag">
          {props.articles.map(article => {
            return (
              <div className="card">
                <Link
                  key={article.id}
                  to={`/details/${article.id}`}
                  article={article}
                >
                  <img className="img-fluid" src={article.media} alt="" />

                  <div className="card-block">
                    <h2 className="card-title">{article.title}</h2>
                    <h4 className="card-text">{article.introduction}</h4>
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
                          <Link
                            key={article.owner}
                            to={`/user/${article.owner}`}
                          >
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
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default LastArticles;
