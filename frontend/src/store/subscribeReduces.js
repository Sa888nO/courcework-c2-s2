const defaultState = {
  subscribes: [],
};

const getSubscribes = "GET_SUBSCRIBES";

export const subscribeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case getSubscribes: {
      return { ...state, subscribes: [...state.subscribes, ...action.payload] };
    }
    default:
      return state;
  }
};

export const getSubscribesAction = (payload) => ({
  type: getSubscribes,
  payload,
});
