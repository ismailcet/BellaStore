import React from "react";
import { Layout } from "antd";
import Hero from "../Components/Home/Hero";
import Promotions from "../Components/Home/Promotions";
import HomeProducts from "../Components/Home/HomeProducts";
import ProductsInfo from "../Components/Home/ProductsInfo";
import Subs from "../Components/Home/Subs";
const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Promotions />
        <HomeProducts />
        <ProductsInfo />
        <Subs />
      </Layout>
    </>
  );
};

export default Home;
