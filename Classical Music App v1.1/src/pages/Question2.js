import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "./Question2.css";
import BottomFooter from "../components/BottomFooter";

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
    </div>
  );
};

export default Question2;
