import React, { useRef, useEffect, useState } from "react";
import { Card, Button } from "antd";
import "../pages/Aprendizado.css";
import { Tooltip } from "antd";
import { Divider,Alert } from "antd";
import JS from "../componentes/imgs/image.png";
import C from "../componentes/imgs/c-.png";
import JAVA from "../componentes/imgs/java.png";
import REACT from "../componentes/imgs/React.png";
import AntdIcon from "../componentes/imgs/antdDesign.png";
import WebSocketicon from "../componentes/imgs/websocketIcon.jpg";
import css from "../componentes/imgs/css-3.png";
import html from "../componentes/imgs/html-5.png";
import json from "../componentes/imgs/json.png";
import Express from "../componentes/imgs/nodeExpress.jpg";
import Prisma from "../componentes/imgs/prismaIcon.png";
import sequelizeIcon from "../componentes/imgs/sequelizeIcon.png";
import mysqlIcon from "../componentes/imgs/mysqlIcon.jpg";
import DBeaverIcon from "../componentes/imgs/DBeaverIcon.jpg";
import BcryptIcon from "../componentes/imgs/BcryptIcon.jpeg";
import JsonWebTokenIcon from "../componentes/imgs/jsonWebIcon.jpg";
import TypeScript from "../componentes/imgs/typescript.png";
import AnsibleIcon from "../componentes/imgs/ansibleIcon.jpg";
import Docker from "../componentes/imgs/Docker-1.png";
import Compose from "../componentes/imgs/compose.png";
import Nexus from "../componentes/imgs/nexus.png";
import Jenkins from "../componentes/imgs/jenkins.png";
import Kubernets from "../componentes/imgs/Kubernetes-Logo.png";
import SonarQube from "../componentes/imgs/SonarQube.png";
import VirtualBox from "../componentes/imgs/virtualBox.png";
import cleanCode from "../componentes/imgs/cleanCode.jpg";
import TDD from "../componentes/imgs/TDD_1.jpg";
import Scrum from "../componentes/imgs/Scrum-Process1.webp";
import Kanban from "../componentes/imgs/kanbann.png";
import vitest from "../componentes/imgs/vitest.png";
import git from "../componentes/imgs/Git_icon.png";
import UI from "../componentes/imgs/ui.png";
import FIgma from "../componentes/imgs/figma.png";
import UML from "../componentes/imgs/uml.jpeg";
import MVC from "../componentes/imgs/MVC.png";
import RestfullApi from "../componentes/imgs/rest.jpg";

function Aprendizado() {
  const backEndRef = useRef(null);
  const devOpsRef = useRef(null);
  const qualityRef = useRef(null);

  const [scrollingBackEnd, setScrollingBackEnd] = useState(false);
  const [scrollingDevOps, setScrollingDevOps] = useState(false);
  const [scrollingQuality, setScrollingQuality] = useState(false);

  const [animationFrameBackEnd, setAnimationFrameBackEnd] = useState(null);
  const [animationFrameDevOps, setAnimationFrameDevOps] = useState(null);
  const [animationFrameQuality, setAnimationFrameQuality] = useState(null);
  const [alertVisible, setAlertVisible] = useState(true);

  const closeModalAlert = () => {
    setAlertVisible(false); 
  };
  useEffect(() => {
    const interval = setInterval(() => {
      closeModalAlert(); 
      clearInterval(interval); 
    }, 5000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);


  useEffect(() => {
    const scrollRight = (ref) => {
      const element = ref.current;
      if (element) {
        element.scrollLeft += 3;
      }
    };
    const animationScrollQuality = () => {
      if (scrollingQuality) {
        scrollRight(qualityRef);
        setAnimationFrameQuality(requestAnimationFrame(animationScrollQuality));
      }
    };
    const animateScrollBackEnd = () => {
      if (scrollingBackEnd) {
        scrollRight(backEndRef);
        setAnimationFrameBackEnd(requestAnimationFrame(animateScrollBackEnd));
      }
    };

    const animateScrollDevOps = () => {
      if (scrollingDevOps) {
        scrollRight(devOpsRef);
        setAnimationFrameDevOps(requestAnimationFrame(animateScrollDevOps));
      }
    };
    if (scrollingBackEnd) {
      setAnimationFrameBackEnd(requestAnimationFrame(animateScrollBackEnd));
    } else {
      cancelAnimationFrame(animationFrameBackEnd);
    }

    if (scrollingDevOps) {
      setAnimationFrameDevOps(requestAnimationFrame(animateScrollDevOps));
    } else {
      cancelAnimationFrame(animationFrameDevOps);
    }
    if (scrollingQuality) {
      setAnimationFrameQuality(requestAnimationFrame(animationScrollQuality));
    } else {
      cancelAnimationFrame(animationFrameQuality);
    }

    return () => {
      cancelAnimationFrame(animationFrameBackEnd);
      cancelAnimationFrame(animationFrameDevOps);
      cancelAnimationFrame(animationFrameQuality);
    };
  }, [scrollingBackEnd, scrollingDevOps, scrollingQuality]);

  const handleScrollBackEndClick = () => {
    setScrollingBackEnd(!scrollingBackEnd);
  };

  const handleScrollDevOpsClick = () => {
    setScrollingDevOps(!scrollingDevOps);
  };
  const handleScrollQualityClick = () => {
    setScrollingQuality(!scrollingQuality);
  };

  return (
    <div className="position">
      {alertVisible && (
        <Alert
          message="ALERTA !! "
          description="Clique sobre a imagem para mais detalhes da Tecnologia selecionada"
          type="info"
          showIcon
          onClose={closeModalAlert} 
          style={{ zIndex: "9" }}
        />
      )}
      <Card className="cardLinguagens">
        <div style={{ height: "180px", fontSize: "16px" }}>
          <b>Linguagens de Programação</b>
          <Divider style={{ background: "#e6e6e6" }} />
        </div>

        <div>
          <Tooltip title="JavaScript foi utilizado em aplicações empresariais, tanto no frontend quanto no backend.">
            <img className="imgJS" src={JS} height={80} width={80} />
          </Tooltip>
          <Tooltip title="C é uma linguagem que aprendi durante minha formação, utilizada para entender os conceitos básicos de programação e algoritmos.">
            <img className="imgC" src={C} height={80} width={80} />
          </Tooltip>
          <Tooltip title="Java foi utilizado na faculdade para realizar projetos orientados a objetos.">
            <img className="imgJAVA" src={JAVA} height={80} width={80} />
          </Tooltip>
          <Tooltip title="Durante minha atuação na empresa, fui responsável pela migração de vários projetos de JavaScript para TypeScript. Este processo foi essencial para melhorar a qualidade do código, a manutenção e a escalabilidade das nossas aplicações.">
            <img
              className="imgTypeScript"
              src={TypeScript}
              height={80}
              width={80}
              />
          </Tooltip>
        </div>
      </Card>
      <Card className="cardFrontEnd">
        <div style={{ height: "180px", fontSize: "20px" }}>
          <b>Front-End</b>
          <Divider style={{ background: "#e6e6e6" }} />
        </div>
        <Tooltip title="Utilizei o React como principal framework para o desenvolvimento de softwares no frontend voltados para automação. Com o React, pude criar interfaces de usuário altamente dinâmicas e responsivas, garantindo uma experiência fluida para os usuários finais. A abordagem de componentização do React facilitou a criação de componentes reutilizáveis, permitindo uma maior modularidade e facilidade na manutenção do código.">
          <img className="imgReact" src={REACT} height={80} width={80} />
        </Tooltip>
        <Tooltip title="Implementei o Ant Design como nossa biblioteca de componentes UI para o desenvolvimento de interfaces de usuário consistentes e visualmente atraentes. Com uma ampla variedade de componentes prontos para uso, como botões, formulários, tabelas e muito mais, o Ant Design nos proporcionou uma base sólida para construir interfaces de usuário intuitivas e eficientes.">
          <img className="imgAntdIcon" src={AntdIcon} height={90} width={90} />
        </Tooltip>
        <Tooltip title="Implementamos WebSockets para comunicação em tempo real em nossa aplicação. Ao utilizar WebSockets, conseguimos estabelecer uma conexão bidirecional entre o cliente e o servidor, permitindo a troca instantânea de dados e atualizações em tempo real. Isso foi especialmente útil em cenários onde precisávamos manter os usuários sincronizados com as últimas informações do sistema sem a necessidade de recarregar a página">
          <img
            className="imgWebSocket"
            src={WebSocketicon}
            height={75}
            width={100}
            />
        </Tooltip>
        <Tooltip title="Utilizei CSS para estilizar e dar forma às nossas interfaces de usuário. Através do CSS, conseguimos criar layouts atraentes e responsivos, aplicar estilos visuais e personalizar a aparência dos elementos da nossa aplicação. Utilizamos técnicas modernas de CSS, como Flexbox e Grid, para criar layouts flexíveis e eficientes, garantindo uma experiência consistente em diferentes dispositivos e tamanhos de tela">
          <img className="imgCSS" src={css} height={90} width={90} />
        </Tooltip>
        <Tooltip title="Utilizamos HTML como a estrutura básica para desenvolver nossas páginas da web. O HTML nos permitiu criar uma estrutura semântica e organizada para nossas interfaces de usuário, fornecendo a base para o conteúdo e a hierarquia dos elementos na página. Utilizamos tags HTML adequadas para marcar diferentes tipos de conteúdo, como títulos, parágrafos, listas e formulários, garantindo uma estrutura lógica e acessível para nossos usuários.">
          <img className="imgHtml" src={html} height={90} width={90} />
        </Tooltip>
        <Tooltip
          title="No frontend das nossas aplicações em React, o JSON foi fundamental para:
          Enviar e receber dados entre componentes React.
          Integrar informações do backend nas aplicações.
          Atualizar dinamicamente o conteúdo das páginas com dados JSON recebidos em respostas de requisições.
          Facilitar a manipulação e processamento de dados estruturados, garantindo uma experiência de usuário dinâmica e responsiva."
          >
          <img className="imgJson" src={json} height={90} width={87} />
        </Tooltip>
      </Card>
      <Card className="cardBackEnd" ref={backEndRef}>
        <div style={{ height: "190px", fontSize: "20px" }}>
          <Button
            id="buttonBackEnd"
            onClick={handleScrollBackEndClick}
            style={{
              position: "absolute",
              top: "10px",
              left: "84%",
              top: "10%",
            }}
            >
            <b>{scrollingBackEnd ? "Parar Rolagem" : "Iniciar Rolagem"}</b>
          </Button>
          <b>Back-End</b>
          <Divider style={{ background: "#e6e6e6" }} />
        </div>
        <Tooltip title="No meu trabalho de desenvolvimento, utilizei Node.js em conjunto com o Express para criar a infraestrutura backend das aplicações web. Node.js é uma plataforma de tempo de execução baseada no motor V8 do Chrome que permite a execução de código JavaScript no servidor. O Express, por sua vez, é um framework minimalista para Node.js que simplifica a construção de servidores web e APIs RESTful.">
          <img className="imgExpress" src={Express} height={90} width={120} />
        </Tooltip>
        <Tooltip title="utilizei o Prisma como ORM para gerenciar e interagir com bancos de dados de maneira eficiente e intuitiva. Prisma é uma ferramenta moderna que simplifica a manipulação de dados, oferecendo uma experiência de desenvolvimento fluida e consistente.">
          <img className="imgPrisma" src={Prisma} height={90} width={105} />
        </Tooltip>
        <Tooltip title="utilizei o Sequelize como ORM para gerenciar e interagir com bancos de dados relacionais de maneira eficiente. O Sequelize é uma ferramenta robusta que facilita a manipulação de dados, abstraindo a complexidade das consultas SQL e permitindo um desenvolvimento mais rápido e seguro.">
          <img
            className="imgSequelize"
            src={sequelizeIcon}
            height={100}
            width={130}
            />
        </Tooltip>
        <Tooltip title="No meu trabalho de desenvolvimento, utilizei o MySQL como sistema de gerenciamento de banco de dados para armazenar e gerenciar dados de forma eficiente e escalável. MySQL é uma escolha popular devido à sua robustez, facilidade de uso e desempenho.">
          <img
            className="imgMysqlIcon"
            src={mysqlIcon}
            height={120}
            width={110}
            />
        </Tooltip>
        <Tooltip title="No meu trabalho de desenvolvimento, utilizei o DBeaver como uma ferramenta de gerenciamento de banco de dados para facilitar a interação e administração de diversos sistemas de banco de dados. O DBeaver oferece uma interface gráfica poderosa e intuitiva que simplifica a execução de tarefas de gerenciamento e consulta de dados.">
          <img
            className="imgDbeaver"
            src={DBeaverIcon}
            height={110}
            width={140}
            />
        </Tooltip>
        <Tooltip title="utilizei o bcrypt para garantir a segurança das senhas dos usuários. O bcrypt é uma biblioteca poderosa para hashing de senhas, amplamente utilizada devido à sua capacidade de gerar hashes seguros e de ser resistente a ataques de força bruta.">
          <img
            className="imgBcryptIcon"
            src={BcryptIcon}
            height={90}
            width={110}
            />
        </Tooltip>
        <Tooltip title="Durante minha atuação na empresa, utilizei JSON Web Tokens (JWT) para implementar autenticação e controle de acesso em nossas aplicações web. JWT é uma solução segura e eficiente para autenticação de usuários, fornecendo uma forma escalável e confiável de gerenciamento de sessões.">
          <img
            className="imgJsonWeb"
            src={JsonWebTokenIcon}
            height={90}
            width={200}
            />
        </Tooltip>
        <Tooltip title="Tenho experiência sólida na utilização do padrão MVC (Model-View-Controller) para desenvolvimento backend, facilitando a separação de responsabilidades, a manutenção e a escalabilidade das aplicações. Trabalhei em projetos onde implementei o MVC para organizar o código de forma eficiente e promover uma arquitetura limpa e sustentável..">
          <img className="imgMVC" src={MVC} height={150} width={200} />
        </Tooltip>
        {/* <Tooltip title="Tenho ampla experiência no desenvolvimento de APIs RESTful utilizando Node.js e MySQL, facilitando a criação de serviços backend eficientes e escaláveis. Minhas responsabilidades incluíram a definição de endpoints, a implementação de lógica de negócios, a interação com bancos de dados MySQL e a garantia de segurança e desempenho da API.">
          <img
          style={{ position: "absolute", left: "1260px", top: "60px" }}
          src={RestfullApi}
          height={140}
          width={220}
          />
          </Tooltip> */}
      </Card>
      <Card className="cardDevOps" ref={devOpsRef}>
        <div style={{ height: "250px", fontSize: "20px" }}>
          <Button
            id="buttondevOps"
            onClick={handleScrollDevOpsClick}
            style={{
              position: "absolute",
              top: "10px",
              left: "84%",
              top: "10%",
            }}
            >
            <b>{scrollingDevOps ? "Parar Rolagem" : "Iniciar Rolagem"}</b>
          </Button>
          <b>DevOps</b>
          <Divider style={{ background: "#e6e6e6" }} />
        </div>
        <Tooltip title="Tenho uma experiência sólida na utilização de Ansible para automação e gerenciamento de infraestrutura em ambientes DevOps. Minhas responsabilidades incluíram a criação e manutenção de playbooks, a configuração de servidores e a implementação de pipelines de CI/CD, resultando em melhorias significativas na eficiência e na consistência das operações.">
          <img
            className="imgAnsible"
            src={AnsibleIcon}
            height={120}
            width={150}
            />
        </Tooltip>
        <Tooltip title="Tenho uma experiência robusta na utilização de Docker para a containerização de aplicações e gestão de ambientes em máquinas virtuais (VMs) no contexto DevOps. Minhas responsabilidades incluíram a criação de imagens Docker, orquestração de containers e implementação de pipelines de CI/CD, resultando em ambientes mais ágeis, escaláveis e consistentes.">
          <img className="imgDocker" src={Docker} height={110} width={225} />
        </Tooltip>
        <Tooltip title="Tenho ampla experiência na utilização de Docker Compose para orquestrar contêineres em ambientes de máquinas virtuais (VMs), melhorando significativamente a eficiência, a escalabilidade e a consistência das aplicações. Minhas responsabilidades incluíram a criação e manutenção de arquivos docker-compose.yml, a configuração de ambientes de desenvolvimento e produção, e a integração com pipelines de CI/CD.">
          <img className="imgCompose" src={Compose} height={120} width={235} />
        </Tooltip>
        <Tooltip title="Tenho experiência significativa na utilização do Nexus Repository Manager para armazenar e gerenciar contêineres Docker, melhorando a organização e a segurança dos artefatos em nossos pipelines de CI/CD. Minhas responsabilidades incluíram a configuração do Nexus para repositórios Docker, a automação de uploads e a gestão de versões e permissões.">
          <img className="imgNexus" src={Nexus} height={120} width={120} />
        </Tooltip>
        <Tooltip title="Tenho vasta experiência na utilização do Jenkins para automação de pipelines de integração contínua e entrega contínua (CI/CD). Minhas responsabilidades incluíram a configuração e manutenção de pipelines, a integração com outras ferramentas de DevOps e a automação de processos de build, teste e deployment, resultando em entregas mais rápidas e confiáveis.">
          <img className="imgJenkins" src={Jenkins} height={100} width={150} />
        </Tooltip>
        <Tooltip title="Tenho vasta experiência na utilização de Kubernetes para orquestração de contêineres e gestão de ambientes de desenvolvimento, testes e produção. Minhas responsabilidades incluíram a configuração e manutenção de clusters Kubernetes, automação de deploys, monitoramento e escalabilidade de aplicações.">
          <img
            className="imgKubernets"
            src={Kubernets}
            height={90}
            width={140}
            />
        </Tooltip>
        <Tooltip title="Tenho experiência significativa na utilização do SonarQube para análise estática de código, assegurando a qualidade e a segurança das aplicações. Minhas responsabilidades incluíram a configuração e manutenção do SonarQube, integração com pipelines de CI/CD e a implementação de políticas de qualidade de código.">
          <img className="imgSonar" src={SonarQube} height={100} width={130} />
        </Tooltip>
        <Tooltip title="Tenho ampla experiência na utilização do VirtualBox para criação e gestão de ambientes de virtualização, facilitando o desenvolvimento, testes e deployment de aplicações. Minhas responsabilidades incluíram a configuração de VMs, automação de provisionamento e integração com outras ferramentas DevOps.">
          <img
            className="imgVirtualBox"
            src={VirtualBox}
            height={90}
            width={170}
            />
        </Tooltip>
      </Card>
      <Card className="cardQualitySoftware" ref={qualityRef}>
        <div style={{ height: "350px", fontSize: "20px" }}>
          <Button
            id="buttonQuality"
            onClick={handleScrollQualityClick}
            style={{
              position: "absolute",
              top: "10px",
              left: "84%",
              top: "10%",
            }}
            >
            <b>{scrollingQuality ? "Parar Rolagem" : "Iniciar Rolagem"}</b>
          </Button>
          <b>Qualidade de Software</b>
          <Divider style={{ background: "#e6e6e6" }} />
        </div>
        <Tooltip title="Tenho uma sólida experiência na aplicação dos princípios de Clean Code no desenvolvimento de software, garantindo que o código seja legível, mantível e eficiente. Essas práticas têm sido fundamentais para a criação de soluções robustas e de alta qualidade em projetos complexos.">
          <img
            className="imgCleanCode"
            src={cleanCode}
            height={120}
            width={110}
            />
        </Tooltip>
        <Tooltip title="Tenho experiência significativa na prática de Desenvolvimento Orientado a Testes (TDD), o que me permitiu escrever código mais confiável e fácil de manter. A abordagem TDD ajudou a melhorar a qualidade do software, reduzir bugs e aumentar a eficiência no desenvolvimento.">
          <img className="imgTDD" src={TDD} height={145} width={280} />
        </Tooltip>
        <Tooltip title="Tenho uma sólida experiência na aplicação da metodologia ágil Scrum em projetos de desenvolvimento de software. A utilização de Scrum permitiu melhorar a colaboração da equipe, aumentar a produtividade e garantir entregas de alta qualidade de maneira contínua e incremental.">
          <img className="imgScrum" src={Scrum} height={145} width={280} />
        </Tooltip>

        <Tooltip title="Tenho experiência na aplicação da metodologia Kanban para gerenciamento de projetos de desenvolvimento de software, o que resultou em uma melhoria contínua no fluxo de trabalho, maior visibilidade do progresso e aumento da eficiência da equipe. A adoção de Kanban permitiu ajustar rapidamente as prioridades e melhorar a entrega contínua de valor.">
          <img className="imgKanban" src={Kanban} height={120} width={280} />
        </Tooltip>
        <Tooltip title="Tenho experiência significativa na utilização do Vitest para escrever e executar testes em projetos JavaScript. O uso de Vitest me permitiu garantir a qualidade do código, melhorar a cobertura de testes e facilitar o desenvolvimento de software confiável e de alto desempenho.">
          <img className="imgVitest" src={vitest} height={110} width={250} />
        </Tooltip>
        <Tooltip title="Tenho ampla experiência no uso de Git como sistema de controle de versão, o que me permitiu gerenciar eficientemente o código-fonte, colaborar com a equipe de desenvolvimento e garantir a integridade e a rastreabilidade do histórico de projetos. A utilização de Git tem sido essencial para manter um fluxo de trabalho organizado e facilitado a integração contínua.">
          <img className="imgGit" src={git} height={110} width={150} />
        </Tooltip>
      </Card>

      <Card className="cardModelagem">
        <div style={{ height: "180px", fontSize: "18px" }}>
          <b>Modelagem de Software</b>
          <Divider style={{ background: "#e6e6e6" }} />
        </div>
        <Tooltip title="Tenho experiência sólida no design e desenvolvimento de interfaces de usuário (UI) e na criação de experiências de usuário (UX) envolventes e intuitivas. Minha abordagem se baseia na compreensão das necessidades dos usuários, na aplicação de princípios de design centrado no usuário e na utilização de ferramentas modernas para criar interfaces atrativas e funcionais.">
          <img className="imgUI" src={UI} height={120} width={110} />
        </Tooltip>
        <Tooltip title="Tenho experiência sólida no uso do Figma como ferramenta de design de interfaces, o que me permite criar layouts visuais atrativos, protótipos interativos e colaborar eficientemente com equipes multidisciplinares. Minha habilidade com o Figma me permite transformar conceitos em designs práticos e funcionais, contribuindo para o desenvolvimento de produtos digitais de alta qualidade.">
          <img className="imgFigma" src={FIgma} height={120} width={240} />
        </Tooltip>
        <Tooltip title="Tenho experiência sólida no uso da UML como uma linguagem padronizada para modelagem de sistemas, o que me permite visualizar, projetar e comunicar arquiteturas de software de forma clara e eficaz. Minha habilidade com UML tem sido fundamental para traduzir requisitos complexos em representações visuais compreensíveis, facilitando a colaboração entre equipes e garantindo o alinhamento entre stakeholders.">
          <img className="imgUML" src={UML} height={120} width={240} />
        </Tooltip>
      </Card>
    </div>
  );
}

export default Aprendizado;
