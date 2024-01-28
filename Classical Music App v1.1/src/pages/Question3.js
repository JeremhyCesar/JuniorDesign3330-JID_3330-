import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import "./Question3.css";

const Question3 = () => {
  const navigate = useNavigate();

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/chopin/quiz/question-2");
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
    <div className="question-3">
      <img
        className="entypodots-two-horizontal-icon3"
        alt=""
        src="/entypodotstwohorizontal.svg"
      />
      <img
        className="evaarrow-ios-back-fill-icon7"
        alt=""
        src="/evaarrowiosbackfill3.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <div className="frdric-chopin5">{`Frédéric Chopin `}</div>
      <div className="question-3-child" />
      <b className="what-type-of">What type of music did Chopin focus on?</b>
      <b className="question-31">Question 3</b>
      <div className="course-23">
        <div className="course-2-child1" />
        <b className="a-hip-hop">A. Hip Hop</b>
      </div>
      <FormContainer />
      <div className="question-3-item" />
      <div className="question-3-inner" />
      <div className="nav6">
        <div className="nav-bar7">
          <div className="rectangle-wrapper4">
            <div className="rectangle7" />
          </div>
          <div className="nav-bar-background7" />
          <div className="barshome-indicatorsiphoneli7">
            <div className="home-indicator8" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab21"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer21">Quizzes</div>
          <img className="vector-icon22" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab22"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer22">Social</div>
          <img className="vector-icon23" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab23"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer22">Listen</div>
          <img className="vector-icon24" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab7"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area7" />
          <div className="accounts-label7">Home</div>
          <div className="iconboundingbox7" />
          <img className="path-icon7" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent4" onClick={onFrameContainerClick}>
          <div className="zelle-label7">Lessons</div>
          <img
            className="iconsactionableedit8"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Question3;
