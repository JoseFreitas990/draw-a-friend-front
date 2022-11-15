import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IAuth = {
  id: string;
  email: string;
  name: string;
};

export interface LoginRequest {
  email: string;
  password: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
  credentials: "include",
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<IAuth, LoginRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = authApi;
