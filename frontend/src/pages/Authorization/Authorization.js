import "./Authorization.scss";
import Login from "@components/Login";
import { useSelector } from "react-redux";
import Header from "@components/Header";
import { Link } from "react-router-dom";
const Authorization = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="wrapper">
      <Header title={"Авторизация"} />
      <Login />
      {user.id === undefined ? (
        <Link to={"/registration"} className="link-to-create-new-user">
          Зарегестрироваться
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Authorization;
