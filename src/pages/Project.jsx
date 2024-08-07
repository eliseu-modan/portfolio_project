import React from "react";
import "../pages/Project.css";
import { Card, Carousel } from "antd";
import Portfolio from "../componentes/imgs/PORTFOLIO1.png";
import Portfolio2 from "../componentes/imgs/PORTFOLIO2.png";
import Portfolio3 from "../componentes/imgs/PORTFOLIO3.png";
import Portfolio4 from "../componentes/imgs/PORTFOLIO4.png";

import GIT from "../componentes/imgs/Git_icon.png";
import Youtube from "../componentes/imgs/youtube-icon.png";
import addTask from "../componentes/imgs/addTask.png";
import Pipeline from "../componentes/imgs/pipeline.png";
import SystemTask1 from "../componentes/imgs/SystemTarefa1.png";
import SystemTask2 from "../componentes/imgs/SystemTarefa2.png";
import SystemTask3 from "../componentes/imgs/SystemTarefa3.png";
import SystemTask4 from "../componentes/imgs/SystemTarefa4.png";
import SystemTask5 from "../componentes/imgs/SystemTarefa5.png";
import SystemSales1 from "../componentes/imgs/SystemSales1.png";
import SystemSales2 from "../componentes/imgs/SystemSales2.png";
import SystemSales3 from "../componentes/imgs/SystemSales3.png";
import SystemSales4 from "../componentes/imgs/SystemSales4.png";
import SystemSales5 from "../componentes/imgs/SystemSales5.png";
import SystemSales6 from "../componentes/imgs/SystemSales6.png";
import SystemSales7 from "../componentes/imgs/SystemSales7.png";
import SystemSales8 from "../componentes/imgs/SystemSales8.png";

function Project() {
  return (
    <div className="position">
      <Card className="card">
        <div className="editCardPortfolio">
          <b>Portfolio</b>
          <a href="https://github.com/eliseu-modan/Projeto_Portfolio">
            <img
              className="git"
              src={GIT}
              height={50}
              width={50}
              alt="GitHub"
            />
          </a>
          <a href="https://youtu.be/JR-AiUjV3UY">
            <img
              className="youtube"
              src={Youtube}
              height={50}
              width={50}
              alt="YouTube"
            />
          </a>
          <Carousel dots={true} autoplay>
          <div>
            <img
              className="imgSistemas"
              src={Portfolio}
              alt="System Task 1"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={Portfolio2}
              alt="System Task 2"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={Portfolio3}
              alt="System Task 3"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={Portfolio4}
              alt="System Task 4"
            />
          </div>
        </Carousel>
        </div>
     
      </Card>
      <Card className="card">
        <div style={{ height: "80px", fontSize: "20px" }}>
          <b>Sistema de Tarefas</b>
        </div>
        <Carousel dots={true} autoplay>
          <div>
            <img
              className="imgSistemas"
              src={SystemTask5}
              alt="System Task 1"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemTask2}
              alt="System Task 2"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemTask3}
              alt="System Task 3"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemTask4}
              alt="System Task 4"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemTask1}
              alt="System Task 5"
            />
          </div>
        </Carousel>
      </Card>
      <Card className="card">
        <div style={{ height: "80px", fontSize: "20px" }}>
          <b>Sistema de Vendas</b>
        </div>
        <Carousel dots={true} autoplay>
          <div>
            <img
              className="imgSistemas"
              src={SystemSales1}
              alt="System Task 1"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemSales2}
              alt="System Task 2"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemSales3}
              alt="System Task 3"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemSales4}
              alt="System Task 4"
            />
          </div>
          <div>
            <img
              className="imgSistemas"
              src={SystemSales5}
              alt="System Task 5"
            />
          </div>{" "}
          <div>
            <img
              className="imgSistemas"
              src={SystemSales6}
              alt="System Task 5"
            />
          </div>{" "}
          <div>
            <img
              className="imgSistemas"
              src={SystemSales7}
              alt="System Task 5"
            />
          </div>{" "}
          <div>
            <img
              className="imgSistemas"
              src={SystemSales8}
              alt="System Task 5"
            />
          </div>
        </Carousel>
      </Card>
      <Card className="card">
        <div style={{ height: "80px", fontSize: "20px" }}>
          <b>Pipeline Devops</b>
        </div>
        <img
          className="imgPipeline"
          style={{ position: "relative", top: "30px", left: "10px" }}
          src={Pipeline}
          height={325}
          width={670}
          alt="Pipeline"
        />
      </Card>
    </div>
  );
}

export default Project;
