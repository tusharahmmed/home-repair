"use client";
import {useServicesQuery} from "@/redux/api/serviceApi";
import HRSection from "../ui/HRSection";
import HRServiceCard from "../ui/HRServiceCard";

const Services = () => {
  const {data} = useServicesQuery({});

  return (
    <HRSection title="Popular Services">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // gridTemplateColumns: "repeat( auto-fit, minmax(180px, 1fr) )",
          gap: "20px",
        }}>
        {data?.services?.map((item) => (
          <HRServiceCard key={item?.id} details={item} />
        ))}
      </div>
    </HRSection>
  );
};

export default Services;
