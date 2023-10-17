import {tagTypes} from "../tag-types";
import {baseApi} from "./baseApi";

const REVIEW_URL = "/reviews";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // services: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: REVIEW_URL,
    //     method: "GET",
    //     params: arg,
    //   }),
    //   transformResponse: (response: IService[], meta: IMeta) => {
    //     return {
    //       services: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.service],
    // }),

    addReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),

    // get single department by id
    // service: build.query({
    //   query: (id) => ({
    //     url: `${REVIEW_URL}/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.service],
    // }),
    // // get single department by id
    // serviceByCategory: build.query({
    //   query: (categoryId) => {
    //     console.log(categoryId);
    //     return {url: `${REVIEW_URL}/${categoryId}/category`, method: "GET"};
    //   },
    //   // transformResponse: (response: IService[], meta: IMeta) => {
    //   //   return {
    //   //     services: response,
    //   //     meta,
    //   //   };
    //   // },
    //   providesTags: [tagTypes.service],
    // }),

    // // update single department by id
    // updateService: build.mutation({
    //   query: (data) => ({
    //     url: `${REVIEW_URL}/${data.id}`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    //   invalidatesTags: [tagTypes.service],
    // }),

    // delete single department by id
    // deleteService: build.mutation({
    //   query: (id) => ({
    //     url: `${REVIEW_URL}/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [tagTypes.service],
    // }),
  }),
});

export const {
  //   useServicesQuery,
  useAddReviewMutation,
  //   useServiceQuery, // get single department hooks
  //   useUpdateServiceMutation, // update single department hooks
  //   useDeleteServiceMutation, // delete single department hooks
  //   useServiceByCategoryQuery,
} = reviewApi;
