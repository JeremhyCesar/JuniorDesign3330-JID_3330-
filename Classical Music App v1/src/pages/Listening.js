import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MadeForYouContainer from "../components/MadeForYouContainer";
import PopularComposersContainer from "../components/PopularComposersContainer";
import FavoriteSongsContainer from "../components/FavoriteSongsContainer";
import SongCard from "../components/SongCard";
import BottomFooter from "../components/BottomFooter";
import "./Listening.css";

const Listening = () => {
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

  return (
    <div className="listening">
      <div className="homepage">
        <div className="good-morning-julie-wrapper">
          <div className="good-morning-julie">Good morning Julie!</div>
        </div>
        <div className="frame-parent">
          <MadeForYouContainer />
          <PopularComposersContainer />
          <FavoriteSongsContainer />
        </div>
        <SongCard />
      </div>
      <BottomFooter
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propTop="815px"
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

export default Listening;
