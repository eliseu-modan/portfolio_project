import React, { useState, useEffect } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import Apprenticeship from "../../pages/Apprenticeship";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";
import { Button } from "antd";
import "../templates/Menu.css";

const MenuNavigation = (props) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  useEffect(() => {
    const hash = window.location.hash;
    switch (hash) {
      case "#/Project":
        setActiveButton("btnProjetos");
        break;
      case "#/apprenticeship":
        setActiveButton("btnAprendizado");
        break;
      case "#/Contact":
        setActiveButton("btnContato");
        break;
    }
  }, []);

  return (
    <div className="menu">
      <div id="space">
        <a
          className="custom-link"
          href="#Project"
          onClick={() => handleClick("btnProjetos")}
        >
          <Button
            id="custom-button"
            className={activeButton === "btnProjetos" ? "active" : ""}
          >
            Projetos
          </Button>
        </a>
      </div>
      <div id="space">
        <a
          className="custom-link"
          href="#Apprenticeship"
          onClick={() => handleClick("btnAprendizado")}
        >
          <Button
            id="custom-button"
            className={activeButton === "btnAprendizado" ? "active" : ""}
          >
            Aprendizado
          </Button>
        </a>
      </div>
      <div id="space">
        <a
          className="custom-link"
          href="#Contact"
          onClick={() => handleClick("btnContato")}
        >
          <Button
            id="custom-button"
            className={activeButton === "btnContato" ? "active" : ""}
          >
            Contato
          </Button>
        </a>
      </div>

      <HashRouter>
        <Switch>
          <Route path="/Apprenticeship" component={Apprenticeship} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Project" component={Project} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default MenuNavigation;
