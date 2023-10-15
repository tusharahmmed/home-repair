/* eslint-disable @next/next/no-async-client-component */
"use client";
import ServiceDetails from "@/components/Service/ServiceDetails";
import {getBaseUrl} from "@/helpers/config/envConfig";

const ServiceDetailsPage = async ({params}: {params: any}) => {
  const {id} = params;
  const {data: service} = await getData(id);

  return (
    <div>
      <ServiceDetails service={service} />
    </div>
  );
};

export default ServiceDetailsPage;

async function getData(id: string) {
  const res = await fetch(`${getBaseUrl()}/services/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
