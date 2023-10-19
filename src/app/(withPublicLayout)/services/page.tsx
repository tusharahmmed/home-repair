import Service from "@/components/Service/Service";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services | Home Repair Bangladesh",
  description: "Home Repair Bangladesh",
};

const ServicePage = async () => {
  return (
    <>
      <Service />
    </>
  );
};

export default ServicePage;
