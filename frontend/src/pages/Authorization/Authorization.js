import "./Authorization.scss";
import Login from "@components/Login";
import Header from "@components/Header";
import { Link } from "react-router-dom";
const Authorization = () => {
  return (
    <div className="wrapper">
      <Header title={"Авторизация"} />
      <Login />
      <Link to={"/registration"} className="link-to-create-new-user">
        Зарегестрироваться
      </Link>
    </div>
  );
};

export default Authorization;
