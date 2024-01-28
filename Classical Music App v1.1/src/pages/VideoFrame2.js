import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuizContainer from "../components/QuizContainer";
import BottomFooter from "../components/BottomFooter";
import "./VideoFrame2.css";

const VideoFrame2 = () => {
  const navigate = useNavigate();

  const onTasksContainerClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onTask4ContainerClick = useCallback(() => {
    navigate("/lessons/chopin");
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
    navigate("/student-home");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  const onFrdricChopinTextClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onCourseContainerClick = useCallback(() => {
    window.open("https://youtu.be/4_bTshxr7cE?si=lE0mnMmJipiB2y0P");
  }, []);

  const onChopin1ImageClick = useCallback(() => {
    navigate("/lessons/chopin");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    window.open("https://youtu.be/4_bTshxr7cE?si=lE0mnMmJipiB2y0P");
  }, []);

  return (
    <div className="lets-get-to-work-julie-root">
      <div className="lets-get-to-container1">
        <span>{`Let’s get to work, `}</span>
        <span className="julie2">
          <span className="julie3">Julie</span>
          <span className="span2">!</span>
        </span>
      </div>
      <img
        className="evaarrow-ios-back-fill-icon3"
        alt=""
        src="/evaarrowiosbackfill2.svg"
      />
      <b
        className="frdric-chopin1"
        onClick={onFrdricChopinTextClick}
      >{`Frédéric Chopin `}</b>
      <QuizContainer
        activityDescription="practice musical scales"
        reviewFilter="blur(4px)"
        reviewBoxShadow="unset"
        task3Cursor="unset"
        practiceMusicalScalesCursor="pointer"
        learnAboutChopinsCursor="unset"
        propCursor="unset"
        onTasksContainerClick={onTasksContainerClick}
        onTask4ContainerClick={onTask4ContainerClick}
      />
      <div className="my-tasks-05-container1">
        <span>{`My Tasks: `}</span>
        <span className="span3">0/5</span>
        <span>{` completed `}</span>
      </div>
      <div className="complete-them-all-container1">
        <span>{`Complete them all before you move on to `}</span>
        <span className="julie3">Ludwig van Beethoven</span>
      </div>
      <div className="frame-item" />
      <img
        className="man-watching-online-video-1-icon1"
        alt=""
        src="/manwatchingonlinevideo-1.svg"
      />
      <img
        className="man-watching-online-video-2-icon1"
        alt=""
        src="/manwatchingonlinevideo-1.svg"
      />
      <img className="to-do-list-1-icon3" alt="" src="/todolist-11.svg" />
      <img className="teaching-1-icon5" alt="" src="/teaching-12@2x.png" />
      <img className="teaching-2-icon2" alt="" src="/teaching-12@2x.png" />
      <div className="course2" onClick={onCourseContainerClick}>
        <div className="course-inner" />
      </div>
      <div className="course3">
        <div className="course-child1" />
      </div>
      <img
        className="chopin-1-icon1"
        alt=""
        src="/chopin-1@2x.png"
        onClick={onChopin1ImageClick}
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
      <img
        className="image-3-icon"
        alt=""
        src="/image-3@2x.png"
        onClick={onImage3Click}
      />
    </div>
  );
};

export default VideoFrame2;
