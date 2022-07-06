import { getUserAction } from "../store/userReducer";
import { getLessonsAction, outLessonsAction } from "../store/lessonReducer";
import {
  getSubscribesAction,
  outSubscribesAction,
} from "../store/subscribeReduces";
import { useDispatch } from "react";

const GetLessons = (dispatch) => {
  fetch("http://127.0.0.1:5000/api/lessons", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      dispatch(getLessonsAction(data));
    });
};
const GetSubscribes = (dispatch) => {
  fetch("http://127.0.0.1:5000/api/AllSubscribes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      dispatch(getSubscribesAction(data));
    });
};

export const RefreshData = (dispatch) => {
  dispatch(outSubscribesAction());
  dispatch(outLessonsAction());
  GetLessons(dispatch);
  GetSubscribes(dispatch);
};
