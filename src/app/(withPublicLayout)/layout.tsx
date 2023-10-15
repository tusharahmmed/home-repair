/* eslint-disable @next/next/no-sync-scripts */
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

const PublicLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      {children}
      <script src="https://cdn.tailwindcss.com"></script>
      <Footer />
    </>
  );
};

export default PublicLayout;
