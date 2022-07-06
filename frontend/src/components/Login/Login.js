import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../store/userReducer";
import { getLessonsAction } from "./../../store/lessonReducer";
import { getSubscribesAction } from "./../../store/subscribeReduces";
import { Link } from "react-router-dom";

const Login = () => {
  const getLessons = () => {
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
  const getSubscribes = (id) => {
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
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const Login = () => {
    let body = {
      surname: document.getElementById("surname").value,
      password: document.getElementById("password").value,
    };
    fetch("http://127.0.0.1:5000/api/authorization", {
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
        if (data.massage === "Неверный логин или пароль") {
          alert("Неверный логин или пароль");
        } else {
          console.log(data);
          dispatch(getUserAction(data));
          getLessons();
          getSubscribes();
          // window.location.replace("http://localhost:3000/MainPage");
        }
      });
  };
  return (
    <div>
      {user.id === undefined ? (
        <div className="login">
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
          <button className="login__button" onClick={() => Login()}>
            Войти
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

export default Login;
