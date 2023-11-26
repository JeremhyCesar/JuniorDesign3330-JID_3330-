import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./StudentLesson.css";

const StudentLesson = () => {
  const navigate = useNavigate();

  const onCourse1ContainerClick = useCallback(() => {
    navigate("/student-lesson-2");
  }, [navigate]);

  return (
    <div className="student-lesson">
      <div className="student-lesson-child" />
      <div className="student-lesson-item" />
      <div className="student-lesson-inner" />
      <div className="course-32">
        <div className="course-3-inner" />
        <b className="compare-contrast-container">
          <p className="compare">{`Compare &`}</p>
          <p className="compare">Contrast</p>
        </b>
        <img
          className="saxophonist-playing-saxophone1"
          alt=""
          src="/saxophonist-playing-saxophone-wearing-golden-glasses@2x.png"
        />
        <div className="progress1">
          <div className="progress-item" />
          <div className="completed1">0% completed</div>
        </div>
      </div>
      <div className="course-28">
        <b className="contemporary-music">
          <p className="compare">Contemporary</p>
          <p className="compare">Music</p>
        </b>
        <div className="progress2">
          <div className="progress-item" />
          <div className="completed1">0% completed</div>
        </div>
      </div>
      <div className="course-1" onClick={onCourse1ContainerClick}>
        <div className="course-1-child" />
        <b className="classical-music">
          <p className="compare">Classical</p>
          <p className="compare">Music</p>
        </b>
        <div className="progress3">
          <div className="progress-item" />
          <div className="completed1">0% completed</div>
        </div>
      </div>
      <div className="heading3">
        <div className="what-should-we1">What should we learn now?</div>
        <b className="my-lessons1">My Lessons</b>
      </div>
      <img
        className="girl-playing-violin-1-icon1"
        alt=""
        src="/girlplayingviolin-1.svg"
      />
      <img
        className="couple-dance-party-1-icon1"
        alt=""
        src="/coupledanceparty-1.svg"
      />
      <Footer />
    </div>
  );
};

export default StudentLesson;
