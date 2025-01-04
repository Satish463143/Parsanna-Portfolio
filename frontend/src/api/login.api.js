import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const loginApi = createApi({
    reducerPath:"LoginApi",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_API_URL,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem('_at') || null
            if(token){
                headers.set("Authorization", "Bearer "+token)
            }
        }
    }),
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(args)=>({
                url:"/auth/login",
                body:args,
                method:"POST",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            })
        }),
        me:builder.query({
            query:()=>'/auth/me'
        }),
        logout: builder.mutation({
            query: () => ({
              url: "/auth/logout",
              method: "POST",
            }),
          }),

    })
})

export const {useMeQuery, useLoginMutation, useLogoutMutation} = loginApi