import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import QuizContainer from "../components/QuizContainer";
import "./VideoFrame1.css";

const VideoFrame1 = () => {
  const navigate = useNavigate();

  const onTasksContainerClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
  }, [navigate]);

  const onTask4ContainerClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
  }, [navigate]);

  const onFrdricChopinTextClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
  }, [navigate]);

  const onChopin1ImageClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
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
      <div className="nav2">
        <div className="nav-bar3">
          <div className="group-div">
            <div className="rectangle3" />
          </div>
          <div className="nav-bar-background3" />
          <div className="barshome-indicatorsiphoneli3">
            <div className="home-indicator4" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab9"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer9">Quizzes</div>
          <img className="vector-icon9" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab10"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer10">Social</div>
          <img className="vector-icon10" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab11"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer10">Listen</div>
          <img className="vector-icon11" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab3"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area3" />
          <div className="accounts-label3">Home</div>
          <div className="iconboundingbox3" />
          <img className="path-icon3" alt="" src="/path.svg" />
        </div>
        <div className="frame-div" onClick={onFrameContainerClick}>
          <div className="zelle-label3">Lessons</div>
          <img
            className="iconsactionableedit4"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoFrame1;
