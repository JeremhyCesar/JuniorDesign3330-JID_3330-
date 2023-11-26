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
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  return (
    <div className="student-lessons-expanded">
      <div className="student-lessons-expanded-child" />
      <div className="glass3" />
      <div className="the-minds-behind">The minds behind the music!</div>
      <img
        className="evaarrow-ios-back-fill-icon13"
        alt=""
        src="/evaarrowiosbackfill3.svg"
      />
      <b className="composers">Composers</b>
      <FormComposerCard onRectangle4Click={onRectangle4Click} />
      <div className="tasks">
        <QuizForm />
        <div className="tasks-child" />
        <div className="tasks-item" />
        <div className="tasks-inner" />
        <div className="task-1">
          <div className="task-1-child" />
          <div className="task-1-item" />
          <div className="video">Video</div>
          <div className="learn-about-chopins">
            learn about Chopin’s early life
          </div>
          <div className="task-1-inner" />
        </div>
        <b className="locked">{`Locked... `}</b>
        <img className="vector-icon" alt="" src="/vector3.svg" />
      </div>
      <img className="chopin-2-icon1" alt="" src="/chopin-21@2x.png" />
      <img className="vector-icon1" alt="" src="/vector3.svg" />
      <img className="vector-icon2" alt="" src="/vector3.svg" />
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
