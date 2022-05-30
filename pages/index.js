import React, { useRef, Fragment } from "react";
import Hero from "../components/Hero";
import Ranking from "../components/Ranking";
import Background from "../components/layout/Background";
import MainHeader from "../components/layout/MainHeader";
import Tournament from "../components/Tournament";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function HomePage() {
  const ctaRef = useRef(null);

  console.log(ctaRef);

  return (
    <Fragment>
      <Background>
        <MainHeader />
        <Hero ctaRef={ctaRef} />
      </Background>
      <Ranking />
      <Tournament />
      <CallToAction ref={ctaRef} />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
