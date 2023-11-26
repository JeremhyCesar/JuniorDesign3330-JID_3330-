import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Course3Container from "../components/Course3Container";
import CourseContainer from "../components/CourseContainer";
import BottomFooter from "../components/BottomFooter";
import "./StudentLesson2.css";

const StudentLesson2 = () => {
  const navigate = useNavigate();

  const onCourse1ContainerClick = useCallback(() => {
    navigate("/student-lessons-expanded");
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
    <div className="student-lesson-2">
      <div className="student-lesson-2-child" />
      <div className="student-lesson-2-item" />
      <div className="student-lesson-2-inner" />
      <div className="glass3" />
      <Course3Container skillLevel="Instruments" />
      <Course3Container
        skillLevel="Musical Works"
        completedTop="448px"
        propBackgroundColor="#e2480d"
      />
      <CourseContainer
        composers="Composers"
        onCourse1ContainerClick={onCourse1ContainerClick}
      />
      <div className="heading2">
        <div className="what-should-we">What should we learn now?</div>
        <b className="my-lessons">My Lessons</b>
        <img
          className="evaarrow-ios-back-fill-icon11"
          alt=""
          src="/evaarrowiosbackfill3.svg"
        />
      </div>
      <img
        className="man-playing-piano-1-icon"
        alt=""
        src="/manplayingpiano-1.svg"
      />
      <img
        className="musical-band-performing-1-icon"
        alt=""
        src="/musicalbandperforming-1.svg"
      />
      <img
        className="girl-enjoying-music-icon"
        alt=""
        src="/girlenjoyingmusic.svg"
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
      />
    </div>
  );
};

export default StudentLesson2;
