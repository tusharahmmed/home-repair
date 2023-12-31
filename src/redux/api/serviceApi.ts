import {ICategory, IDepartment, IMeta, IService} from "@/types";
import {tagTypes} from "../tag-types";
import {baseApi} from "./baseApi";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    services: build.query({
      query: (arg: Record<string, any>) => ({
        url: SERVICE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),

    addService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service],
    }),

    // get single department by id
    service: build.query({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    // get single department by id
    serviceByCategory: build.query({
      query: (categoryId) => {
        // console.log(categoryId);
        return {url: `${SERVICE_URL}/${categoryId}/category`, method: "GET"};
      },
      // transformResponse: (response: IService[], meta: IMeta) => {
      //   return {
      //     services: response,
      //     meta,
      //   };
      // },
      providesTags: [tagTypes.service],
    }),

    // update single department by id
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service],
    }),

    // delete single department by id
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useServicesQuery,
  useAddServiceMutation,
  useServiceQuery, // get single department hooks
  useUpdateServiceMutation, // update single department hooks
  useDeleteServiceMutation, // delete single department hooks
  useServiceByCategoryQuery,
} = serviceApi;
