import { useCallback } from "react";
import OperatingSystemElementsHome from "./OperatingSystemElementsHome";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
    <div className="nav1">
      <div className="nav-bar1">
        <div className="nav-bar-child" />
        <OperatingSystemElementsHome
          operatingSystemElementsHoBackgroundColor="unset"
          operatingSystemElementsHoWidth="34.35%"
          operatingSystemElementsHoHeight="42.43%"
          operatingSystemElementsHoPosition="absolute"
          operatingSystemElementsHoTop="57.57%"
          operatingSystemElementsHoRight="32.58%"
          operatingSystemElementsHoBottom="0%"
          operatingSystemElementsHoLeft="33.07%"
          homeIndicatorLeft="calc(50% - 67.1px)"
        />
      </div>
      <div
        className="payandtransfer-unselected-tab3"
        onClick={onPayAndTransferUnselectedTabContainerClick}
      >
        <div className="pay-transfer3">Quizzes</div>
        <img className="vector-icon23" alt="" src="/vector.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab4"
        onClick={onPayAndTransferUnselectedTabContainer1Click}
      >
        <div className="pay-transfer4">Social</div>
        <img className="vector-icon24" alt="" src="/vector1.svg" />
      </div>
      <div
        className="payandtransfer-unselected-tab5"
        onClick={onPayAndTransferUnselectedTabContainer2Click}
      >
        <div className="pay-transfer4">Listen</div>
        <img className="vector-icon25" alt="" src="/vector2.svg" />
      </div>
      <div
        className="accounts-selected-tab1"
        onClick={onAccountsSelectedTabContainerClick}
      >
        <div className="accounts-label1">Home</div>
        <div className="iconboundingbox1" />
        <img className="path-icon1" alt="" src="/path.svg" />
      </div>
      <div className="zelle-label-group" onClick={onFrameContainerClick}>
        <div className="zelle-label1">Lessons</div>
        <img
          className="iconsactionableedit2"
          alt=""
          src="/iconsactionableedit.svg"
        />
      </div>
    </div>
  );
};

export default Footer;
