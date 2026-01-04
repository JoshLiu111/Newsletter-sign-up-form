import { useNavigate } from "react-router-dom";
import { useState } from "react";

import imgDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import imgTablet from "../assets/images/illustration-sign-up-tablet.svg";
import imgMobile from "../assets/images/illustration-sign-up-mobile.svg";

import iconList from "../assets/images/icon-list.svg";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const isValidEmail = EMAIL_REGEX.test(email.trim());

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      setError("Valid email required");
      return;
    }
    setError("");
    navigate("/success", { state: { email: email.trim() } });
  };
  return (
    <div className="container">
      <h1 className="sr-only">Login page</h1>
      <div className="content">
        <section className="form-section">
          <div className="form-content">
            <h2 className="form-title text-preset-1">Stay updated!</h2>
            <p className="form-description text-preset-2-regular">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="check-list text-preset-2-regular">
              <div className="item">
                <img
                  className="item-image"
                  src={iconList}
                  alt="list icon"
                  type="image/svg+xml"
                />
                <p className="item-text text-preset-2-regular">
                  Product discovery and building what matters
                </p>
              </div>
              <div className="item">
                <img
                  className="item-image"
                  src={iconList}
                  alt="list icon"
                  type="image/svg+xml"
                />
                <p className="item-text text-preset-2-regular">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="item">
                <img
                  className="item-image"
                  src={iconList}
                  alt="list icon"
                  type="image/svg+xml"
                />
                <p className="item-text text-preset-2-regular">
                  And much more!
                </p>
              </div>
            </div>
            <form className="email-form" onSubmit={handleSubmit} noValidate>
              <div className="email-header">
                <label htmlFor="email" className="email-address text-preset-3">
                  Email address
                </label>
                {error && (
                  <span className="email-address-invalid text-preset-3">
                    {error}
                  </span>
                )}
              </div>
              <input
                type="email"
                id="email"
                className={`email-input-field text-preset-2-regular ${
                  error ? "input-error" : ""
                }`}
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="button text-preset-2-bold">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </section>
        <section className="media">
          <picture className="picture">
            <source media="(max-width:768px)" srcSet={imgTablet} />
            <source media="(max-width:375px)" srcSet={imgMobile} />
            <img
              src={imgDesktop}
              type="image/svg+xml"
              alt="sign up image"
              className="sign-up-image"
            />
          </picture>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
