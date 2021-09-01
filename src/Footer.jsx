import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faQuora
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-header">Wanna Connect ?</div>
      <ul className="social-links">
        <li className="links">
          <a href="https://www.linkedin.com/in/vinit-kanse-96838b184/">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </li>
        <li className="links">
          <a href="https://github.com/vinc3nati">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="links">
          <a href="https://www.quora.com/profile/Vinit-Kanse">
            {" "}
            <FontAwesomeIcon icon={faQuora} />{" "}
          </a>
        </li>
      </ul>
    </footer>
  );
}
