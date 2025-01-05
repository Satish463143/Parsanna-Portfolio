import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath:"CategoryApi",
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
    tagTypes: ['Category'],
    endpoints:(builder)=>({
        listAll: builder.query({
            query: () => "/category",
            providesTags: ['Category'], // Links this query to the 'Category' tag
          }),
        create:builder.mutation({
            query:(args)=>({
                url:'/category',
                method:"POST",
                body:args,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Category'],
        }),
        update:builder.mutation({
            query:({id, payload})=>({
                url:`/category/${id}`,
                method:"PUT",
                body:payload,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Category'],
        }),
        showById:builder.query({
            query:(id)=>`/category/${id}`
        }),
        delete: builder.mutation({
            query: (id) => ({
              url: `/category/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ['Category'],
          }),
    })
    
})

export const {useListAllQuery, useCreateMutation, useShowByIdQuery, useUpdateMutation, useDeleteMutation} = categoryApi