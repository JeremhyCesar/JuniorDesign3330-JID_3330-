import "./PopularComposersContainer.css";

const PopularComposersContainer = () => {
  return (
    <div className="headline-group">
      <div className="headline1">
        <div className="popular-composers">Popular composers</div>
        <div className="see-all1">See all</div>
      </div>
      <div className="container">
        <div className="singer">
          <img className="photo-icon" alt="" src="/photo@2x.png" />
          <div className="james-adam">James adam</div>
        </div>
        <div className="singer">
          <img className="photo-icon" alt="" src="/photo1@2x.png" />
          <div className="james-adam">Nugroho alis</div>
        </div>
        <div className="singer">
          <img className="photo-icon" alt="" src="/photo2@2x.png" />
          <div className="james-adam">Maria Srinirani</div>
        </div>
        <div className="singer">
          <img className="photo-icon" alt="" src="/photo3@2x.png" />
          <div className="james-adam">Yoshi Jundiara</div>
        </div>
      </div>
    </div>
  );
};

export default PopularComposersContainer;
