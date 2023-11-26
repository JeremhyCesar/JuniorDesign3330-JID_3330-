import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./EndScreen.css";

const EndScreen = () => {
  const navigate = useNavigate();

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/quizzes-expanded");
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
    <div className="end-screen">
      <img
        className="entypodots-two-horizontal-icon"
        alt=""
        src="/entypodotstwohorizontal.svg"
      />
      <img
        className="evaarrow-ios-back-fill-icon4"
        alt=""
        src="/evaarrowiosbackfill3.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <div className="frdric-chopin2">{`Frédéric Chopin `}</div>
      <div className="end-screen-child" />
      <b className="congrats">Congrats!</b>
      <div className="you-unlocked-the">You unlocked the next level!</div>
      <div className="quiz-complete">Quiz Complete!</div>
      <b className="correct">5/5 Correct</b>
      <div className="end-screen-item" />
      <div className="end-screen-inner" />
      <img className="chopin-2-icon" alt="" src="/chopin-2@2x.png" />
      <div className="course-2">
        <div className="course-2-child" />
        <b className="back-to-quizzes">Back to Quizzes</b>
      </div>
      <img className="vector-icon12" alt="" src="/vector3.svg" />
      <img className="icon-star" alt="" src="/-icon-star.svg" />
      <div className="nav3">
        <div className="nav-bar4">
          <div className="rectangle-wrapper1">
            <div className="rectangle4" />
          </div>
          <div className="nav-bar-background4" />
          <div className="barshome-indicatorsiphoneli4">
            <div className="home-indicator5" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab12"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer12">Quizzes</div>
          <img className="vector-icon13" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab13"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer13">Social</div>
          <img className="vector-icon14" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab14"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer13">Listen</div>
          <img className="vector-icon15" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab4"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area4" />
          <div className="accounts-label4">Home</div>
          <div className="iconboundingbox4" />
          <img className="path-icon4" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent1" onClick={onFrameContainerClick}>
          <div className="zelle-label4">Lessons</div>
          <img
            className="iconsactionableedit5"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
