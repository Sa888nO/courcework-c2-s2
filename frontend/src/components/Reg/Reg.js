import "./Reg.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../store/userReducer";

const Reg = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const Reg = () => {
    let body = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      password: document.getElementById("password").value,
    };
    fetch("http://127.0.0.1:5000/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        if (data.massage === "Данные пришли неверно") {
          alert("Данные пришли неверно");
        } else {
          console.log(data);
          dispatch(getUserAction(data));

          // window.location.replace("http://localhost:3000/MainPage");
        }
      });
  };
  return (
    <div>
      {user.id === undefined ? (
        <div className="login">
          <div className="input-block">
            <div className="input-block__info">Ведите имя</div>
            <input
              type="text"
              className="input-block__input"
              name="name"
              id="name"
            />
          </div>
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
          <button className="login__button" onClick={() => Reg()}>
            Регистрация
          </button>
        </div>
      ) : (
        <div className="auth">
          <div className="auth-success">ВЫ УСПЕШНО АВТОРИЗОВАНЫ!</div>
          <Link to="/MainPage" className="auth-success-link">
            К СТРАНИЦЕ ЗАПИСИ
          </Link>
        </div>
      )}
    </div>
  );
};

export default Reg;
