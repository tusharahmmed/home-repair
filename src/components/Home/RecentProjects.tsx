"use client";

import {usePortfoliosQuery} from "@/redux/api/portfolioApi";
import HRPortfolioCard from "../ui/HRPortfolioCard";
import HRSection from "../ui/HRSection";

const RecentProjects = () => {
  const {data} = usePortfoliosQuery({});

  return (
    <HRSection
      link={"/portfolios"}
      background={true}
      button={true}
      title="Our Recent Projects">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {data?.portfolios?.map((item) => (
          <HRPortfolioCard key={item?.id} details={item} />
        ))}
      </div>
    </HRSection>
  );
};

export default RecentProjects;
