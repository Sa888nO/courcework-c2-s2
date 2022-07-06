import Header from "@components/Header";
import Reg from "@components/Reg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Registration = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="wrapper">
      <Header title={"Регистрация"} />
      <Reg />

      {user.id === undefined ? (
        <Link to={"/"} className="link-to-create-new-user">
          Войти
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Registration;
