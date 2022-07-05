import "./Authorization.scss";
import LessonCard from "@components/LessonCard";
const Authorization = () => {
  return (
    <LessonCard
      title={"Качалка"}
      coach={"Павел"}
      date={"06-07-2022 12:00:00"}
      subscribe={true}
    />
  );
};

export default Authorization;
