import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer1 from "../components/FormContainer1";
import BottomFooter from "../components/BottomFooter";
import "./StudentHome.css";

const StudentHome = () => {
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

  const onLunchMenuContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  const onLunchMenuClick = useCallback(() => {
    navigate("/listening");
  }, [navigate]);

  const onLunchMenuContainer2Click = useCallback(() => {
    navigate("/quizzes");
  }, [navigate]);

  return (
    <div className="student-home">
      <div className="pfp-shadow" />
      <div className="lunch-shadow" />
      <div className="glass" />
      <img className="profile-icon" alt="" src="/profile@2x.png" />
      <div className="heading">
        <b className="julie-smith">Julie Smith</b>
        <b className="hello">{`Hello, `}</b>
      </div>
      <div className="lunch-menu" onClick={onLunchMenuContainerClick}>
        <div className="lunch-menu-child" />
        <div className="plate-with-vegetables" />
      </div>
      <FormContainer1 />
      <img
        className="lunch-menu-icon"
        alt=""
        src="/lunch-menu.svg"
        onClick={onLunchMenuClick}
      />
      <div className="reminder">
        <div className="reminder-child" />
        <b className="note-from-dad-container">
          <span>{`Note from `}</span>
          <span className="dad">Dad</span>
        </b>
        <div className="do-all-of">
          Do all of your lessons before I get back from work. Love you!
        </div>
        <div className="reminder-item" />
        <img
          className="seated-man-driving"
          alt=""
          src="/seated-man-driving@2x.png"
        />
      </div>
      <div className="lunch-menu1">
        <div className="lunch-menu-item" />
        <div className="plate-with-vegetables1" />
      </div>
      <div className="lunch-menu2" onClick={onLunchMenuContainer2Click}>
        <div className="lunch-menu-inner" />
        <div className="plate-with-vegetables" />
      </div>
      <div className="happy-music-monday">Happy Music Monday!</div>
      <div className="where-words-fail">Where words fail, music speaks.</div>
      <b className="julie-smith1">Julie Smith</b>
      <img
        className="girl-playing-cello-1-icon"
        alt=""
        src="/girlplayingcello-1.svg"
      />
      <b className="quizzes">Quizzes</b>
      <b className="listen">Listen</b>
      <b className="learn">Learn</b>
      <img className="teaching-1-icon" alt="" src="/teaching-1@2x.png" />
      <img className="to-do-list-1-icon" alt="" src="/todolist-1.svg" />
      <BottomFooter
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

export default StudentHome;
