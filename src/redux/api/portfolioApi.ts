import {ICategory, IDepartment, IMeta, IPortfolio, IService} from "@/types";
import {tagTypes} from "../tag-types";
import {baseApi} from "./baseApi";

const PORTFOLIO_URL = "/portfolios";

export const portfolioApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    portfolios: build.query({
      query: (arg: Record<string, any>) => ({
        url: PORTFOLIO_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IPortfolio[], meta: IMeta) => {
        return {
          portfolios: response,
          meta,
        };
      },
      providesTags: [tagTypes.portfolio],
    }),

    addPortfolio: build.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_URL}/create`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // get single department by id
    portfolio: build.query({
      query: (id) => ({
        url: `${PORTFOLIO_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolio],
    }),
    // get single department by id
    portfolioByCategory: build.query({
      query: (categoryId) => {
        console.log(categoryId);
        return {url: `${PORTFOLIO_URL}/${categoryId}/category`, method: "GET"};
      },
      // transformResponse: (response: IService[], meta: IMeta) => {
      //   return {
      //     services: response,
      //     meta,
      //   };
      // },
      providesTags: [tagTypes.portfolio],
    }),

    // update single department by id
    updatePortfolio: build.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // delete single department by id
    deletePortfolio: build.mutation({
      query: (id) => ({
        url: `${PORTFOLIO_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),
  }),
});

export const {
  usePortfoliosQuery,
  useAddPortfolioMutation,
  usePortfolioQuery, // get single department hooks
  useUpdatePortfolioMutation, // update single department hooks
  useDeletePortfolioMutation, // delete single department hooks
  usePortfolioByCategoryQuery,
} = portfolioApi;
