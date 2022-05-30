import { Fragment } from "react";
import Hero from "../components/Hero";
import Ranking from "../components/Ranking";
import Background from "../components/layout/Background";
import MainHeader from "../components/layout/MainHeader";
import Tournament from "../components/Tournament";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Fragment>
      <Background>
        <MainHeader />
        <Hero />
      </Background>
      <Ranking />
      <Tournament />
      <CallToAction />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
