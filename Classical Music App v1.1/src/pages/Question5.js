import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "./Question5.css";
import BottomFooter from "../components/BottomFooter";

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
      <BottomFooter
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propTop="1010px"
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
        path = {useLocation().pathname}
      />
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
    </div>
  );
};

export default Question5;
