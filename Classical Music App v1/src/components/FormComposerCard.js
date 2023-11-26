import "./FormComposerCard.css";

const FormComposerCard = ({ onRectangle4Click }) => {
  return (
    <div className="tasks3">
      <div className="tasks-child4" />
      <div className="tasks-child5" />
      <div className="tasks-child6" />
      <div className="task-21">
        <div className="task-2-inner" />
      </div>
      <div className="task-13">
        <div className="task-1-child6" onClick={onRectangle4Click} />
        <div className="frdric-chopin9">{`Frédéric Chopin `}</div>
        <div className="ludwig-van-beethoven3">Ludwig van Beethoven</div>
        <div className="johann-bach">
          <p className="johann">Johann</p>
          <p className="johann">Bach</p>
        </div>
      </div>
      <div className="tasks-child7" />
      <div className="tasks-child8" />
    </div>
  );
};

export default FormComposerCard;
