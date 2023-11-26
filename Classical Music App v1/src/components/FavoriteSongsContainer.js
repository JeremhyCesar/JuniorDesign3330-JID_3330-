import ContemporaryBopsPlaylistContai from "./ContemporaryBopsPlaylistContai";
import "./FavoriteSongsContainer.css";

const FavoriteSongsContainer = () => {
  return (
    <div className="headline-container">
      <div className="headline2">
        <div className="favorite-songs">Favorite songs</div>
        <div className="see-all2">See all</div>
      </div>
      <div className="container1">
        <ContemporaryBopsPlaylistContai
          songImageUrl="/rectangle-52@2x.png"
          playlistDescription="Song #1"
          playlistTitle="Description"
          propWidth="160px"
        />
        <ContemporaryBopsPlaylistContai
          songImageUrl="/rectangle-53@2x.png"
          playlistDescription="Song #2"
          playlistTitle="Description"
          propWidth="160px"
        />
        <ContemporaryBopsPlaylistContai
          songImageUrl="/rectangle-54@2x.png"
          playlistDescription="Song"
          playlistTitle="Descripto"
          propWidth="160px"
        />
      </div>
    </div>
  );
};

export default FavoriteSongsContainer;
