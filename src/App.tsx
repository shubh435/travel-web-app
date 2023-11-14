import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SectionForm from "./components/SectionForm";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import GellerySection from "./components/GellerySection";

function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <SectionForm />
      <AboutUs />
      <Services />
      <GellerySection />
    </>
  );
}

export default App;
