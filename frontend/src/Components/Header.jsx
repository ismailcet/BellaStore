import React from "react";
import { Layout } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Layout className="Header">
        <div className="logo-side">
          <h3 className="logo">BELLA STORE</h3>
        </div>
        <div className="links-side">
          <ul className="nav-links">
            <li>Female</li>
            <li>Male</li>
            <li>Popular Products</li>
            <li>Discount</li>
          </ul>
        </div>
        <div className="profile-side">
          <div className="name-section">
            <span>Hello</span>
            <h6>Evelyn Andreas</h6>
          </div>
          <div className="img-side"></div>
          <div className="cart-side">
            <button className="btn btn-cart">
              <ShoppingCartOutlined />
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Header;
