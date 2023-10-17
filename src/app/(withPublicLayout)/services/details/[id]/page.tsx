/* eslint-disable @next/next/no-async-client-component */
"use client";
import ServiceDetails from "@/components/Service/ServiceDetails";
import {useServiceQuery} from "@/redux/api/serviceApi";

const ServiceDetailsPage = ({params}: {params: any}) => {
  const {id} = params;

  const {data: service} = useServiceQuery(id);

  return (
    <div>
      <ServiceDetails service={service} />
    </div>
  );
};

export default ServiceDetailsPage;
