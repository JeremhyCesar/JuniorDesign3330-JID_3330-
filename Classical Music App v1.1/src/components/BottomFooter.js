import { useMemo, useState } from "react";
import OperatingSystemElementsHome from "./OperatingSystemElementsHome";
import "./BottomFooter.css";


export const progressDict = {
  addProgress: (topic) => {
    progressDict[topic].progress += 1;
  },
  getProgress: (topic) => {
    return progressDict.hasOwnProperty(topic) && progressDict[topic].hasOwnProperty("progress") ? progressDict[topic].progress : 0;
  },
  finishQuiz: (topic) => {
    progressDict[topic].quiz = true;
    progressDict[topic].progress += 1;
    document.getElementsByClassName("progress-done")[0].style.width = progressDict[topic].progress / 5 * 100 + '%';
  },
  getQuizComplete: (topic) => {
    return progressDict[topic].quiz;
  }
};

export const BottomFooter = ({
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
  let progressVisibility = "hidden";
  let splitPath = path.split("/")
  // if the content is a learning module (i.e. needs progress tracked) then url will start with "/lessons/"
  if (splitPath[1] == "lessons") {
    progressVisibility = "visible";
    // second part of url will represent topic
    if (!progressDict.hasOwnProperty(splitPath[2])) {
      progressDict[splitPath[2]] = {quiz: false, progress: 0};
    }
  }

  return (
    <div className="nav11">
      <div className="progress" style={{visibility: progressVisibility}}>
        <div className="progress-done" style={{width: progressDict.getProgress("chopin") * 20.0+"%"}}></div>
      </div>
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
