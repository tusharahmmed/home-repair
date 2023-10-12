import {IMeta, IUser} from "@/types";
import {baseApi} from "./baseApi";
import {tagTypes} from "../tag-types";

const USER_URL = "/users";
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all user
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USER_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.users],
    }),
    // get single user
    user: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),
    // create a new user
    addNewUser: build.mutation({
      query: (data) => ({
        url: "/users/create",
        method: "POST",
        data,
        // contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.users],
    }),
    // update user
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.users],
    }),
    // delete user
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.users],
    }),
  }),
});

export const {
  useAddNewUserMutation, // create
  useUsersQuery, // get all
  useUserQuery, // get single
  useUpdateUserMutation, // update
  useDeleteUserMutation, // delete
} = userApi;
