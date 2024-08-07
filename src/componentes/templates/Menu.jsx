import React, { useState, useEffect } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Apprenticeship from "../../pages/Apprenticeship";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";
import CartaComponent from "../../pages/cart";
import { Button } from "antd";
import "../templates/Menu.css";

const MenuNavigation = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isCartaOpen, setIsCartaOpen] = useState(false);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleCartaOpen = () => {
    setIsCartaOpen(true);
  };

  useEffect(() => {
    const hash = window.location.hash;
    switch (hash) {
      case "#/Project":
        setActiveButton("btnProjetos");
        break;
      case "#/Apprenticeship":
        setActiveButton("btnAprendizado");
        break;
      case "#/Contact":
        setActiveButton("btnContato");
        break;
      default:
        setActiveButton(null);
    }
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: 20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <HashRouter>
      <div>
        {!isCartaOpen && <CartaComponent onOpen={handleCartaOpen} />}
        {isCartaOpen && (
          <div className="editMenu">
            <div className="menu">
              <div id="space">
                <a
                  className="custom-link"
                  href="#/Project"
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
                  href="#/Apprenticeship"
                  onClick={() => handleClick("btnAprendizado")}
                >
                  <Button
                    id="custom-button"
                    className={
                      activeButton === "btnAprendizado" ? "active" : ""
                    }
                  >
                    Aprendizado
                  </Button>
                </a>
              </div>
              <div id="space">
                <a
                  className="custom-link"
                  href="#/Contact"
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
              <div id="space" className="dowload">
                <a href="/pdf/desenevolvedor Junior-Eliseu.pdf" download>
                  <Button style={{ borderColor: "black" }}> 
                 Baixar Curriculo
                  </Button>
                </a>
              </div>
            </div>

            <Route
              render={({ location }) => (
                <AnimatePresence mode="wait">
                  <Switch location={location} key={location.pathname}>
                    <Route path="/Apprenticeship">
                      <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Apprenticeship />
                      </motion.div>
                    </Route>
                    <Route path="/Contact">
                      <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Contact />
                      </motion.div>
                    </Route>
                    <Route path="/Project">
                      <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Project />
                      </motion.div>
                    </Route>
                    <Redirect to="/Project" />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </div>
        )}
      </div>
    </HashRouter>
  );
};

export default MenuNavigation;
