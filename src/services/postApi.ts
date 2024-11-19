import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, IUser } from "../types/type";

export const postsApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	endpoints: (builder) => ({
		getPosts: builder.query<IPost[], void>({
			query: () => "posts",
		}),
		getUserByUsername: builder.query<IUser[], string>({
			query: (username) => `users?username=${username}`,
		}),
	}),
});

export const { useGetPostsQuery, useGetUserByUsernameQuery } = postsApi;
