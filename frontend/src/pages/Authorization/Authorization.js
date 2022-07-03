import "./Authorization.scss";
const Authorization = () => {
  return (
    <div className="wrapper">
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Авторизация</p>
          <form className="form_auth_style">
            <label>Введите Вашу фамилию</label>
            <input
              type="text"
              name="surname"
              placeholder="Введите Вашу фамилию"
              required
            ></input>
            <label>Введите Ваш пароль</label>
            <input
              type="password"
              name="password"
              placeholder="Введите пароль"
              required
            ></input>
            <button className="form_auth_button" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
