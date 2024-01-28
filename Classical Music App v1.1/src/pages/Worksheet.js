import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import "./Worksheet.css";
import BottomFooter from "../components/BottomFooter";

const Worksheet = () => {
  const navigate = useNavigate();

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/lessons/chopin");
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
    <div className="worksheet">
      <img
        className="evaarrow-ios-back-fill-icon"
        alt=""
        src="/evaarrowiosbackfill.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <ReviewContainer
        reviewText="Review"
        reviewTitle="review Chopin’s stylistic choices"
      />
      <div className="section-1-early-container">
        <p className="section-1-early-life-and-educ">
          <b>Section 1: Early Life and Education</b>
        </p>
        <ul className="birth-and-early-years-date-an">
          <li className="birth-and-early-years">
            <span className="birth-and-early">Birth and Early Years:</span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">Date and place of birth:</span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Age at which Chopin started playing piano:
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Name two of Chopin's early music teachers:
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Describe the role of Józef Elsner in Chopin's musical development:
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              How did Chopin's early musical education influence his later
              compositions?
            </span>
          </li>
        </ul>
        <p className="blank-line">&nbsp;</p>
        <p className="section-1-early-life-and-educ">
          <b>Section 2: Life in Paris and Artistic Contributions</b>
        </p>
        <ul className="birth-and-early-years-date-an">
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              At what age did Chopin leave Poland for Paris?
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Describe the significance of Paris in Chopin's career:
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              What were the primary types of compositions Chopin focused on?
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Explain how Chopin incorporated Polish folk music into his
              compositions:
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Discuss the characteristics of Chopin's piano playing style:
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              What made Chopin's compositions technically demanding?
            </span>
          </li>
        </ul>
        <p className="blank-line">&nbsp;</p>
        <p className="section-1-early-life-and-educ">
          <b>Section 3: Personal Life and Relationships</b>
        </p>
        <ul className="birth-and-early-years-date-an">
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Relationship with George Sand:
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Who was George Sand, and what was her significance in Chopin's
              life?
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              How did Chopin's relationship with Sand influence his music?
            </span>
          </li>
        </ul>
        <p className="blank-line">&nbsp;</p>
        <p className="section-1-early-life-and-educ">
          <b>Section 4: Influence</b>
        </p>
        <ul className="birth-and-early-years-date-an">
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              How does Chopin's music continue to influence modern pianists and
              composers?
            </span>
          </li>
          <li className="birth-and-early-years">
            <span className="birth-and-early">
              Conduct research on one of Chopin's major works (e.g., a specific
              Ballade, Prelude, or Nocturne) and analyze its musical and
              emotional qualities.
            </span>
          </li>
        </ul>
      </div>
      <img className="teaching-1-icon2" alt="" src="/teaching-11@2x.png" />
      <ReviewContainer
        reviewText="Worksheet"
        reviewTitle="practice your knowledge"
        propWidth="369px"
        propBackgroundColor="rgba(224, 172, 38, 0.51)"
        propColor="#4daded"
        propWidth1="112.8px"
      />
      <div className="answer-these-questions">
        Answer these questions on your own paper!
      </div>
      <img className="teaching-2-icon" alt="" src="/teaching-11@2x.png" />
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

export default Worksheet;
