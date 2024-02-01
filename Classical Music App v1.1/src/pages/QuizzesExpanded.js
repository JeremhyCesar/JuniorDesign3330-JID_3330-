import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormComposerCard from "../components/FormComposerCard";
import QuizForm from "../components/QuizForm";
import "./QuizzesExpanded.css";

const QuizzesExpanded = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/quizzes/chopin/question-1");
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
    <div className="quizzes-expanded">
      <div className="quizzes-expanded-child" />
      <div className="glass1" />
      <div className="test-your-knowledge">Test your knowledge!</div>
      <FormComposerCard onRectangle4Click={onRectangle4Click} />
      <div className="tasks">
        <QuizForm propTop="920px" />
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
        <img className="vector-icon31" alt="" src="/vector31.svg" />
        <img className="icon-lock-locked" alt="" src="/-icon-lock-locked.svg" />
      </div>
      <img className="chopin-2-icon1" alt="" src="/chopin-21@2x.png" />
      <b className="my-quizzes">My Quizzes</b>
      <div className="nav9">
        <div className="nav-bar10">
          <div className="rectangle-wrapper7">
            <div className="rectangle10" />
          </div>
          <div className="nav-bar-background10" />
          <div className="barshome-indicatorsiphoneli10">
            <div className="home-indicator11" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab30"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer30">Quizzes</div>
          <img className="vector-icon32" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab31"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer31">Social</div>
          <img className="vector-icon33" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab32"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer31">Listen</div>
          <img className="vector-icon34" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab10"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area10" />
          <div className="accounts-label10">Home</div>
          <div className="iconboundingbox10" />
          <img className="path-icon10" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-parent7" onClick={onFrameContainerClick}>
          <div className="zelle-label10">Lessons</div>
          <img
            className="iconsactionableedit11"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizzesExpanded;
