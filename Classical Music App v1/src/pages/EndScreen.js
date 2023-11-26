import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "../components/BottomFooter";
import "./EndScreen.css";

const EndScreen = () => {
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

export default EndScreen;
