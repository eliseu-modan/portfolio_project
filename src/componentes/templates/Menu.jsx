import React, { useState, useEffect } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import Aprendizado from "../../pages/Aprendizado";
import Contato from "../../pages/Contato";
import Projetos from "../../pages/Projetos";
import { Button } from "antd";
import "../templates/Menu.css";

const Navigation = (props) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  useEffect(() => {
    const hash = window.location.hash;
    switch (hash) {
      // case '#/Home':
      // case '/':
      //   setActiveButton('btnInicio');
      //   break;
      case "#/Projetos":
        setActiveButton("btnProjetos");
        break;
      case "#/Aprendizado":
        setActiveButton("btnAprendizado");
        break;
      case "#/Contato":
        setActiveButton("btnContato");
        break;
    }
  }, []);

  return (
    <div className="menu">
      <div id="space">
        <a
          className="custom-link"
          href="#Projetos"
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
          href="#Aprendizado"
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
          href="#Contato"
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
          <Route path="/Aprendizado" component={Aprendizado} />
          <Route path="/Contato" component={Contato} />
          <Route path="/Projetos" component={Projetos} />
        </Switch>
      </HashRouter>
    </div>
  );
};


export default Navigation;
