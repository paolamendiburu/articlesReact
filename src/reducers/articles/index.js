import { GET_ARTICLES } from "../../actionTypes";
const initialState = {
  articles: []
};

const articlesListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES:
      return { ...state, articles: payload };

    default:
      return state;
  }
};
export default articlesListReducer;
