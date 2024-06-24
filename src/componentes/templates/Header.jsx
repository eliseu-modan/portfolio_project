import React from "react";
import "./Header.css";
import Logo1 from "../imgs/Logo1.jpg";
import "../templates/Header.css";
import linkedin from "../imgs/linkedin.png";
import Facebook from "../imgs/iconFacebook.png";
import GitIcon from "../imgs/Git_icon.png";
import "../../main/App.css";
export default (props) => (
  <header className="header">
    <img
      style={{
        position: "absolute",
        left: "29%",
        top: "60px",
        width: "45%",
        borderRadius: "30px",
        opacity: "88%",
      }}
      src={Logo1}
      width={230}
    />
    <div className="nameOne">Engenheiro de Software</div>
    <div className="nameTwo">Desenvolvedor Full-Stack</div>
    <div className="nameTree">Especializado em DevOps</div>

    <a
      style={{ background: "rgb(27, 27, 27)" }}
      href="https://web.facebook.com/junior.modanesi?_rdc=1&_rdr"
    >
      <img id="icon_facebook" src={Facebook} width={25} />
    </a>
    <a
      style={{ background: "rgb(27, 27, 27)" }}
      href="https://github.com/eliseu-modan"
    >
      <img id="Git_icon" src={GitIcon} width={33} />{" "}
    </a>
    <a
      style={{ background: "rgb(27, 27, 27)" }}
      href="https://www.linkedin.com/in/eliseu-junior-b4801a1b6/"
    >
      <img id="icon_linkedin" src={linkedin} width={27} />
    </a>
  </header>
);
