/* eslint-disable @next/next/no-async-client-component */
"use client";

import HRSection from "../ui/HRSection";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import styles from "@/styles/service/service.module.css";
import ServiceItem from "./ServiceItem";
import {useCategoriesQuery} from "@/redux/api/categoryApi";
import {useServicesQuery} from "@/redux/api/serviceApi";

const Service = () => {
  // rtk
  const {data: serviceData} = useServicesQuery({});

  const {data} = useCategoriesQuery({
    limit: 100,
    page: 1,
  });

  const categories = data?.categories;

  return (
    <HRSection title="All Services">
      <Tabs
        defaultIndex={0}
        onChange={(tab) => console.log(tab)}
        selectedTabClassName={"active"}
        focusTabOnClick={false}>
        <div className={styles.container}>
          <div>
            <TabList className={"hr_tab_list"}>
              <Tab className={"hr_tab"}>All Service</Tab>
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
                {serviceData?.services?.map((item: any) => (
                  <ServiceItem key={item?.id} details={item} />
                ))}
              </div>
            </TabPanel>
            {categories?.map((categoryItem: any) => {
              return (
                <TabPanel key={categoryItem?.id} className={"hr_tab_panel"}>
                  <div className={styles.itemWraper}>
                    {categoryItem?.services?.map((item: any) => (
                      <ServiceItem key={item?.id} details={item} />
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

export default Service;
