import {Banner, HowWeWork, RecentProjects, Services} from "@/components/Home";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <HowWeWork />
      <RecentProjects />
    </>
  );
};

export default HomePage;
