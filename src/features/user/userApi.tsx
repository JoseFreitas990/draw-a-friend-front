import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export interface IUser {
  id: string;
  email: string;
  name: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
  credentials: "include",
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], void>({
      query: () => `/users`,
      providesTags: ["User"],
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => `/users`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
