import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "./Question4.css";

const Question4 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/question-5");
  }, [navigate]);

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/question-3");
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
    <div className="question-4">
      <img
        className="entypodots-two-horizontal-icon2"
        alt=""
        src="/entypodotstwohorizontal.svg"
      />
      <img
        className="evaarrow-ios-back-fill-icon6"
        alt=""
        src="/evaarrowiosbackfill3.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <div className="frdric-chopin4">{`Frédéric Chopin `}</div>
      <div className="question-4-child" />
      <b className="what-did-chopins">What did Chopin’s father do for work?</b>
      <b className="question-41">Question 4</b>
      <div className="course-22">
        <div className="course-2-inner" />
        <b className="a-lawyer">A. Lawyer</b>
      </div>
      <CourseCard
        schoolName="B.  Teacher"
        instrumentName="C.  Doctor"
        musicSchoolName="D.  Dentist"
        propWidth="390px"
        propCursor="pointer"
        propWidth1="257px"
        propWidth2="145px"
        propWidth3="145px"
        onRectangle2Click={onRectangleClick}
      />
      <div className="question-4-item" />
      <div className="question-4-inner" />
      <div className="nav5">
        <div className="nav-bar6">
          <div className="rectangle-wrapper3">
            <div className="rectangle6" />
          </div>
          <div className="nav-bar-background6" />
          <div className="barshome-indicatorsiphoneli6">
            <div className="home-indicator7" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab18"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer18">Quizzes</div>
          <img className="vector-icon19" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab19"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer19">Social</div>
          <img className="vector-icon20" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab20"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer19">Listen</div>
          <img className="vector-icon21" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab6"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area6" />
          <div className="accounts-label6">Home</div>
          <div className="iconboundingbox6" />
          <img className="path-icon6" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent3" onClick={onFrameContainerClick}>
          <div className="zelle-label6">Lessons</div>
          <img
            className="iconsactionableedit7"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Question4;
