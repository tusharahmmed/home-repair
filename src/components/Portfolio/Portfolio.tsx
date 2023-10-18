/* eslint-disable @next/next/no-async-client-component */
"use client";

import HRSection from "../ui/HRSection";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import styles from "@/styles/service/service.module.css";
import {useCategoriesQuery} from "@/redux/api/categoryApi";
import {useServicesQuery} from "@/redux/api/serviceApi";
import {usePortfoliosQuery} from "@/redux/api/portfolioApi";
import HRPortfolioCard from "../ui/HRPortfolioCard";

const Portfolio = () => {
  // rtk
  const {data: portfoloioData} = usePortfoliosQuery({});

  const {data} = useCategoriesQuery({
    limit: 100,
    page: 1,
  });

  const categories = data?.categories;

  return (
    <HRSection title="Explore Our Projects">
      <Tabs
        defaultIndex={0}
        onChange={(tab) => console.log(tab)}
        selectedTabClassName={"active"}
        focusTabOnClick={false}>
        <div className={styles.container}>
          <div>
            <TabList className={"hr_tab_list"}>
              <Tab className={"hr_tab"}>All Projects</Tab>
              {categories?.map((category: any) => (
                <Tab key={category?.id} className={"hr_tab"}>
                  {category?.title}
                </Tab>
              ))}
            </TabList>
          </div>

          <div>
            <TabPanel className={"hr_tab_panel"}>
              <div className={styles.itemWraper}>
                {portfoloioData?.portfolios?.map((item: any) => (
                  <HRPortfolioCard key={item?.id} details={item} />
                ))}
              </div>
            </TabPanel>
            {categories?.map((categoryItem: any) => {
              return (
                <TabPanel key={categoryItem?.id} className={"hr_tab_panel"}>
                  <div className={styles.itemWraper}>
                    {categoryItem?.portfolios?.map((item: any) => (
                      <HRPortfolioCard key={item?.id} details={item} />
                    ))}
                  </div>
                </TabPanel>
              );
            })}
          </div>
        </div>
      </Tabs>
    </HRSection>
  );
};

export default Portfolio;
