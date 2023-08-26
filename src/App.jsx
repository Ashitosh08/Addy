import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import Child from "./components/Child/Child";
import EnglishFluency from "./components/EnglishFluency/EnglishFluency";
import Adventure from "./components/Adventure/Adventure";
import Family from "./components/Family/Family";
import Form from "./components/Form/Form";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Child />
      <EnglishFluency />
      <Adventure />
      <Family />
      <Form />
      {/* <Experties /> */}
      {/* <Work /> */}
      {/* <Portfolio /> */}
      {/* <People /> */}
      <Footer />
    </div>
  );
};

export default App;
