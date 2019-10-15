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
                href="https://www.linkedin.com/in/erislandio-soares-a08816141/"
                target="_blank"
              />
            </li>
            <li id="github">
              <a href="https://github.com/Erislandio/" target="_blank" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
