// services/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  refresh: string;
}

interface UserInfo {
  id: string;
  name: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_MEETUS_API_URL, // use NEXT_PUBLIC for client access
    credentials: "include", // important for HTTP-only cookie
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "yeshtery/token",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { ...credentials, isEmployee: true },
      }),
    }),
    getUserInfo: builder.query<UserInfo, void>({
      query: () => ({
        url: "user/info",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUserInfoQuery } = authApi;
