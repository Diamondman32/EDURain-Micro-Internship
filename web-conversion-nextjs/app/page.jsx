"use client";
import { createGlobalStyle } from "styled-components";

import DontMissOutSection from "./components/dontMissOutSection";
import Neighborhood from "./components/neighborhood";
import Balloon from "./components/balloon";
import BackgroundSearch from "./components/backgroundSearch";
//import NextJSCarousel from "./components/carousel";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }
`;

//TODO: add carousel when it works <NextJSCarousel />
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundSearch />
      <Balloon />
      <DontMissOutSection />
      <Neighborhood />
    </>
  );
}
