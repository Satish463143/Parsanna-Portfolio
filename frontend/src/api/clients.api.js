import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientsApi = createApi({
    reducerPath:"ClientsApi",
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
    tagTypes: ['Clients'],
    endpoints:(builder)=>({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => `/clients?page=${page}&limit=${limit}&search=${search}`,
            providesTags: ['Clients'], // Links this query to the 'Clients' tag
          }),
        create:builder.mutation({
            query:(args)=>({
                url:'/clients',
                method:"POST",
                body:args,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Clients'],
        }),
        update:builder.mutation({
            query:({id, payload})=>({
                url:`/clients/${id}`,
                method:"PUT",
                body:payload,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Clients'],
        }),
        showById:builder.query({
            query:(id)=>`/clients/${id}`
        }),
        delete: builder.mutation({
            query: (id) => ({
              url: `/clients/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ['Clients'],
          }),
    })
    
})

export const {useListAllQuery, useCreateMutation, useShowByIdQuery, useUpdateMutation, useDeleteMutation} = clientsApi