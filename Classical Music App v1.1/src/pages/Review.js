import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import "./Review.css";

const Review = () => {
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
    <div className="review">
      <img
        className="evaarrow-ios-back-fill-icon1"
        alt=""
        src="/evaarrowiosbackfill.svg"
        onClick={onEvaarrowIosBackFillIconClick}
      />
      <ReviewContainer
        reviewText="Review"
        reviewTitle="review Chopin’s stylistic choices"
        propWidth="313px"
        propBackgroundColor="rgba(226, 72, 13, 0.51)"
        propColor="#147641"
        propWidth1="75.9px"
      />
      <div className="frdric-chopin-a-container">
        <p className="frdric-chopin-a">
          Frédéric Chopin, a Polish composer and virtuoso pianist of the
          Romantic era, is renowned for his individualistic and highly
          expressive music style, which has distinct characteristics:
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">Emphasis on Nuance and Subtlety:</b>
          <span className="chopins-music-is">
            {" "}
            Chopin's music is marked by its refined nuances and subtle dynamics.
            He often used delicate pianissimos and strong fortissimos to create
            a wide range of emotions.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">Rubato:</b>
          <span className="chopins-music-is">
            {" "}
            Chopin frequently employed rubato, a technique where the tempo is
            slightly altered for expressive purposes. This gives his music a
            flexible, organic feel, as if it's breathing.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">
            Innovative Harmonies and Modulations:
          </b>
          <span className="chopins-music-is">
            {" "}
            He was a master of harmony, often using extended chords,
            chromaticism, and innovative modulations that were ahead of his
            time.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">Lyricism and Melodic Beauty:</b>
          <span className="chopins-music-is">
            {" "}
            His melodies are highly lyrical and singable, often featuring
            elegant, flowing lines that are both beautiful and technically
            demanding.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">Use of Nationalistic Elements:</b>
          <span className="chopins-music-is">
            {" "}
            Chopin incorporated elements of Polish folk music into his
            compositions, especially in his mazurkas and polonaises, creating a
            unique blend of classical and nationalistic styles.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">{`Focus on Piano: `}</b>
          <span className="chopins-music-is">
            Almost all of Chopin's compositions are for the piano, and he
            expanded the technical possibilities of the instrument, making full
            use of its range and expressive capabilities.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">Structural Innovation:</b>
          <span className="chopins-music-is">
            {" "}
            While he often used traditional forms like the nocturne, sonata, and
            ballade, Chopin's approach to structure was innovative, often
            blurring the lines between sections and creating seamless
            transitions.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="emphasis-on-nuance-and-subtlet">
          <b className="emphasis-on-nuance">Emotional Depth:</b>
          <span className="chopins-music-is">
            {" "}
            His music, ranging from joyful and spirited to melancholic and
            introspective, is deeply emotional, often reflecting his own
            experiences and feelings.
          </span>
        </p>
        <p className="frdric-chopin-a">&nbsp;</p>
        <p className="frdric-chopin-a">
          These stylistic choices contribute to Chopin's enduring popularity and
          influence in the realm of classical music.
        </p>
      </div>
      <img className="teaching-1-icon3" alt="" src="/teaching-11@2x.png" />
      <div className="nav1">
        <div className="nav-bar2">
          <div className="rectangle-frame">
            <div className="rectangle2" />
          </div>
          <div className="nav-bar-background2" />
          <div className="barshome-indicatorsiphoneli2">
            <div className="home-indicator3" />
          </div>
        </div>
        <div
          className="payandtransfer-unselected-tab6"
          onClick={onPayAndTransferUnselectedTabContainerClick}
        >
          <div className="pay-transfer6">Quizzes</div>
          <img className="vector-icon6" alt="" src="/vector.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab7"
          onClick={onPayAndTransferUnselectedTabContainer1Click}
        >
          <div className="pay-transfer7">Social</div>
          <img className="vector-icon7" alt="" src="/vector1.svg" />
        </div>
        <div
          className="payandtransfer-unselected-tab8"
          onClick={onPayAndTransferUnselectedTabContainer2Click}
        >
          <div className="pay-transfer7">Listen</div>
          <img className="vector-icon8" alt="" src="/vector2.svg" />
        </div>
        <div
          className="accounts-selected-tab2"
          onClick={onAccountsSelectedTabContainerClick}
        >
          <div className="tap-area2" />
          <div className="accounts-label2">Home</div>
          <div className="iconboundingbox2" />
          <img className="path-icon2" alt="" src="/path.svg" />
        </div>
        <div className="zelle-label-container" onClick={onFrameContainerClick}>
          <div className="zelle-label2">Lessons</div>
          <img
            className="iconsactionableedit3"
            alt=""
            src="/iconsactionableedit.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
