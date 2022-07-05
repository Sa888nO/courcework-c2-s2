import "./Login.scss";
const Login = () => {
  return (
    <form className="login">
      <div className="input-block">
        <div className="input-block__info">Ведите фамилию</div>
        <input
          type="text"
          className="input-block__input"
          name="surname"
          id="surname"
        />
      </div>
      <div className="input-block">
        <div className="input-block__info">Ведите пароль</div>
        <input
          type="password"
          className="input-block__input"
          name="password"
          id="password"
        />
      </div>
      <button className="login__button">Войти</button>
    </form>
  );
};

export default Login;
