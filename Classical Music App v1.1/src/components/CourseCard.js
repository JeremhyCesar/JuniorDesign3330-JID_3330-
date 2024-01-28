import { useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({
  schoolName,
  instrumentName,
  musicSchoolName,
  propWidth,
  propCursor,
  propWidth1,
  propWidth2,
  propWidth3,
  onRectangle2Click,
}) => {
  const course3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const bCarnegieMelonStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const cSCADStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const dWarsawConservatoryStyle = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const navigate = useNavigate();

  const onCourse2ContainerClick = useCallback(() => {
    navigate("/lessons/chopin/quiz/end-screen");
  }, [navigate]);

  return (
    <div className="course-33" style={course3Style}>
      <div
        className="course-3-child1"
        style={rectangleDiv2Style}
        onClick={onRectangle2Click}
      />
      <div className="course-29">
        <div className="course-2-child6" />
        <div className="course-210" onClick={onCourse2ContainerClick}>
          <div className="course-2-child7" />
        </div>
      </div>
      <b className="b-carnegie-melon" style={bCarnegieMelonStyle}>
        {schoolName}
      </b>
      <b className="c-scad" style={cSCADStyle}>
        {instrumentName}
      </b>
      <b className="d-warsaw-conservatory" style={dWarsawConservatoryStyle}>
        {musicSchoolName}
      </b>
    </div>
  );
};

export default CourseCard;
