import Header from "@components/Header";
import "./MainPage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonsAction } from "./../../store/lessonReducer";
import LessonCard from "@components/LessonCard";
import { RefreshData } from "@pages/RefreshData";
import { Link } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons.lessons);
  const subscribes = useSelector((state) => state.subscribes.subscribes);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const Lessons = (lessons, subscribes, user, type) => {
    let user_subs = [];
    let answer = [];
    let answerFree = [];
    for (let i = 0; i < subscribes.length; i++) {
      if (user.id == subscribes[i].user_id) {
        user_subs.push(subscribes[i].lesson_id);
      }
    }
    for (let i = 0; i < lessons.length; i++) {
      if (user_subs.includes(lessons[i].id)) {
        answer.push(lessons[i]);
      } else answerFree.push(lessons[i]);
    }
    if (type === "free") {
      return answerFree;
    } else if (type === "sub") {
      return answer;
    }
  };

  return (
    <div>
      <Header title={"Страница записи"} />
      <div className="content">
        <div className="block">
          <div className="block__title">Записаться</div>
          <div className="block__lessons">
            {Lessons(lessons, subscribes, user, "free").length > 0 ? (
              Lessons(lessons, subscribes, user, "free").map((lesson) => (
                <LessonCard
                  title={lesson.title}
                  coach={lesson.coach}
                  date={lesson.date}
                  subscribe={false}
                  ID={lesson.id}
                />
              ))
            ) : (
              <div>Доступных для записи занятий нет</div>
            )}
          </div>
        </div>
        <div className="block">
          <div className="block__title">Уже записан</div>
          <div className="block__lessons">
            {Lessons(lessons, subscribes, user, "sub").length > 0 ? (
              Lessons(lessons, subscribes, user, "sub").map((lesson) => (
                <LessonCard
                  title={lesson.title}
                  coach={lesson.coach}
                  date={lesson.date}
                  subscribe={true}
                  ID={lesson.id}
                />
              ))
            ) : (
              <div>Вы никуда не записаны</div>
            )}
          </div>
        </div>
      </div>
      {user.id === undefined ? (
        <Link to={"/"} className="link-to-create-new-user link">
          Вы вышли из акаунта, необходимо авторизоваться
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MainPage;
