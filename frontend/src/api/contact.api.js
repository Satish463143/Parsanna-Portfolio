import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
    reducerPath:"ContactApi",
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
    tagTypes: ['Contact'],
    endpoints:(builder)=>({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => `/contact?page=${page}&limit=${limit}&search=${search}`,
            providesTags: ['Contact'], // Links this query to the 'Contact' tag
          }),
        create:builder.mutation({
            query:(args)=>({
                url:'/contact',
                method:"POST",
                body:args,
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Contact'],
        }),
    })
})

export const {useListAllQuery, useCreateMutation} = contactApi