import "./Header.scss";
const Header = ({ title, name, surname }) => {
  return (
    <header className="header">
      <div className="header__title">{title}</div>
      {name === undefined || surname === undefined ? (
        <div className="user-block">
          <span className="user-block__user">Вы не авторизованы</span>
        </div>
      ) : (
        <div className="user-block">
          <span className="user-block__user">
            {name} {surname}
          </span>
          <button className="user-block__button-out">X</button>
        </div>
      )}
    </header>
  );
};

export default Header;
