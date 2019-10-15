import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <div>
          <p>Desenvolvido por Erislandio Soares</p>
        </div>
        <div>
          <ul>
            <li id="linkedin">
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/erislandio-soares-a08816141/"
                target="_blank"
              >
                linkedin
              </a>
            </li>
            <li id="github">
              <a
                rel="noopener noreferrer"
                href="https://github.com/Erislandio/"
                target="_blank"
              >
                git
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
