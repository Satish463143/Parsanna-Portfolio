import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featuredApi = createApi({
    reducerPath:"FeaturedApi",
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
    tagTypes: ['FeaturedPortfolio'],
    endpoints:(builder)=>({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => `/featuredPortfolio?page=${page}&limit=${limit}&search=${search}`,
            providesTags: ['FeaturedPortfolio'], // Links this query to the 'Featured Portfolio' tag
          }),
        listForHome: builder.query({
            query: () => `/featuredPortfolio/list`,
          }),
        create:builder.mutation({
            query:(args)=>({
                url:'/featuredPortfolio',
                method:"POST",
                body:args,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['FeaturedPortfolio'],
        }),
        update:builder.mutation({
            query:({id, payload})=>({
                url:`/featuredPortfolio/${id}`,
                method:"PUT",
                body:payload,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['FeaturedPortfolio'],
        }),
        showById:builder.query({
            query:(id)=>`/featuredPortfolio/${id}`
        }),
        delete: builder.mutation({
            query: (id) => ({
              url: `/featuredPortfolio/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ['FeaturedPortfolio'],
          }),
    })
    
})

export const {useListForHomeQuery, useListAllQuery, useCreateMutation, useShowByIdQuery, useUpdateMutation, useDeleteMutation} = featuredApi