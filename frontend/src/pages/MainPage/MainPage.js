import Header from "@components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonsAction } from "./../../store/lessonReducer";

const MainPage = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons.lessons);
  const subscribes = useSelector((state) => state.subscribes.subscribes);

  return (
    <div>
      <Header title={"Страница записи"} />
      <button>334</button>
    </div>
  );
};

export default MainPage;
