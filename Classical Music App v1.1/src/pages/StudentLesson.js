import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLesson.css";

const StudentLesson = () => {
  const navigate = useNavigate();

  const onCourse1ContainerClick = useCallback(() => {
    navigate("/student-lesson-2");
  }, [navigate]);

  const onPayAndTransferUnselectedTabContainerClick = useCallback(() => {
    navigate("/quizzes");
  }, [navigate]);

  const onPayAndTransferUnselectedTabContainer1Click = useCallback(() => {
    navigate("/social");
  }, [navigate]);

  const onPayAndTransferUnselectedTabContainer2Click = useCallback(() => {
    navigate("/listening");
  }, [navigate]);

  const onAccountsSelectedTabContainerClick = useCallback(() => {
    navigate("/student-home");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  return (
    <div className="student-lesson">
      <div className="glass5" />
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
      <div className="nav10">
        <div className="nav-bar11">
          <div className="nav-bar-child" />
          <div className="barshome-indicatorsiphoneli11">
            <div className="home-indicator12" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab33"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer33">Quizzes</div>
          <img className="vector-icon36" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab34"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer34">Social</div>
          <img className="vector-icon37" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab35"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer34">Listen</div>
          <img className="vector-icon38" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab11"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="accounts-label11">Home</div>
          <div className="iconboundingbox11" />
          <img className="path-icon11" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent8" onClick={onFrameContainerClick}>
          <div className="zelle-label11">Lessons</div>
          <img
            className="iconsactionableedit12"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentLesson;
