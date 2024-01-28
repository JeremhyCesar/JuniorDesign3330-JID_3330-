import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Course3Container from "../components/Course3Container";
import CourseContainer from "../components/CourseContainer";
import BottomFooter from "../components/BottomFooter";
import "./Quizzes.css";

const Quizzes = () => {
  const navigate = useNavigate();

  const onCourse1ContainerClick = useCallback(() => {
    navigate("/quizzes-expanded");
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
    <div className="quizzes2">
      <div className="quizzes-child" />
      <div className="quizzes-item" />
      <div className="quizzes-inner" />
      <div className="course-31">
        <div className="course-3-item" />
        <b className="expert">Expert</b>
        <img
          className="saxophonist-playing-saxophone"
          alt=""
          src="/saxophonist-playing-saxophone-wearing-golden-glasses@2x.png"
        />
        <div className="progress">
          <div className="progress-child" />
          <div className="completed">0% completed</div>
        </div>
      </div>
      <Course3Container
        skillLevel="Intermediate"
        completedTop="448px"
        propBackgroundColor="#e2480d"
      />
      <CourseContainer
        composers="Beginner"
        onCourse1ContainerClick={onCourse1ContainerClick}
      />
      <div className="heading1">
        <div className="test-your-knowledge1">Test your knowledge!</div>
        <b className="my-quizzes1">My Quizzes</b>
      </div>
      <img
        className="girl-playing-violin-1-icon"
        alt=""
        src="/girlplayingviolin-1.svg"
      />
      <img
        className="couple-dance-party-1-icon"
        alt=""
        src="/coupledanceparty-1.svg"
      />
      <BottomFooter
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propTop="1010px"
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
        path = {useLocation().pathname}
      />
    </div>
  );
};

export default Quizzes;
