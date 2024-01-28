import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FormContainer.css";

const FormContainer = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/quizzes/chopin/question-4");
  }, [navigate]);

  return (
    <div className="course-34">
      <div className="course-3-child2" />
      <div className="course-211">
        <div className="course-2-child8" />
        <div className="course-212">
          <div className="course-2-child9" />
        </div>
      </div>
      <div className="course-3-child3" onClick={onRectangle3Click} />
      <b className="b-short-form">{`B.  Short Form Classical `}</b>
      <b className="c-k-pop">C. K-Pop</b>
      <b className="d-rock">D. Rock</b>
    </div>
  );
};

export default FormContainer;
