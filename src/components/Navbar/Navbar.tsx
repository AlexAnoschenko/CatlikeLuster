import { Col, Layout, Row } from "antd";
import { FC } from "react";
import "./styles.css";

const Navbar: FC = () => {
  return (
    <Layout.Header style={{ height: 64, background: "#e7e7e7" }}>
      <Row style={{ height: 64 }} align="middle" justify="space-between">
        <img
          src="https://i.ibb.co/bXW5r21/logo.png"
          alt="logo"
          style={{ width: 200 }}
        />
        <Row gutter={30} className="menu-text">
          <Col className="menu-text-item-main">MAIN</Col>
          <Col className="menu-text-item">PARENTS</Col>
          <Col className="menu-text-item">KITTEN</Col>
          <Col className="menu-text-item">GALLERY</Col>
          <Col className="menu-text-item">INFO</Col>
          <Col className="menu-text-item">CONTACTS</Col>
        </Row>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
