import HRSection from "../ui/HRSection";
import HRServiceCard from "../ui/HRServiceCard";

const Services = () => {
  return (
    <HRSection title="Service Categories">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(180px, 1fr) )",
          gap: "20px",
        }}>
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
        <HRServiceCard />
      </div>
    </HRSection>
  );
};

export default Services;
