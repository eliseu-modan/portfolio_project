import React from "react";
import "../pages/Projetos.css";
import { Card } from "antd";
import Portfolio from "../componentes/imgs/PORTFOLIO.png";
import GIT from "../componentes/imgs/Git_icon.png";
import Youtube from "../componentes/imgs/youtube-icon.png";
import addTask from "../componentes/imgs/addTask.png";
import Pipeline from "../componentes/imgs/pipeline.png";

function prop() {
  return (
    <div className="position">
      <Card className="card">
        <div style={{ height: "80px", position: "relative", fontSize: "20px" }}>
          <b>Portfolio</b>
          <a href="https://github.com/eliseu-modan/Projeto_Portfolio">
            <img className="git" src={GIT} height={50} width={50} />
          </a>
          <a href="https://youtu.be/JR-AiUjV3UY">
            <img className="youtube" src={Youtube} height={50} width={50} />
          </a>
        </div>
        <img
          className="imgPortfolio"
          src={Portfolio}
          height={325}
          width={670}
        />
      </Card>
      <Card className="card">
        <div style={{ height: "80px", height: "429px", fontSize: "20px" }}>
          <b>Sistema de Tarefas</b>
          {/* <a href="https://github.com/eliseu-modan/Projeto-Portfolio">
            <img
              src={GIT}
              height={50}
              width={50}
              style={{ position: "absolute", left: "88%" }}
            />
          </a>
          <img
            src={Youtube}
            height={50}
            width={50}
            style={{ position: "absolute", left: "80%" }}
          /> */}
          <img className="imgSistemas" src={addTask} height={325} width={700} />
        </div>
      </Card>
      <Card className="card">
        <div style={{ height: "80px", height: "429px", fontSize: "20px" }}>
          <b>Pipeline Devops</b>
          {/* <a href="https://github.com/eliseu-modan/Projeto-Portfolio">
            <img
              src={GIT}
              height={50}
              width={50}
              style={{ position: "absolute", left: "88%" }}
            />
          </a>
          <img
            src={Youtube}
            height={50}
            width={50}
            style={{ position: "absolute", left: "80%" }}
          /> */}
          <img
          className="imgPipeline"
            style={{ position: "relative", top: "30px", left: "10px" }}
            src={Pipeline}
            height={325}
            width={670}
          />
        </div>
      </Card>
    </div>
  );
}
export default prop;
