import ContemporaryBopsPlaylistContai from "./ContemporaryBopsPlaylistContai";
import "./MadeForYouContainer.css";

const MadeForYouContainer = () => {
  return (
    <div className="headline-parent">
      <div className="headline">
        <div className="made-for-you">Made for you</div>
        <div className="see-all">See all</div>
      </div>
      <div className="playlist-parent">
        <ContemporaryBopsPlaylistContai
          songImageUrl="/rectangle-5@2x.png"
          playlistDescription="Contemporary Bops"
          playlistTitle="All of your favorites contemporary hits."
        />
        <ContemporaryBopsPlaylistContai
          songImageUrl="/rectangle-51@2x.png"
          playlistDescription="Violin Super-Mix"
          playlistTitle="The best of the strings, the best of all things."
          propWidth="200px"
        />
      </div>
    </div>
  );
};

export default MadeForYouContainer;
