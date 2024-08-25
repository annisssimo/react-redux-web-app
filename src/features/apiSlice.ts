import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getUser: builder.query({
      query: (username: string) => `/users?username=${username}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetUserQuery } = apiSlice;
