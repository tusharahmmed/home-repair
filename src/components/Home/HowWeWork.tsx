import HRSection from "../ui/HRSection";
import HRWorkCard from "../ui/HRWorkCard";

const HowWeWork = () => {
  const cards = [
    {
      title: "Our Accessor",
      itmes: [
        "Also provide expert opinion for betterment of your home",
        "Access the damage or problem to your home",
        "Report on what has caused damage to your home",
      ],
    },
    {
      title: "Uniqueness",
      itmes: [
        "A highly dedicated and motivated team is ready to provide service for 24x7",
        "100% satisfaction with honest, reliable & quality service that you receive from us",
        "Make a plan of your home according to",
      ],
    },
    {
      title: "Concern Issue",
      itmes: [
        "Security, Time, Cost, Visit, Flexibility and Satisfaction are our utmost priority",
        "Quality work is in our consideration, we did not concern about tiny or large work",
      ],
    },
  ];

  return (
    <HRSection title="How We Work">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(220px, 1fr) )",
          gap: "40px",
        }}>
        {cards?.map((card) => (
          <HRWorkCard key={card.title} title={card.title} items={card.itmes} />
        ))}
      </div>
    </HRSection>
  );
};

export default HowWeWork;
