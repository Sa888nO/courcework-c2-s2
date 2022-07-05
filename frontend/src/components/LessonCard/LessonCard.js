import "./LessonCard.scss";
const LessonCard = ({ title, coach, date, subscribe }) => {
  return (
    <div className="lesson-card">
      <div className="info-block">
        <span className="info-block__title">{title}</span>
        <span className="info-block__coach">{coach}</span>
        <span className="info-block__date">{date}</span>
      </div>
      {subscribe === true ? (
        <button className="button button_out">Отписаться</button>
      ) : (
        <button className="button button_in">Записаться</button>
      )}
    </div>
  );
};

export default LessonCard;
