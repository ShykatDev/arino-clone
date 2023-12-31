import React from "react";
import Header from "../components/homeComp/Header";
import Service from "../components/homeComp/Service";
import Projects from "../components/homeComp/Projects";
import Awards from "../components/homeComp/Awards";
import Videopopup from "../components/homeComp/Videopopup";
import Team from "../components/homeComp/Team";

const Homepage = () => {
  return (
    <>
      <Header />
      <Service />
      <Projects />
      <Awards />
      <Videopopup />
      <Team />
    </>
  );
};

export default Homepage;
