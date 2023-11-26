import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "../components/BottomFooter";
import "./Question1.css";

const Question1 = () => {
  const navigate = useNavigate();

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

  const onRectangle3Click = useCallback(() => {
    navigate("/question-2");
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

export default Question1;
