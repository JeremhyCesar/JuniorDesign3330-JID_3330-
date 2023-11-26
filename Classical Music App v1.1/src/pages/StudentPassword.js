import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentPassword.css";

const StudentPassword = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/student-login");
  }, [navigate]);

  return (
    <div className="student-password">
      <div className="student-password-child" />
      <div className="please-sign-in1">Please sign in to continue.</div>
      <b className="login7">Login</b>
      <div className="student-password-item" />
      <div className="student-password-inner" onClick={onRectangle2Click} />
      <img className="vector-icon45" alt="" src="/vector9.svg" />
      <img
        className="girl-playing-cello-2-icon2"
        alt=""
        src="/girlplayingcello-2.svg"
      />
      <img className="vector-icon46" alt="" src="/vector10.svg" />
      <div className="login8">
        <div className="login-child1" />
        <div className="login9">{`LOGIN      `}</div>
      </div>
      <div className="juliesmithgmailcom2">juliesmith@gmail.com</div>
      <div className="username9">USERNAME</div>
      <img className="vector-icon47" alt="" src="/vector6.svg" />
      <div className="div4">•••••••••••••••</div>
      <div className="password1">PASSWORD</div>
      <img className="vector-icon48" alt="" src="/vector7.svg" />
    </div>
  );
};

export default StudentPassword;
