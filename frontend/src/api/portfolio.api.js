import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
    reducerPath:"PortfolioApi",
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
    tagTypes: ['Portfolio'],
    endpoints:(builder)=>({
        listAll: builder.query({
            query: ({ page = 1, limit = 10}) => `/portfolio?page=${page}&limit=${limit}`,
            providesTags: ['Portfolio'], // Links this query to the 'Portfolio' tag
          }),
        create:builder.mutation({
            query:(args)=>({
                url:'/portfolio',
                method:"POST",
                body:args,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Portfolio'],
        }),       
        delete: builder.mutation({
            query: (id) => ({
              url: `/portfolio/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ['Portfolio'],
          }),
    })
    
})

export const {useListAllQuery, useCreateMutation, useDeleteMutation} = portfolioApi