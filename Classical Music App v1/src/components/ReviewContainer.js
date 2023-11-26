import { useMemo } from "react";
import "./ReviewContainer.css";

const ReviewContainer = ({
  reviewText,
  reviewTitle,
  propWidth,
  propBackgroundColor,
  propColor,
  propWidth1,
}) => {
  const task4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const reviewStyle = useMemo(() => {
    return {
      color: propColor,
      width: propWidth1,
    };
  }, [propColor, propWidth1]);

  return (
    <div className="task-4" style={task4Style}>
      <div className="task-4-child" />
      <div className="task-4-item" style={rectangleDivStyle} />
      <div className="review1" style={reviewStyle}>
        {reviewText}
      </div>
      <div className="review-chopins-stylistic">{reviewTitle}</div>
    </div>
  );
};

export default ReviewContainer;
