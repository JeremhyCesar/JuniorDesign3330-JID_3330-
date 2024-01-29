import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuizContainer from "../components/QuizContainer";
import "./VideoFrame1.css";
import { BottomFooter, progressDict } from "../components/BottomFooter";

const VideoFrame1 = () => {
  const navigate = useNavigate();

  const onTasksContainerClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onTask4ContainerClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onFrdricChopinTextClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onChopin1ImageClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    window.open("https://youtu.be/kc-a06exTTI?si=pOnQMEtIsYCrYv2E");
  }, []);

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
    navigate("/student-home");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  return (
    <div className="lets-get-to-work-julie-parent">
      <div className="lets-get-to-container">
        <span>{`Let’s get to work, `}</span>
        <span className="julie">
          <span className="ludwig-van-beethoven">Julie</span>
          <span className="span">!</span>
        </span>
      </div>
      <img
        className="evaarrow-ios-back-fill-icon2"
        alt=""
        src="/evaarrowiosbackfill1.svg"
      />
      <b
        className="frdric-chopin"
        onClick={onFrdricChopinTextClick}
      >{`Frédéric Chopin `}</b>
      <QuizContainer
        activityDescription="practice musical scales"
        onTasksContainerClick={onTasksContainerClick}
        onTask4ContainerClick={onTask4ContainerClick}
      />
      <div className="my-tasks-05-container">
        <span>{`My Tasks: `}</span>
        <span className="span1">{progressDict.getProgress("chopin")}/5</span>
        <span>{` completed `}</span>
      </div>
      <div className="complete-them-all-container">
        <span>{`Complete them all before you move on to `}</span>
        <span className="ludwig-van-beethoven">Ludwig van Beethoven</span>
      </div>
      <div className="frame-child" />
      <img
        className="man-watching-online-video-1-icon"
        alt=""
        src="/manwatchingonlinevideo-1.svg"
      />
      <img
        className="man-watching-online-video-2-icon"
        alt=""
        src="/manwatchingonlinevideo-1.svg"
      />
      <img className="to-do-list-1-icon2" alt="" src="/todolist-11.svg" />
      <img className="teaching-1-icon4" alt="" src="/teaching-12@2x.png" />
      <img className="teaching-2-icon1" alt="" src="/teaching-12@2x.png" />
      <div className="course">
        <div className="course-child" />
      </div>
      <div className="course1">
        <div className="course-item" />
      </div>
      <img
        className="chopin-1-icon"
        alt=""
        src="/chopin-1@2x.png"
        onClick={onChopin1ImageClick}
      />
      <img
        className="image-2-icon"
        alt=""
        src="/image-2@2x.png"
        onClick={onImage2Click}
      />
      <BottomFooter
        propBoxShadow="unset"
        propTop="1219px"
        propFilter="blur(4px)"
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

export default VideoFrame1;
