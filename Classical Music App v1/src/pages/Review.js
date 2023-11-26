import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import BottomFooter from "../components/BottomFooter";
import "./Review.css";

const Review = () => {
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

  const onEvaarrowIosBackFillIconClick = useCallback(() => {
    navigate("/student-lessons-expanded-2");
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
      <img className="teaching-1-icon2" alt="" src="/teaching-11@2x.png" />
      <BottomFooter
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propTop="1382px"
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

export default Review;
