import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import QuizContainer from "../components/QuizContainer";
import BottomFooter from "../components/BottomFooter";
import "./VideoFrame1.css";

const VideoFrame1 = () => {
  const navigate = useNavigate();

  const onTasksContainerClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
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

  const onFrdricChopinTextClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
  }, [navigate]);

  const onChopin1ImageClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
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
      />
      <div className="my-tasks-05-container">
        <span>{`My Tasks: `}</span>
        <span className="span1">0/5</span>
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
      <img className="to-do-list-1-icon1" alt="" src="/todolist-11.svg" />
      <img className="teaching-1-icon3" alt="" src="/teaching-12@2x.png" />
      <img className="teaching-2-icon" alt="" src="/teaching-12@2x.png" />
      <div className="course">
        <div className="course-child" />
      </div>
      <div className="youtube-and-vimeo-video" />
      <div className="course1">
        <div className="course-item" />
      </div>
      <img
        className="chopin-1-icon"
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
      />
    </div>
  );
};

export default VideoFrame1;
