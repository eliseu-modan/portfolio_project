import React from "react";
import "./Header.css";
import "../templates/Header.css";
import Logo from "../imgs/Logo1.jpg.png";
import IconLinkedin from "../imgs/linkedin.png";
import IconFacebook from "../imgs/iconFacebook.png";
import IconGit from "../imgs/Git_icon.png";
export default (props) => (
  <header className="header">
    <img className="logo" src={Logo} width={"50%"} />
    <div className="descriptionOne">Engenheiro de Software</div>
    <div className="descriptionTwo">Desenvolvedor Full-Stack</div>
    <div className="descriptionTree">Especializado em DevOps</div>

    <a
      style={{ background :"rgb(4, 4, 63)" }}
      href="https://web.facebook.com/junior.modanesi?_rdc=1&_rdr"
    >
      <img id="icon_facebook" src={IconFacebook} width={25} />
    </a>
    <a
      style={{ background :"rgb(4, 4, 63)" }}
      href="https://github.com/eliseu-modan"
    >
      <img id="Git_icon" src={IconGit} width={33} />{" "}
    </a>
    <a
      style={{ background :"rgb(4, 4, 63)" }}
      href="https://www.linkedin.com/in/eliseu-junior-b4801a1b6/"
    >
      <img id="icon_linkedin" src={IconLinkedin} width={27} />
    </a>
  </header>
);
