"use client";

import HRPortfolioCard from "../ui/HRPortfolioCard";
import HRSection from "../ui/HRSection";

const RecentProjects = () => {
  return (
    <HRSection background={true} button={true} title="Our Recent Projects">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
        <HRPortfolioCard />
        <HRPortfolioCard />
        <HRPortfolioCard />
        <HRPortfolioCard />
        <HRPortfolioCard />
        <HRPortfolioCard />
        <HRPortfolioCard />
        <HRPortfolioCard />
      </div>
    </HRSection>
  );
};

export default RecentProjects;
