import "./FormContainer1.css";

const FormContainer1 = () => {
  return (
    <div className="dinner">
      <div className="dinner-child" />
      <b className="todays-dinner">Today’s Dinner:</b>
      <img className="burger-icon" alt="" src="/burger@2x.png" />
      <img className="french-fries-icon" alt="" src="/frenchfries@2x.png" />
      <img className="can-of-cola" alt="" src="/can-of-cola@2x.png" />
      <b className="burger">Burger</b>
      <b className="fries">Fries</b>
      <b className="soda">Soda</b>
    </div>
  );
};

export default FormContainer1;
