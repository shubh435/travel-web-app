import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SectionForm from "./components/SectionForm";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import GellerySection from "./components/GellerySection";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Setting from "./components/Setting";
// @ts-ignore
import json1 from "../apple-app-site-association";

function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path="/" element={<div>
          <Header />
          <MainContainer />
          <SectionForm />
          <AboutUs />
          <Services />
          <GellerySection />
          <Blogs />
          <Footer /> </div>} />
          <Route path="/settings"Component={Setting} />
          <Route path="/apple-app-site-association"Component={json1} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
