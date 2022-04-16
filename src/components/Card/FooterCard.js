import React from "react";
import in_logo from "../../imgs/Frame.png";

function FooterCard() {
  return (
    <div>
      <div className="footer">
        <div>
          <h3>Learn</h3>
          <br />
          <h4>Help center</h4>
          <h4>Join ZEN team</h4>
          <h4>Privacy Policy</h4>
          <h4>Cookies</h4>
          <h4>Terms of use</h4>
        </div>
        <div>
          <h3>Discover</h3>
          <br />
          <h4>For developers</h4>
          <h4>Apple Pay</h4>
          <h4>Apple Pay</h4>
        </div>
        <div>
          <h3>Offer</h3>
          <br />
          <h4>Business</h4>
          <h4>Personal</h4>
        </div>
        <div>
          <h3>Language</h3>
          <br />
          <h4>English</h4>
          <h4>Polish</h4>
        </div>
        <div>
          <h3>Follow us</h3>
          <br />
          <a href="https://ru.linkedin.com/">
            <img src={in_logo} alt="in" />
          </a>
        </div>
        <div>
          <h3>Contact</h3>
          <br />
          <h4>hello@zen.com</h4>
        </div>
      </div>
      <br />
    </div>
  );
}

export default FooterCard;
