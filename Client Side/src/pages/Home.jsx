import React from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Services from "../components/Services/Services";
import Companies from "../components/Companies/Companies";
import FeatureProducts from "../components/FeatureProducts/FeatureProducts";


const Home = () => {
  return (
    <>
     <HeroSlider />
     <FeatureProducts />
     <Services />
     <Companies />
    </>
  );
};

export default Home;
