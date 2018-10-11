import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {
  Auth,
  Admin,
  Home,
  ArticleDetails,
  CategoryArticles,
  UserArticles
} from "../../../scenes";

const Content = () => (
  <div>
    <Route exact path="/register" component={Auth} />
    <Route exact path="/login" component={Auth} />
    <Route exact path="/admin/account" component={Admin} />
    <Route exact path="/" component={Home} />
    <Route exact path="/details/:articleid" component={ArticleDetails} />
    <Route exact path="/category/:category" component={CategoryArticles} />
    <Route exact path="/user/:username" component={UserArticles} />
  </div>
);

export default Content;
