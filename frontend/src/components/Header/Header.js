import "./Header.scss";
import { useSelector } from "react-redux";

const Header = ({ title }) => {
  const user = useSelector((state) => state.user.user);
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
          <button className="user-block__button-out">X</button>
        </div>
      )}
    </header>
  );
};

export default Header;
