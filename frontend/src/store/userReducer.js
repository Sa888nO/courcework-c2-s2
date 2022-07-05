const defaultState = {
  user: {
    id: undefined,
    name: undefined,
    surname: undefined,
    password: undefined,
  },
};

const getUser = "GET_USER";
const outUser = "OUT_USER";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case getUser: {
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          surname: action.payload.surname,
          password: action.payload.password,
        },
      };
    }
    case outUser: {
      return {
        ...state,
        user: {
          id: undefined,
          name: undefined,
          surname: undefined,
          password: undefined,
        },
      };
    }
    default:
      return state;
  }
};

export const getUserAction = (payload) => ({
  type: getUser,
  payload,
});

export const outUserAction = () => ({
  type: outUser,
});
