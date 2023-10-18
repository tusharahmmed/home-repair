/* eslint-disable @next/next/no-async-client-component */
"use client";
import PortfolioDetails from "@/components/Portfolio/PortfolioDetails";

import {usePortfolioQuery} from "@/redux/api/portfolioApi";

const PortfolioDetailsPage = ({params}: {params: any}) => {
  const {id} = params;

  const {data: portfolio} = usePortfolioQuery(id);

  return (
    <div>
      <PortfolioDetails portfolio={portfolio} />
    </div>
  );
};

export default PortfolioDetailsPage;
