import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, IPostInfo, IUser } from "../types/type";

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
		getComments: builder.query<IPostInfo[], string>({
			query: (id) => `comments?id=${id}`,
		}),
	}),
});

export const {
	useGetPostsQuery,
	useGetUserByUsernameQuery,
	useGetCommentsQuery,
} = postsApi;
