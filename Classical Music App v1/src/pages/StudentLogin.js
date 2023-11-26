import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css";

const StudentLogin = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/student-login");
  }, [navigate]);

  return (
    <div className="student-login">
      <div className="student-login-child" />
      <div className="please-sign-in">Please sign in to continue.</div>
      <b className="login2">Login</b>
      <div className="login3">
        <div className="login-item" />
        <div className="login4">{`LOGIN      `}</div>
      </div>
      <img className="vector-icon5" alt="" src="/vector8.svg" />
      <div className="login3">
        <div className="login-inner" />
        <div className="login4">{`LOGIN      `}</div>
      </div>
      <img className="vector-icon6" alt="" src="/vector9.svg" />
      <img
        className="girl-playing-cello-2-icon1"
        alt=""
        src="/girlplayingcello-2.svg"
      />
      <div className="student-login-item" />
      <div className="student-login-inner" onClick={onRectangle4Click} />
      <div className="juliesmithgmailcom1">juliesmith@gmail.com</div>
      <div className="username8">USERNAME</div>
      <img className="vector-icon7" alt="" src="/vector6.svg" />
      <div className="div3">•••••••••••••••</div>
      <div className="password">PASSWORD</div>
      <img className="vector-icon8" alt="" src="/vector7.svg" />
    </div>
  );
};

export default StudentLogin;
