import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { outUserAction } from "./../../store/userReducer";
import { outLessonsAction } from "./../../store/lessonReducer";
import { outSubscribesAction } from "./../../store/subscribeReduces";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const Logout = () => {
    dispatch(outUserAction());
    dispatch(outSubscribesAction());
    dispatch(outLessonsAction());
  };
  return (
    <header className="header">
      <div className="header__title">{title}</div>
      {user.id === undefined ? (
        <div className="user-block">
          <span className="user-block__user">Вы не авторизованы</span>
        </div>
      ) : (
        <div className="user-block">
          <span className="user-block__user">
            {user.name} {user.surname}
          </span>
          <button className="user-block__button-out" onClick={() => Logout()}>
            X
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
