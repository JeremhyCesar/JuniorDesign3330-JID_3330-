import { useMemo } from "react";
import OperatingSystemElementsHome from "./OperatingSystemElementsHome";
import "./BottomFooter.css";

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

  return (
    <div className="nav" style={navStyle}>
      <div className="nav-bar">
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>
        <div className="nav-bar-background" />
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
        className="payandtransfer-unselected-tab"
        onClick={onPayAndTransferUnselectedTabContainerClick}
      >
        <div className="pay-transfer">Quizzes</div>
        <img className="vector-icon20" alt="" src="/vector.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab1"
        onClick={onPayAndTransferUnselectedTabContainer1Click}
      >
        <div className="pay-transfer1">Social</div>
        <img className="vector-icon21" alt="" src="/vector1.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab2"
        onClick={onPayAndTransferUnselectedTabContainer2Click}
      >
        <div className="pay-transfer1">Listen</div>
        <img className="vector-icon22" alt="" src="/vector2.svg" />
      </div>
      <div
        className="accounts-selected-tab"
        onClick={onAccountsSelectedTabContainerClick}
      >
        <div className="tap-area" />
        <div className="accounts-label">Home</div>
        <div className="iconboundingbox" />
        <img className="path-icon" alt="" src="/path.svg" />
      </div>
      <div
        className="zelle-label-parent"
        onClick={onFrameContainerClick}
        style={frameDivStyle}
      >
        <div className="zelle-label">Lessons</div>
        <img
          className="iconsactionableedit1"
          alt=""
          src="/iconsactionableedit.svg"
        />
      </div>
    </div>
  );
};

export default BottomFooter;
