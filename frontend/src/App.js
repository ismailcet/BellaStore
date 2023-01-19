import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Layout className="main">
        <Header />
        <div className="site-content">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
              <Route path="about" element={<Home />} />
              <Route path="dashboard" element={<Home />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
