import React from "react";
import { Layout, Col, Row } from "antd";
import WomenImg from "../../Assets/womenImg.png";
import ManImg1 from "../../Assets/manImg1.png";
import ManImg2 from "../../Assets/manImg2.png";
import "./Promotions.css";
const Promotions = () => {
  return (
    <>
      <Layout className="Promotions">
        <div className="promotions-text">
          <Row className="promotions-info">PROMOTIONS</Row>
          <Row className="promotions-title">Our Promotions Events</Row>
        </div>
        <div className="promotions-content">
          <Row className="content-container">
            <Col className="promotions-left-side" span={12}>
              <Row className="upper-side">
                <Col span={24} className="upper-side-container">
                  <div className="upper-text-section">
                    <h4 className="upper-title">
                      Get Up to <span>60%</span>
                    </h4>
                    <p className="upper-info">For the summer season</p>
                  </div>
                  <div className="upper-image-section">
                    <img
                      src={WomenImg}
                      alt="Women Image"
                      className="upper-img"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="down-side">
                <Col span={24} className="down-side-container">
                  <h4 className="down-title">get 30% off</h4>
                  <p className="down-code">USE PROMO CODE</p>
                  <div className="promo-code">
                    <p className="code">DINEWEEKENDSALE</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="promotions-right-side" span={12}>
              <Row>
                <Col className="left-side-col">
                  <div className="left-title-content">
                    <p className="product-name">Flex Sweatshirt</p>
                    <p className="product-price">
                      <span className="old-price">$100.00</span>
                      <span className="new-price">$75.00</span>
                    </p>
                  </div>
                  <div className="product-img-container">
                    <img
                      src={ManImg1}
                      alt="Man Product1"
                      className="product-img"
                    />
                  </div>
                </Col>
                <Col className="right-side-col">
                  <div className="right-title-content">
                    <p className="product-name">Flex Push Button Bomber</p>
                    <p className="product-price">
                      <span className="old-price">$225.00</span>
                      <span className="new-price">$190.00</span>
                    </p>
                  </div>
                  <div className="product-img-container">
                    <img
                      src={ManImg2}
                      alt="Man Product2"
                      className="product-img"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default Promotions;
