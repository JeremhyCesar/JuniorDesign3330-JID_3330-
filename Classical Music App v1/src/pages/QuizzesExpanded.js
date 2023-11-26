import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormComposerCard from "../components/FormComposerCard";
import QuizForm from "../components/QuizForm";
import BottomFooter from "../components/BottomFooter";
import "./QuizzesExpanded.css";

const QuizzesExpanded = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/question-1");
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

  return (
    <div className="quizzes-expanded">
      <div className="quizzes-expanded-child" />
      <div className="glass4" />
      <div className="test-your-knowledge1">Test your knowledge!</div>
      <FormComposerCard onRectangle4Click={onRectangle4Click} />
      <div className="tasks1">
        <QuizForm propTop="920px" />
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
        <img className="vector-icon19" alt="" src="/vector3.svg" />
        <img className="icon-lock-locked" alt="" src="/-icon-lock-locked.svg" />
      </div>
      <img className="chopin-2-icon2" alt="" src="/chopin-21@2x.png" />
      <b className="my-quizzes1">My Quizzes</b>
      <BottomFooter
        propBoxShadow="unset"
        propTop="1219px"
        propFilter="unset"
        propCursor="unset"
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
      />
    </div>
  );
};

export default QuizzesExpanded;
