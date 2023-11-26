import { useMemo } from "react";
import "./QuizForm.css";

const QuizForm = ({ propTop }) => {
  const task5Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="task-51" style={task5Style}>
      <div className="task-5-inner" />
      <div className="task-5-child1" />
      <div className="mini-quiz1">Mini Quiz</div>
      <div className="test-your-knowledge3">test your knowledge on Chopin!</div>
    </div>
  );
};

export default QuizForm;
