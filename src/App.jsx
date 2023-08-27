import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";

import css from "./styles/App.module.scss";
import Child from "./components/Child/Child";
import EnglishFluency from "./components/EnglishFluency/EnglishFluency";
import Adventure from "./components/Adventure/Adventure";
import Family from "./components/Family/Family";
import Form from "./components/Form/Form";
import FAQ from "./components/FAQ/FAQ";
import Learning from "./components/Learning/Learning";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Child />
      <EnglishFluency />
      <Pricing />
      <Learning />
      <Family />
      <FAQ />
      <Form />
      <Adventure />
      <Footer />
      {/* <Experties /> */}
      {/* <Portfolio /> */}
      {/* <People /> */}
    </div>
  );
};

export default App;
