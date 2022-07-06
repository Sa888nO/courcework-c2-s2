const defaultState = {
  lessons: [],
};

const getLessons = "GET_LESSONS";

export const lessonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case getLessons: {
      return { ...state, lessons: [...state.lessons, ...action.payload] };
    }
    default:
      return state;
  }
};

export const getLessonsAction = (payload) => ({
  type: getLessons,
  payload,
});
