import "./App.css";
import React from "react";
import Cabecalho from "../componentes/templates/Header";
import Apresentacao from "../componentes/templates/Apresentacao";
import Menu from "../componentes/templates/Menu";

import Projetos from "../pages/Projetos";
import { Layout, Flex } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#fff",
    width: "100%",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#",
    backgroundColor: "#fff",
  };
  const siderStyle = {
    textAlign: "center",
    minHeight: 120,
    left: "1px",
    height: "99.6%",
    lineHeight: "120px",
    color: "#000000",
    backgroundColor: "#00000",
    border: "solid 2px #000000",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#8c8c8",
    backgroundColor: "#c1c1c1",
    left: "20px",
    padding: "20px",
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(150% - 8px)",
    height: "710px",
  };
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Sider width="35.9%" style={siderStyle}>
          <Cabecalho />
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            {" "}
            <Menu />
          </Header>
          <Content style={contentStyle}></Content>
          <Footer style={footerStyle}>
            {" "}
            <Apresentacao />
          </Footer>
        </Layout>
      </Layout>
    </Flex>
  );
};
export default App;
