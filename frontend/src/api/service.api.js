import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
    reducerPath:"ServiceApi",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_API_URL,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem('_at') || null
            if(token){
                headers.set("Authorization", "Bearer "+token)
            }
            return headers
        }
    }),
    tagTypes: ['Service'],
    endpoints:(builder)=>({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => `/service?page=${page}&limit=${limit}&search=${search}`,
            providesTags: ['Service'], // Links this query to the 'Service' tag
          }),
        create:builder.mutation({
            query:(args)=>({
                url:'/service',
                method:"POST",
                body:args,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Service'],
        }),
        update:builder.mutation({
            query:({id, payload})=>({
                url:`/service/${id}`,
                method:"PUT",
                body:payload,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Service'],
        }),
        showById:builder.query({
            query:(id)=>`/service/${id}`
        }),
        delete: builder.mutation({
            query: (id) => ({
              url: `/service/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ['Service'],
          }),
    })
    
})

export const {useListAllQuery, useCreateMutation, useShowByIdQuery, useUpdateMutation, useDeleteMutation} = serviceApi