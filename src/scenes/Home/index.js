import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import LastArticles from "../../App/components/LastArticles";
import { getArticles } from "../../actions";
class Home extends React.Component {
  componentDidMount() {
    this.props.getArticles();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <LastArticles articles={this.props.articles} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = {
  getArticles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
