import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormComposerCard from "../components/FormComposerCard";
import QuizForm from "../components/QuizForm";
import BottomFooter from "../components/BottomFooter";
import "./StudentLessonsExpanded.css";

const StudentLessonsExpanded = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
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
    navigate("/student-home");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  return (
    <div className="student-lessons-expanded">
      <div className="student-lessons-expanded-child" />
      <div className="glass4" />
      <div className="the-minds-behind">The minds behind the music!</div>
      <img
        className="evaarrow-ios-back-fill-icon12"
        alt=""
        src="/evaarrowiosbackfill3.svg"
      />
      <b className="composers">Composers</b>
      <FormComposerCard onRectangle4Click={onRectangle4Click} />
      <div className="tasks1">
        <QuizForm />
        <div className="tasks-child1" />
        <div className="tasks-child2" />
        <div className="tasks-child3" />
        <div className="task-11">
          <div className="task-1-child1" />
          <div className="task-1-child2" />
          <div className="video1">Video</div>
          <div className="learn-about-chopins1">
            learn about Chopin’s early life
          </div>
          <div className="task-1-child3" />
        </div>
        <b className="locked1">{`Locked... `}</b>
        <img className="vector-icon35" alt="" src="/vector31.svg" />
      </div>
      <img className="chopin-2-icon2" alt="" src="/chopin-21@2x.png" />
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
    </div>
  );
};

export default StudentLessonsExpanded;
