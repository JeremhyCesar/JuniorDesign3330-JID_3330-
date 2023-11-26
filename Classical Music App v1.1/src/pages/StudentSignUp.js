import CreateAccountForm from "../components/CreateAccountForm";
import "./StudentSignUp.css";

const StudentSignUp = () => {
  return (
    <div className="student-sign-up">
      <div className="student-sign-up-child" />
      <b className="create-account">{`Create Account `}</b>
      <div className="login1">
        <div className="sign-up">SIGN UP</div>
      </div>
      <img className="icon-heart" alt="" src="/-icon-heart.svg" />
      <img className="vector-icon40" alt="" src="/vector5.svg" />
      <img
        className="girl-playing-cello-2-icon"
        alt=""
        src="/girlplayingcello-2.svg"
      />
      <div className="student-sign-up-item" />
      <div className="student-sign-up-inner" />
      <div className="juliesmithgmailcom">juliesmith@gmail.com</div>
      <div className="student-sign-up-child1" />
      <div className="student-sign-up-item" />
      <div className="student-sign-up-inner" />
      <div className="student-sign-up-child1" />
      <div className="student-sign-up-child5" />
      <CreateAccountForm />
    </div>
  );
};

export default StudentSignUp;
