import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

const PublicLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
