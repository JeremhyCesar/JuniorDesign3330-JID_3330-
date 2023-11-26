import { useMemo } from "react";
import "./OperatingSystemElementsHome.css";

const OperatingSystemElementsHome = ({
  operatingSystemElementsHoBackgroundColor,
  operatingSystemElementsHoWidth,
  operatingSystemElementsHoHeight,
  operatingSystemElementsHoPosition,
  operatingSystemElementsHoTop,
  operatingSystemElementsHoRight,
  operatingSystemElementsHoBottom,
  operatingSystemElementsHoLeft,
  homeIndicatorLeft,
}) => {
  const operatingSystemElementsHomeStyle = useMemo(() => {
    return {
      backgroundColor: operatingSystemElementsHoBackgroundColor,
      width: operatingSystemElementsHoWidth,
      height: operatingSystemElementsHoHeight,
      position: operatingSystemElementsHoPosition,
      top: operatingSystemElementsHoTop,
      right: operatingSystemElementsHoRight,
      bottom: operatingSystemElementsHoBottom,
      left: operatingSystemElementsHoLeft,
    };
  }, [
    operatingSystemElementsHoBackgroundColor,
    operatingSystemElementsHoWidth,
    operatingSystemElementsHoHeight,
    operatingSystemElementsHoPosition,
    operatingSystemElementsHoTop,
    operatingSystemElementsHoRight,
    operatingSystemElementsHoBottom,
    operatingSystemElementsHoLeft,
  ]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      left: homeIndicatorLeft,
    };
  }, [homeIndicatorLeft]);

  return (
    <div
      className="operating-system-elementshome"
      style={operatingSystemElementsHomeStyle}
    >
      <div className="home-indicator" style={homeIndicatorStyle} />
    </div>
  );
};

export default OperatingSystemElementsHome;
