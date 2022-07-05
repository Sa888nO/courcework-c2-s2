import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../store/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const Login = () => {
    // let body = {
    //   surname: document.getElementById("surname").value,
    //   password: document.getElementById("password").value,
    // };
    // console.log(body);
    fetch("http://127.0.0.1:5000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(body),
    })
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      });
    //dispatch(getUserAction(user));
  };
  return (
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
      <button
        className="login__button"
        onClick={() =>
          Login({
            id: 1,
            name: "Alex",
            surname: document.getElementById("surname").value,
            password: "12345",
          })
        }
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
