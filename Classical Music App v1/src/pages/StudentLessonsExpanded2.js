import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "../components/BottomFooter";
import "./StudentLessonsExpanded2.css";

const StudentLessonsExpanded2 = () => {
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

  const onMiniQuiz1Click = useCallback(() => {
    navigate("/question-1");
  }, [navigate]);

  const onVideo11Click = useCallback(() => {
    navigate("/video-1");
  }, [navigate]);

  const onVideo21Click = useCallback(() => {
    navigate("/video-2");
  }, [navigate]);

  const onWorksheet1ImageClick = useCallback(() => {
    navigate("/worksheet");
  }, [navigate]);

  const onReview1ImageClick = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  return (
    <div className="student-lessons-expanded-2">
      <div className="student-lessons-expanded-2-child" />
      <div className="glass1" />
      <div className="lets-get-to-container2">
        <span>{`Let’s get to work, `}</span>
        <span className="julie4">
          <span className="julie5">Julie</span>
          <span className="span4">!</span>
        </span>
      </div>
      <img
        className="evaarrow-ios-back-fill-icon11"
        alt=""
        src="/evaarrowiosbackfill3.svg"
      />
      <b className="frdric-chopin8">{`Frédéric Chopin `}</b>
      <div className="my-tasks-05-container2">
        <span>{`My Tasks: `}</span>
        <span className="span5">0/5</span>
        <span>{` completed `}</span>
      </div>
      <div className="complete-them-all-container2">
        <span>{`Complete them all before you move on to `}</span>
        <span className="julie5">Ludwig van Beethoven</span>
      </div>
      <div className="course4">
        <div className="course-child1" />
      </div>
      <img className="chopin-1-icon2" alt="" src="/chopin-11@2x.png" />
      <BottomFooter
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propTop="1219px"
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
      <img
        className="mini-quiz-1"
        alt=""
        src="/mini-quiz-1@2x.png"
        onClick={onMiniQuiz1Click}
      />
      <img
        className="video-1-1"
        alt=""
        src="/video-1-1@2x.png"
        onClick={onVideo11Click}
      />
      <img
        className="video-2-1"
        alt=""
        src="/video-2-1@2x.png"
        onClick={onVideo21Click}
      />
      <img
        className="worksheet-1-icon"
        alt=""
        src="/worksheet-1@2x.png"
        onClick={onWorksheet1ImageClick}
      />
      <img
        className="review-1-icon"
        alt=""
        src="/review-1@2x.png"
        onClick={onReview1ImageClick}
      />
    </div>
  );
};

export default StudentLessonsExpanded2;
