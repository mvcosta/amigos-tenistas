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
  const rankingRef = useRef(null);

  const ctaHandler = (event) => {
    event.preventDefault();
    ctaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const rankingHandler = (event) => {
    event.preventDefault();
    rankingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <Background>
        <MainHeader onCta={ctaHandler} />
        <Hero onCta={ctaHandler} onRanking={rankingHandler} />
      </Background>
      <Ranking ref={rankingRef} />
      <Tournament />
      <CallToAction ref={ctaRef} />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
