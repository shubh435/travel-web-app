import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SectionForm from "./components/SectionForm";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <SectionForm />
      <AboutUs />
    </>
  );
}

export default App;
