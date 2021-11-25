export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      // console.log(action)
      const quotesArr = state.filter((q) => q.id !== action.quoteId);
      return quotesArr;

    case "UPVOTE_QUOTE":
      const indx = state.findIndex((q) => q.id === action.quoteId);
      const quoteNew = { ...state[indx], votes: state[indx].votes + 1 };
      return [...state.slice(0, indx), quoteNew, ...state.slice(indx + 1)];
    case "DOWNVOTE_QUOTE":
      const i = state.findIndex((q) => q.id === action.quoteId);
      if (state[i].votes > 0) {
        const qNew = {
          ...state[i],
          votes: state[i].votes - 1,
        };
        return [...state.slice(0, i), qNew, ...state.slice(i + 1)];
      }
      return state;

    default:
      return state;
  }
};
