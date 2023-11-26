import { useCallback } from "react";
import "./SongCard.css";

const SongCard = () => {
  const onSongContainerClick = useCallback(() => {
    // Please sync "Listening Expanded" to the project
  }, []);

  return (
    <div className="song-wrapper">
      <div className="song" onClick={onSongContainerClick}>
        <div className="rectangle-parent">
          <img className="frame-inner" alt="" src="/rectangle-55@2x.png" />
          <div className="song-1-parent">
            <div className="song-1">Song #1</div>
            <div className="description">Description</div>
          </div>
          <img
            className="vuesaxboldpause-icon1"
            alt=""
            src="/vuesaxboldpause.svg"
          />
          <img
            className="vuesaxboldvolume-high-icon1"
            alt=""
            src="/vuesaxboldvolumehigh.svg"
          />
        </div>
        <div className="frame-group">
          <div className="rectangle-group">
            <div className="frame-child1" />
            <div className="frame-child2" />
            <div className="ellipse-div" />
          </div>
          <div className="div5">-1:40</div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
