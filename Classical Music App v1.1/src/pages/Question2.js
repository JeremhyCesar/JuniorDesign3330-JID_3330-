import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "./Question2.css";

const Question2 = () => {
  const navigate = useNavigate();

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/lessons/chopin/quiz/question-1");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/lessons/chopin/quiz/question-3");
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
    // Please sync "Nav" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  return (
    <div className="question-2">
      <img
        className="entypodots-two-horizontal-icon4"
        alt=""
        src="/entypodotstwohorizontal.svg"
      />
      <img
        className="evaarrow-ios-back-fill-icon8"
        alt=""
        src="/evaarrowiosbackfill3.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <div className="frdric-chopin6">{`Frédéric Chopin `}</div>
      <div className="question-2-child" />
      <b className="what-was-chopins">
        What was Chopin’s instrument of choice?
      </b>
      <b className="question-21">Question 2</b>
      <div className="question-2-item" />
      <div className="question-2-inner" />
      <div className="course-24">
        <div className="course-2-child2" onClick={onRectangle3Click} />
        <b className="a-the-piano">A. The Piano</b>
      </div>
      <CourseCard
        schoolName="B.  The Flute"
        instrumentName="C.  The Guitar"
        musicSchoolName="D.  The Harmonica"
        propWidth="390px"
        propCursor="unset"
        propWidth1="258px"
        propWidth2="244px"
        propWidth3="265px"
      />
      <div className="nav7">
        <div className="nav-bar8">
          <div className="rectangle-wrapper5">
            <div className="rectangle8" />
          </div>
          <div className="nav-bar-background8" />
          <div className="barshome-indicatorsiphoneli8">
            <div className="home-indicator9" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab24"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer24">Quizzes</div>
          <img className="vector-icon25" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab25"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer25">Social</div>
          <img className="vector-icon26" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab26"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer25">Listen</div>
          <img className="vector-icon27" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab8"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area8" />
          <div className="accounts-label8">Home</div>
          <div className="iconboundingbox8" />
          <img className="path-icon8" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent5" onClick={onFrameContainerClick}>
          <div className="zelle-label8">Lessons</div>
          <img
            className="iconsactionableedit9"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Question2;
