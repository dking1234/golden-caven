import React from "react";
import { Row, Col, Card } from "antd";
import { MoneyCollectOutlined, SwapOutlined, SafetyOutlined } from "@ant-design/icons";

const WhatWeOffer = () => {
  const offers = [
    {
      icon: <MoneyCollectOutlined style={{ fontSize: "30px", color: "#1890ff" }} />,
      title: "Instant Transactions",
      description: "Send and receive money instantly with ease.",
    },
    {
      icon: <SwapOutlined style={{ fontSize: "30px", color: "#52c41a" }} />,
      title: "Multi-Currency Support",
      description: "Transact in various currencies globally.",
    },
    {
      icon: <SafetyOutlined style={{ fontSize: "30px", color: "#faad14" }} />,
      title: "Secure & Reliable",
      description: "Advanced security for safe transactions.",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>What We Offer</h2>
      <Row gutter={[24, 24]} justify="center">
        {offers.map((offer, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card hoverable style={{ textAlign: "center", borderRadius: "10px" }}>
              {offer.icon}
              <h3 style={{ marginTop: "15px" }}>{offer.title}</h3>
              <p style={{ color: "#555" }}>{offer.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhatWeOffer;
