"use client";
import cardimg from "@/assets/images/service.png";
import Image from "next/image";

const HRServiceCard = () => {
  return (
    <div>
      <div>
        <Image
          src={cardimg}
          height={150}
          width={199}
          layout="responsive"
          alt="service"
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />
        <p
          style={{
            marginTop: "5px",
            fontSize: "14px",
            textTransform: "uppercase",
            textAlign: "center",
          }}>
          Service
        </p>
      </div>
    </div>
  );
};

export default HRServiceCard;
