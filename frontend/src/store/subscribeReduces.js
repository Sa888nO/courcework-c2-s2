const defaultState = {
  subscribes: [],
};

const getSubscribes = "GET_SUBSCRIBES";
const outSubscribes = "OUT_SUBSCRIBES";

export const subscribeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case getSubscribes: {
      return { ...state, subscribes: [...state.subscribes, ...action.payload] };
    }
    case outSubscribes: {
      return {
        ...state,
        subscribes: [],
      };
    }
    default:
      return state;
  }
};

export const getSubscribesAction = (payload) => ({
  type: getSubscribes,
  payload,
});
export const outSubscribesAction = () => ({
  type: outSubscribes,
});
