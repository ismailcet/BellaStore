import React from "react";
import { Layout } from "antd";
import { Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import FeaturedList from "../../Assets/Featured_List.png";
import HeroImage from "../../Assets/Image.png";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <Layout className="Hero">
        <Row className="hero-container">
          <Col span={12} className="hero-text-section">
            <div className="text-container">
              <div className="hero-blue-text">Sale 70%</div>
              <h3 className="hero-title">An Industrial Take on Streetwear</h3>
              <p className="hero-info">
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>
              <Button className="btn btn-hero">
                <ShoppingCartOutlined />
                Start Shopping
              </Button>
              <img src={FeaturedList} alt="" />
            </div>
          </Col>
          <Col span={12} className="hero-image-section">
            <div className="image-container">
              <img src={HeroImage} alt="" className="hero-img" />
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Hero;
