import iconSuccess from "../assets/images/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleDismiss = () => {
    navigate("/");
  };

  return (
    <div className="success-container">
      <div className="success-content">
        <img
          src={iconSuccess}
          type="image/svg+xml"
          alt="success icon"
          className="success-image"
        />
        <h2 className="success-title text-preset-1">Thanks for subscribing!</h2>
        <p className="success-description text-preset-2-regular">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button
          className="dismiss-button text-preset-2-bold"
          onClick={handleDismiss}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
