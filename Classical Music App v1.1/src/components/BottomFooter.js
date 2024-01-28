import { useMemo } from "react";
import OperatingSystemElementsHome from "./OperatingSystemElementsHome";
import "./BottomFooter.css";

let progressDict;
const BottomFooter = ({
  propBoxShadow,
  propTop,
  propFilter,
  propCursor,
  onPayAndTransferUnselectedTabContainerClick,
  onPayAndTransferUnselectedTabContainer1Click,
  onPayAndTransferUnselectedTabContainer2Click,
  onAccountsSelectedTabContainerClick,
  onFrameContainerClick,
  path
}) => {
  const navStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      top: propTop,
      filter: propFilter,
    };
  }, [propBoxShadow, propTop, propFilter]);

  const frameDivStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);
  
  if (localStorage.getItem("progress") != null) {
    progressDict = localStorage.getItem("progress");
  } else {
    localStorage.setItem("progress", {});
    progressDict = localStorage.getItem("progress");
  }
  
  if (!progress.hasOwnProperty("chopin")) {
    progress["chopin"] = 0;
  }

  return (
    <div className="nav11" style={navStyle}>
      <div className="nav-bar12">
        <div className="rectangle-wrapper8">
          <div className="rectangle11" />
        </div>
        <div className="nav-bar-background11" />
        <OperatingSystemElementsHome
          operatingSystemElementsHoBackgroundColor="unset"
          operatingSystemElementsHoWidth="34.35%"
          operatingSystemElementsHoHeight="42.5%"
          operatingSystemElementsHoPosition="absolute"
          operatingSystemElementsHoTop="57.5%"
          operatingSystemElementsHoRight="32.58%"
          operatingSystemElementsHoBottom="0%"
          operatingSystemElementsHoLeft="33.07%"
          homeIndicatorLeft="calc(50% - 67.1px)"
        />
      </div>
      <div
        className="payandtransfer-unselected-tab36"
        onClick={onPayAndTransferUnselectedTabContainerClick}
      >
        <div className="pay-transfer36">Quizzes</div>
        <img className="vector-icon55" alt="" src="/vector.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab37"
        onClick={onPayAndTransferUnselectedTabContainer1Click}
      >
        <div className="pay-transfer37">Social</div>
        <img className="vector-icon56" alt="" src="/vector1.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab38"
        onClick={onPayAndTransferUnselectedTabContainer2Click}
      >
        <div className="pay-transfer37">Listen</div>
        <img className="vector-icon57" alt="" src="/vector2.svg" />
      </div>
      <div
        className="accounts-selected-tab12"
        onClick={onAccountsSelectedTabContainerClick}
      >
        <div className="tap-area11" />
        <div className="accounts-label12">Home</div>
        <div className="iconboundingbox12" />
        <img className="path-icon12" alt="" src="/path.svg" />
      </div>
      <div
        className="zelle-label-parent9"
        onClick={onFrameContainerClick}
        style={frameDivStyle}
      >
        <div className="zelle-label12">Lessons</div>
        <img
          className="iconsactionableedit13"
          alt=""
          src="/iconsactionableedit.svg"
        />
      </div>
    </div>
  );
};

export default BottomFooter;
