export const SET_PATENTS = "set_patents";

export const PatentsReducer = (state, action) => {
  switch (action.type) {
    case SET_PATENTS:
      return action.patents;
    default:
      return state;
  }
};
