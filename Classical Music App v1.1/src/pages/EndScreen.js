import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./EndScreen.css";
import BottomFooter from "../components/BottomFooter";

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
    </div>
  );
};

export default EndScreen;
