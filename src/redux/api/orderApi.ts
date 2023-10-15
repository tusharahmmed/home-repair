import {ICategory, IDepartment, IMeta} from "@/types";
import {tagTypes} from "../tag-types";
import {baseApi} from "./baseApi";

const ORDER_URL = "/orders";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    orders: build.query({
      query: (arg: Record<string, any>) => ({
        url: ORDER_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: ICategory[], meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
      providesTags: [tagTypes.order],
    }),

    placeOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.order],
    }),

    // get single department by id
    orderDetails: build.query({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),

    // update single department by id
    updateOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.order],
    }),

    // delete single department by id
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.order],
    }),
  }),
});

export const {
  useOrdersQuery,
  useOrderDetailsQuery,
  usePlaceOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
