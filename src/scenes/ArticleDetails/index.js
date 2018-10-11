import React from 'react';
import axios from 'axios';
import Details from '../../App/components/Details'

class ArticleDetails extends React.Component {
  state = {
    article: ""
  }
  componentDidMount() {
    const { articleid } = this.props.match.params;

    this.getArticleDetail(articleid);

  }

  getArticleDetail = async (articleid) => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_REST_API_LOCATION}articles/${articleid}`);
      this.setState({
        article: result.data
      })

    }
    catch (error) {
      console.log(error);

    }
  }
  render() {
    return (

      <Details article={this.state.article}></Details>


    );
  }
}

export default ArticleDetails;