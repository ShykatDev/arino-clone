import React from "react";
import Header from "../components/homeComp/Header";
import Service from "../components/homeComp/Service";
import Projects from "../components/homeComp/Projects";
import Awards from "../components/homeComp/Awards";

const Homepage = () => {
  return (
    <>
      <Header />
      <Service />
      <Projects />
      <Awards />
    </>
  );
};

export default Homepage;
