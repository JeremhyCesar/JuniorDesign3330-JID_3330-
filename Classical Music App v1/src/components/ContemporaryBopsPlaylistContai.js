import { useMemo } from "react";
import "./ContemporaryBopsPlaylistContai.css";

const ContemporaryBopsPlaylistContai = ({
  songImageUrl,
  playlistDescription,
  playlistTitle,
  propWidth,
}) => {
  const playlistStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="playlist" style={playlistStyle}>
      <img className="playlist-child" alt="" src={songImageUrl} />
      <div className="information">
        <div className="contemporary-bops">{playlistDescription}</div>
        <div className="all-of-your">{playlistTitle}</div>
      </div>
    </div>
  );
};

export default ContemporaryBopsPlaylistContai;
