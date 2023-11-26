import { useMemo } from "react";
import "./Course3Container.css";

const Course3Container = ({
  skillLevel,
  completedTop,
  propBackgroundColor,
}) => {
  const course31Style = useMemo(() => {
    return {
      top: completedTop,
    };
  }, [completedTop]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="course-35" style={course31Style}>
      <div className="course-3-child4" style={rectangleDiv3Style} />
      <b className="instruments">{skillLevel}</b>
      <div className="progress4">
        <div className="progress-child2" />
        <div className="completed4">0% completed</div>
      </div>
    </div>
  );
};

export default Course3Container;
