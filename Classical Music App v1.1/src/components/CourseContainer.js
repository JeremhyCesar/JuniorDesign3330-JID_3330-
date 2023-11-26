import "./CourseContainer.css";

const CourseContainer = ({ composers, onCourse1ContainerClick }) => {
  return (
    <div className="course-11" onClick={onCourse1ContainerClick}>
      <div className="course-1-item" />
      <b className="composers1">{composers}</b>
      <div className="progress5">
        <div className="progress-child3" />
        <div className="completed5">0% completed</div>
      </div>
    </div>
  );
};

export default CourseContainer;
