"use client";
import cardimg from "@/assets/images/service.png";
import {IService} from "@/types";
import Image from "next/image";
import Link from "next/link";

const HRServiceCard = ({details}: {details: IService}) => {
  return (
    <div className="w-[22%]">
      <Link href={`/services/details/${details?.id}`}>
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
            {details?.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HRServiceCard;
