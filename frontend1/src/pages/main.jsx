import React, { useEffect, useState } from "react";
import Hero from "../containers/main/hero";
import PopularProducts from "../containers/main/popularProducts";
import Blog from "../containers/main/blog";
import Brands from "../containers/main/brands";
import Reviews from "../containers/main/reviews";
import Advantage from "../containers/main/advantage";
import Forms from "../containers/main/forms";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const Main = () => {
  // useEffect(async () => {
  //   Fancybox.bind("[data-fancybox]", {
  //     // Your custom options
  //   });
  // }, []);
  return (
    <main className="main">
      <Hero />
      <PopularProducts />
      <Blog />
      <Brands />
      <Reviews />
      <Advantage />
      <Forms />
    </main>
  );
};

export default Main;
