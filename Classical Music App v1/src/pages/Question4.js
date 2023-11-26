import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import BottomFooter from "../components/BottomFooter";
import "./Question4.css";

const Question4 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/question-5");
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
    navigate("/");
  }, [navigate]);

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
      <BottomFooter
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propTop="820px"
        propFilter="unset"
        propCursor="pointer"
        onPayAndTransferUnselectedTabContainerClick={
          onPayAndTransferUnselectedTabContainerClick
        }
        onPayAndTransferUnselectedTabContainer1Click={
          onPayAndTransferUnselectedTabContainer1Click
        }
        onPayAndTransferUnselectedTabContainer2Click={
          onPayAndTransferUnselectedTabContainer2Click
        }
        onAccountsSelectedTabContainerClick={
          onAccountsSelectedTabContainerClick
        }
        onFrameContainerClick={onFrameContainerClick}
      />
    </div>
  );
};

export default Question4;
