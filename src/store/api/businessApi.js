import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const businessApi = createApi({
  reducerPath: "business",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://prueba-back-hj2c.onrender.com/api/v1",
  }),
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "post",
        body: data,
      }),
    }),
    createCompany: builder.mutation({
      query: (data) => ({
        url: "/company",
        method: "post",
        body: data,
      }),
    }),
    getCompanies: builder.query({
      query: () => `/company`,
    }),
    getCompaniesByNit: builder.query({
      query: (id) => `/company/${id}`,
    }),
    createProductCompany: builder.mutation({
      query: ({ name, inventoryId }) => ({
        url: `/company/add-product`,
        method: "post",
        body: { name, inventoryId },
      }),
    }),
    sendEmail: builder.mutation({
      query: ({email, inventoryId}) => ({
        url:`/company/get-inventory/${inventoryId}`,
        method:"post",
        body: { email, inventoryId}
      })
    })
  }),
});

export const {
  useLoginMutation,
  useGetCompaniesByNitQuery,
  useGetCompaniesQuery,
  useCreateCompanyMutation,
  useCreateProductCompanyMutation,
  useSendEmailMutation
} = businessApi;
