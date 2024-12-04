import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({ url: "/products" }),
    }),
  }),
});
export const productReducer = productsApi.reducer;
export const { useGetProductsQuery } = productsApi;
