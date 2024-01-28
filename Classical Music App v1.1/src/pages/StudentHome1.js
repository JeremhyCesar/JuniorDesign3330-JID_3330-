import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./StudentHome1.css";

const StudentHome1 = () => {
  const navigate = useNavigate();

  const onLunchMenuContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  const onLunchMenuClick = useCallback(() => {
    navigate("/listening");
  }, [navigate]);

  const onLunchMenuContainer2Click = useCallback(() => {
    navigate("/quizzes");
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

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  return (
    <div className="student-home1">
      <div className="student-home-child" />
      <div className="student-home-item" />
      <div className="student-home-inner" />
      <div className="ellipse-div" />
      <div className="lunch-shadow1" />
      <div className="lunch-menu3" onClick={onLunchMenuContainerClick}>
        <div className="rectangle-div" />
        <div className="plate-with-vegetables3" />
      </div>
      <img
        className="lunch-menu-icon1"
        alt=""
        src="/lunch-menu.svg"
        onClick={onLunchMenuClick}
      />
      <div className="lunch-menu4">
        <div className="lunch-menu-child1" />
        <div className="plate-with-vegetables4" />
      </div>
      <div className="lunch-menu5" onClick={onLunchMenuContainer2Click}>
        <div className="lunch-menu-child2" />
        <div className="plate-with-vegetables3" />
      </div>
      <div className="happy-music-monday1">Happy Music Monday!</div>
      <div className="where-words-fail1">Where words fail, music speaks.</div>
      <b className="julie-smith2">Julie Smith</b>
      <img
        className="girl-playing-cello-1-icon1"
        alt=""
        src="/girlplayingcello-1.svg"
      />
      <b className="quizzes1">Quizzes</b>
      <b className="listen1">Listen</b>
      <b className="learn1">Learn</b>
      <img className="teaching-1-icon1" alt="" src="/teaching-1@2x.png" />
      <img className="to-do-list-1-icon1" alt="" src="/todolist-1.svg" />
      <div className="nav-bar">
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>
        <div className="nav-bar-background" />
        <div className="barshome-indicatorsiphoneli">
          <div className="home-indicator1" />
        </div>
      </div>
      <div
        className="payandtransfer-unselected-tab"
        onClick={onPayAndTransferUnselectedTabContainerClick}
      >
        <div className="pay-transfer">Quizzes</div>
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab1"
        onClick={onPayAndTransferUnselectedTabContainer1Click}
      >
        <div className="pay-transfer1">Social</div>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab2"
        onClick={onPayAndTransferUnselectedTabContainer2Click}
      >
        <div className="pay-transfer1">Listen</div>
        <img className="vector-icon2" alt="" src="/vector2.svg" />
      </div>
      <div className="accounts-selected-tab">
        <div className="tap-area" />
        <div className="accounts-label">Home</div>
        <div className="iconboundingbox" />
        <img className="path-icon" alt="" src="/path.svg" />
      </div>
      <div className="zelle-label-parent" onClick={onFrameContainerClick}>
        <div className="zelle-label">Lessons</div>
        <img
          className="iconsactionableedit1"
          alt=""
          src="/iconsactionableedit.svg"
        />
      </div>
    </div>
  );
};

export default StudentHome1;
