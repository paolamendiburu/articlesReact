import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import LastArticles from "../../App/components/LastArticles";
class CategoryArticles extends React.Component {
  state = {
    articles: [],
    category: ""
  };

  componentDidMount() {
    const { category } = this.props.match.params;
    this.getArticles(category);
  }
  getArticles = async category => {
    try {
      const result = await axios.get(
        `${
          process.env.REACT_APP_REST_API_LOCATION
        }articles/?category=${category}`
      );
      this.setState({
        articles: result.data,
        category: category
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>Artículos de {this.state.category}:</h2>
        </div>

        <LastArticles articles={this.state.articles} />
      </div>
    );
  }
}

export default CategoryArticles;
