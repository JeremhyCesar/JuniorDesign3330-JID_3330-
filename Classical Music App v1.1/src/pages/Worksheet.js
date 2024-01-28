import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import "./Worksheet.css";

const Worksheet = () => {
  const navigate = useNavigate();

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/chopin");
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
      <div className="nav">
        <div className="nav-bar1">
          <div className="rectangle-container">
            <div className="rectangle1" />
          </div>
          <div className="nav-bar-background1" />
          <div className="barshome-indicatorsiphoneli1">
            <div className="home-indicator2" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab3"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer3">Quizzes</div>
          <img className="vector-icon3" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab4"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer4">Social</div>
          <img className="vector-icon4" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab5"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer4">Listen</div>
          <img className="vector-icon5" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab1"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area1" />
          <div className="accounts-label1">Home</div>
          <div className="iconboundingbox1" />
          <img className="path-icon1" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-group" onClick={onFrameContainerClick}>
          <div className="zelle-label1">Lessons</div>
          <img
            className="iconsactionableedit2"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Worksheet;
