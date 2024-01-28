import { useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./QuizContainer.css";

const QuizContainer = ({
  activityDescription,
  reviewFilter,
  reviewBoxShadow,
  task3Cursor,
  practiceMusicalScalesCursor,
  learnAboutChopinsCursor,
  propCursor,
  onTasksContainerClick,
  onRectangleClick,
  onTask4ContainerClick,
  onTask2ContainerClick,
  onTask1ContainerClick,
}) => {
  const tasksStyle = useMemo(() => {
    return {
      filter: reviewFilter,
      boxShadow: reviewBoxShadow,
    };
  }, [reviewFilter, reviewBoxShadow]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      cursor: task3Cursor,
    };
  }, [task3Cursor]);

  const task41Style = useMemo(() => {
    return {
      cursor: practiceMusicalScalesCursor,
    };
  }, [practiceMusicalScalesCursor]);

  const task2Style = useMemo(() => {
    return {
      cursor: learnAboutChopinsCursor,
    };
  }, [learnAboutChopinsCursor]);

  const task1Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const navigate = useNavigate();

  const onTask5ContainerClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  return (
    <div className="tasks2" onClick={onTasksContainerClick} style={tasksStyle}>
      <div className="task-5" onClick={onTask5ContainerClick}>
        <div
          className="task-5-child"
          style={rectangleDiv1Style}
          onClick={onRectangleClick}
        />
        <div className="task-5-item" />
        <div className="mini-quiz">Mini Quiz</div>
        <div className="practice-musical-scales">
          test your knowledge on Chopin!
        </div>
      </div>
      <div
        className="task-41"
        onClick={onTask4ContainerClick}
        style={task41Style}
      >
        <div className="task-5-child" />
        <div className="task-4-child1" />
        <div className="review2">Review</div>
        <div className="practice-musical-scales">
          review Chopin’s stylistic choices
        </div>
      </div>
      <div className="task-3">
        <div className="task-3-child" onClick={onRectangle4Click} />
        <div className="task-3-item" />
        <div className="worksheet1">Worksheet</div>
        <div className="practice-musical-scales">{activityDescription}</div>
      </div>
      <div
        className="task-2"
        style={task2Style}
        onClick={onTask2ContainerClick}
      >
        <div className="task-5-child" />
        <div className="task-3-item" />
        <div className="video2">Video</div>
        <div className="practice-musical-scales">
          listen to a famous work by Chopin
        </div>
      </div>
      <div
        className="task-12"
        style={task1Style}
        onClick={onTask1ContainerClick}
      >
        <div className="task-5-child" />
        <div className="task-1-child5" />
        <div className="video3">Video</div>
        <div className="learn-about-chopins2">
          learn about Chopin’s early life
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
