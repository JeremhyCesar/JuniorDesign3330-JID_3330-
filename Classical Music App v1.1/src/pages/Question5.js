import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "./Question5.css";

const Question5 = () => {
  const navigate = useNavigate();

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/lessons/chopin/quiz/question-4");
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
    <div className="question-5">
      <img
        className="entypodots-two-horizontal-icon1"
        alt=""
        src="/entypodotstwohorizontal.svg"
      />
      <img
        className="evaarrow-ios-back-fill-icon5"
        alt=""
        src="/evaarrowiosbackfill3.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <div className="frdric-chopin3">{`Frédéric Chopin `}</div>
      <div className="question-5-child" />
      <b className="where-did-chopin">Where did Chopin study music?</b>
      <b className="question-51">Question 5</b>
      <div className="course-21">
        <div className="course-2-item" />
        <b className="a-georgia-tech">A. Georgia Tech</b>
      </div>
      <CourseCard
        schoolName="B.  Carnegie Melon"
        instrumentName="C.  SCAD"
        musicSchoolName="D.  Warsaw Conservatory"
      />
      <div className="question-5-item" />
      <div className="question-5-inner" />
      <div className="nav4">
        <div className="nav-bar5">
          <div className="rectangle-wrapper2">
            <div className="rectangle5" />
          </div>
          <div className="nav-bar-background5" />
          <div className="barshome-indicatorsiphoneli5">
            <div className="home-indicator6" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab15"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer15">Quizzes</div>
          <img className="vector-icon16" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab16"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer16">Social</div>
          <img className="vector-icon17" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab17"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer16">Listen</div>
          <img className="vector-icon18" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab5"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area5" />
          <div className="accounts-label5">Home</div>
          <div className="iconboundingbox5" />
          <img className="path-icon5" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent2" onClick={onFrameContainerClick}>
          <div className="zelle-label5">Lessons</div>
          <img
            className="iconsactionableedit6"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Question5;
