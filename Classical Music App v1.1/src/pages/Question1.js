import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Question1.css";

const Question1 = () => {
  const navigate = useNavigate();

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/quizzes-expanded");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/lessons/chopin/quiz/question-2");
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
    <div className="question-1">
      <img
        className="entypodots-two-horizontal-icon5"
        alt=""
        src="/entypodotstwohorizontal.svg"
      />
      <img
        className="evaarrow-ios-back-fill-icon9"
        alt=""
        src="/evaarrowiosbackfill3.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <div className="frdric-chopin7">{`Frédéric Chopin `}</div>
      <div className="question-1-child" />
      <div className="course-25">
        <div className="course-2-child3" />
      </div>
      <div className="course-3">
        <div className="course-3-child" />
        <div className="course-26">
          <div className="course-2-child4" onClick={onRectangle3Click} />
          <div className="course-27">
            <div className="course-2-child5" />
          </div>
        </div>
      </div>
      <div className="question-1-item" />
      <b className="question-11">Question 1</b>
      <b className="where-was-chopin">Where was Chopin born?</b>
      <b className="a-texas">{`A.  Texas   `}</b>
      <b className="d-russia">D. Russia</b>
      <b className="b-india">B. India</b>
      <b className="c-poland">C. Poland</b>
      <div className="question-1-inner" />
      <div className="nav8">
        <div className="nav-bar9">
          <div className="rectangle-wrapper6">
            <div className="rectangle9" />
          </div>
          <div className="nav-bar-background9" />
          <div className="barshome-indicatorsiphoneli9">
            <div className="home-indicator10" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab27"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer27">Quizzes</div>
          <img className="vector-icon28" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab28"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer28">Social</div>
          <img className="vector-icon29" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab29"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer28">Listen</div>
          <img className="vector-icon30" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab9"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area9" />
          <div className="accounts-label9">Home</div>
          <div className="iconboundingbox9" />
          <img className="path-icon9" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent6" onClick={onFrameContainerClick}>
          <div className="zelle-label9">Lessons</div>
          <img
            className="iconsactionableedit10"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Question1;
