const defaultState = {
  lessons: [],
};

const getLessons = "GET_LESSONS";
const outLessons = "OUT_LESSONS";

export const lessonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case getLessons: {
      return { ...state, lessons: [...state.lessons, ...action.payload] };
    }
    case outLessons: {
      return { ...state, lessons: [] };
    }
    default:
      return state;
  }
};

export const getLessonsAction = (payload) => ({
  type: getLessons,
  payload,
});
export const outLessonsAction = () => ({
  type: outLessons,
});
