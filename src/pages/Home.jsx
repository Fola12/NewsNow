import React from "react";
import Carousels from "../components/Carousel";
import Headlines from "../components/Headlines";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Carousels />
      <Categories />
      <Headlines />
      <Footer />
    </div>
  );
}
