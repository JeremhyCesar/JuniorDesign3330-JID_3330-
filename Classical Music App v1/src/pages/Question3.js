import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import BottomFooter from "../components/BottomFooter";
import "./Question3.css";

const Question3 = () => {
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

export default Question3;
