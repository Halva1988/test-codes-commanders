import { IPost } from "../types/type"


const getData = async (): Promise<IPost[]> => {
  try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      return posts
    } catch (error) {
      console.log(error)
      return []
    }
}

export default getData