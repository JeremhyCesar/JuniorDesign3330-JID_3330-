import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentUsername.css";

const StudentUsername = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/student-password");
  }, [navigate]);

  return (
    <div className="student-username">
      <div className="student-username-child" />
      <div className="please-sign-in2">Please sign in to continue.</div>
      <b className="login10">Login</b>
      <div className="student-username-item" />
      <img className="vector-icon49" alt="" src="/vector9.svg" />
      <img
        className="girl-playing-cello-2-icon3"
        alt=""
        src="/girlplayingcello-2.svg"
      />
      <img className="vector-icon50" alt="" src="/vector10.svg" />
      <div className="login11">
        <div className="login-child2" />
        <div className="login12">{`LOGIN      `}</div>
      </div>
      <div className="student-username-inner" />
      <div className="password2">PASSWORD</div>
      <div className="forgot">FORGOT</div>
      <img className="vector-icon51" alt="" src="/vector11.svg" />
      <div className="student-username-child1" />
      <div className="student-username-child2" />
      <div className="password2">PASSWORD</div>
      <div className="forgot">FORGOT</div>
      <img className="vector-icon51" alt="" src="/vector11.svg" />
      <div className="student-username-child3" onClick={onRectangle4Click} />
      <div className="juliesmithgmailcom3">juliesmith@gmail.com</div>
      <div className="username10">USERNAME</div>
      <img className="vector-icon53" alt="" src="/vector6.svg" />
    </div>
  );
};

export default StudentUsername;
