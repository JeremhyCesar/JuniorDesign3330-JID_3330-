import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "../components/BottomFooter";
import "./Social.css";

const Social = () => {
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
    navigate("/student-home");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/student-lesson");
  }, [navigate]);

  return (
    <div className="social">
      <img
        className="entypodots-two-horizontal-icon6"
        alt=""
        src="/entypodotstwohorizontal.svg"
      />
      <div className="social1">Social</div>
      <div className="social-child" />
      <div className="social-item" />
      <div className="social-inner" />
      <div className="friends">Friends</div>
      <div className="emma-aria">Emma Aria</div>
      <div className="eiden">Eiden</div>
      <div className="jackson">Jackson</div>
      <div className="username">@username</div>
      <div className="username1">@username</div>
      <div className="username2">@username</div>
      <b className="b">1674</b>
      <b className="b1">1847</b>
      <b className="b2">2430</b>
      <div className="national">National</div>
      <div className="global1">Global</div>
      <div className="social-child1" />
      <div className="social-child2" />
      <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
      <img className="social-child3" alt="" src="/ellipse-2@2x.png" />
      <img className="social-child4" alt="" src="/ellipse-4@2x.png" />
      <img className="social-child5" alt="" src="/ellipse-5@2x.png" />
      <img className="social-child6" alt="" src="/ellipse-6@2x.png" />
      <img className="social-child7" alt="" src="/ellipse-7@2x.png" />
      <img className="social-child8" alt="" src="/ellipse-8@2x.png" />
      <img className="social-child9" alt="" src="/ellipse-3@2x.png" />
      <div className="social-child10" />
      <div className="social-child11" />
      <div className="social-child12" />
      <div className="div">2</div>
      <div className="div1">1</div>
      <div className="div2">3</div>
      <div className="sebastian">Sebastian</div>
      <div className="jason">Jason</div>
      <div className="natalie">Natalie</div>
      <div className="serenity">Serenity</div>
      <div className="hannah">Hannah</div>
      <b className="b3">1124</b>
      <b className="b4">875</b>
      <b className="b5">774</b>
      <b className="b6">723</b>
      <b className="b7">559</b>
      <div className="username3">@username</div>
      <div className="username4">@username</div>
      <div className="username5">@username</div>
      <div className="username6">@username</div>
      <div className="username7">@username</div>
      <img className="polygon-icon" alt="" src="/polygon-1.svg" />
      <img className="social-child13" alt="" src="/polygon-2.svg" />
      <img className="social-child14" alt="" src="/polygon-1.svg" />
      <img className="social-child15" alt="" src="/polygon-1.svg" />
      <img className="social-child16" alt="" src="/polygon-2.svg" />
      <div className="line-div" />
      <div className="social-child17" />
      <div className="social-child18" />
      <div className="social-child19" />
      <BottomFooter
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propTop="815px"
        propFilter="unset"
        propCursor="pointer"
        onPayAndTransferUnselectedTabContainerClick={
          onPayAndTransferUnselectedTabContainerClick
        }
        onPayAndTransferUnselectedTabContainer1Click={
          onPayAndTransferUnselectedTabContainer1Click
        }
        onPayAndTransferUnselectedTabContainer2Click={
          onPayAndTransferUnselectedTabContainer2Click
        }
        onAccountsSelectedTabContainerClick={
          onAccountsSelectedTabContainerClick
        }
        onFrameContainerClick={onFrameContainerClick}
        path = {useLocation().pathname}
      />
    </div>
  );
};

export default Social;
