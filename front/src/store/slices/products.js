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
      providesTags: ['Categories']
    }),
    getProductsByCategory: build.query({
      query: (id) => ({ url:`/category/${id}/products`}),
    }),
    addCategory: build.mutation({
      query: (newCategory) => ({
        url:`/categories`,
        method:'Post',
        body: newCategory,
      }),
      invalidatesTags: ['Categories']
    }),
    updateCategory: build.mutation({
      query: ({id, ...updatedCategory}) => ({
        url:`/categories/${id}`,
        method:'PATCH',
        body: updatedCategory,
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      }),
      invalidatesTags: ['Categories']
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url:`/categories/${id}`,
        method:'DELETE',
      }),
      invalidatesTags: ['Categories']
    }),
  }),
});
export const productReducer = productsApi.reducer;
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  getProductsByCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = productsApi;
