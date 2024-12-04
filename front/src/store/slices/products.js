import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({ url: "/products" }),
    }),
    getProduct: build.query({
      query: (id) => ({ url: `/products/${id}` }),
    }),
    getCategories: build.query({
      query: () => ({ url: `/categories` }),
    }),
    getProductsByCategory: build.query({
      query: (id) => ({ url:`/category/${id}/products`}),
    }),
  }),
});
export const productReducer = productsApi.reducer;
export const { useGetProductsQuery,useGetProductQuery,useGetCategoriesQuery,getProductsByCategoryQuery } = productsApi;
