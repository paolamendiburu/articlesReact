import axios from "axios";
import { GET_ARTICLES } from "../../actionTypes";

export const getArticles = () => dispatch => {
  dispatch({
    type: GET_ARTICLES,
    payload: axios.get(`${process.env.REACT_APP_REST_API_LOCATION}articles/`)
  });
};
