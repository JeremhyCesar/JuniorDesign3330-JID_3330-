import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FirstScreen.css";

const FirstScreen = () => {
  const navigate = useNavigate();

  const onLOGINTextClick = useCallback(() => {
    navigate("/login-screen");
  }, [navigate]);

  return (
    <div className="first-screen">
      <div className="first-screen-child" />
      <div className="ready-to-learn1">Ready to learn?</div>
      <div className="login13">
        <div className="login-child3" />
        <div className="login14" onClick={onLOGINTextClick}>
          LOGIN
        </div>
      </div>
      <div className="sign-in1">
        <div className="sign-in-item" />
        <div className="sign-up1">SIGN UP</div>
      </div>
      <b className="notemakers1">NoteMakers</b>
      <img className="vector-icon18" alt="" src="/vector4.svg" />
      <img
        className="girl-playing-cello-1-icon2"
        alt=""
        src="/girlplayingcello-11.svg"
      />
    </div>
  );
};

export default FirstScreen;
