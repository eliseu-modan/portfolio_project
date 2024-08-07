// Project.js
import React from 'react';
import "../pages/Project.css";
import { Card, Carousel } from 'antd';
import Portfolio from '../componentes/imgs/PORTFOLIO1.png';
import Portfolio2 from '../componentes/imgs/PORTFOLIO2.png';
import Portfolio3 from '../componentes/imgs/PORTFOLIO3.png';
import Portfolio4 from '../componentes/imgs/PORTFOLIO4.png';

import GIT from '../componentes/imgs/Git_icon.png';
import Youtube from '../componentes/imgs/youtube-icon.png';
import SystemTask1 from '../componentes/imgs/SystemTarefa1.png';
import SystemTask2 from '../componentes/imgs/SystemTarefa2.png';
import SystemTask3 from '../componentes/imgs/SystemTarefa3.png';
import SystemTask4 from '../componentes/imgs/SystemTarefa4.png';
import SystemTask5 from '../componentes/imgs/SystemTarefa5.png';
import SystemSales1 from '../componentes/imgs/SystemSales1.png';
import SystemSales2 from '../componentes/imgs/SystemSales2.png';
import SystemSales3 from '../componentes/imgs/SystemSales3.png';
import SystemSales4 from '../componentes/imgs/SystemSales4.png';
import SystemSales5 from '../componentes/imgs/SystemSales5.png';
import SystemSales6 from '../componentes/imgs/SystemSales6.png';
import SystemSales7 from '../componentes/imgs/SystemSales7.png';
import SystemSales8 from '../componentes/imgs/SystemSales8.png';

import ZoomableImage from '../componentes/constants/zoomAbleImage'; // Certifique-se de que o caminho está correto

function Project() {
  return (
    <div className="position">
      <Card className="card">
        <div style={{ height: '80px', fontSize: '20px' }}>
          <b>Sistema de Tarefas</b>
        </div>
        <Carousel dots={true} autoplay>
          <div>
            <ZoomableImage src={SystemTask5} alt="System Task 1" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemTask2} alt="System Task 2" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemTask3} alt="System Task 3" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemTask4} alt="System Task 4" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemTask1} alt="System Task 5" width="100%" />
          </div>
        </Carousel>
      </Card>

      <Card className="card">
        <div style={{ height: '80px', fontSize: '20px' }}>
          <b>Sistema de Vendas</b>
        </div>
        <Carousel dots={true} autoplay>
          <div>
            <ZoomableImage src={SystemSales1} alt="System Sales 1" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemSales2} alt="System Sales 2" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemSales3} alt="System Sales 3" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemSales4} alt="System Sales 4" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemSales5} alt="System Sales 5" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemSales6} alt="System Sales 6" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemSales7} alt="System Sales 7" width="100%" />
          </div>
          <div>
            <ZoomableImage src={SystemSales8} alt="System Sales 8" width="100%" />
          </div>
        </Carousel>
      </Card>

      <Card className="card">
        <div className="editCardPortfolio" style={{ fontSize: '20px' }}>
          <b>Portfolio</b>
          <a  href="https://github.com/eliseu-modan/Projeto_Portfolio">
            <img className='git' src={GIT} alt="GitHub" width={50} />
          </a>
          <a  href="https://youtu.be/JR-AiUjV3UY">
            <img  className='youtube' src={Youtube} alt="YouTube" width={50} />
          </a>
          <Carousel dots={true} autoplay>
            <div>
              <ZoomableImage src={Portfolio} alt="Portfolio 1" width="100%" />
            </div>
            <div>
              <ZoomableImage src={Portfolio2} alt="Portfolio 2" width="100%" />
            </div>
            <div>
              <ZoomableImage src={Portfolio3} alt="Portfolio 3" width="100%" />
            </div>
            <div>
              <ZoomableImage src={Portfolio4} alt="Portfolio 4" width="100%" />
            </div>
          </Carousel>
        </div>
      </Card>
    </div>
  );
}

export default Project;
