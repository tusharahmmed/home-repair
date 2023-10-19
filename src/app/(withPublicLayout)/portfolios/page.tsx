import Portfolio from "@/components/Portfolio/Portfolio";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Home Repair Bangladesh",
  description: "Home Repair Bangladesh",
};

const PortfolioPage = async () => {
  return (
    <>
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
