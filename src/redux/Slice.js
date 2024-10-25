import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//https://localhost:7222/api/Home/Leads
export const Slice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7222/api/',
        prepareHeaders: (headers) => {
            const token = sessionStorage.getItem("token");
            if (token) {
              headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
          },
    }),
    tagTypes: ["FieldGroove"],
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (values) =>({
                url: 'Account/Login',
                method: 'POST',
                body: values,
            }),
        }),
        postRegister: builder.mutation({
            query: (values) =>({
                url: 'Account/Register',
                method: 'POST',
                body: values,
            }),
        }),
        getLeads: builder.query({
            query: () => 'Home/Leads',
            providesTags:["FieldGroove"],

        }),
        getidLeads: builder.query ({
            query: (id) => `Home/Leads/${id}`,
            providesTags:["FieldGroove"],
          
        }),
        postLeads: builder.mutation ({
            query: ( values) =>  ({
                url: 'Home/CreateLead',
                method: 'POST',
                body: values,
                
            }),
            invalidatesTags: ["FieldGroove"],
        }),
        putLeads: builder.mutation ({
            query: (values) => ({
                url: `Home/EditLead`,
                method: 'PUT',
                body: values,
                
            }),invalidatesTags: ["FieldGroove"],
        }),
        deleteLeads: builder.mutation ({
            query: (id) => ({
                url: `Home/DeleteLead/${id}`,
                method: 'DELETE',
                // providesTags:["FieldGroove"],
            }),invalidatesTags: ["FieldGroove"],
        })
    }),
});

export const { usePostLoginMutation, usePostRegisterMutation, useGetLeadsQuery, useGetidLeadsQuery, useDeleteLeadsMutation, usePutLeadsMutation, usePostLeadsMutation } = Slice;

