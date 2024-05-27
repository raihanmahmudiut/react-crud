import { useEffect, useState } from "react"
import { Post } from "../models/Post"
import { fetchPosts } from "../services/api"


const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetchPosts()
                const sortedData = response.data.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
                setPosts(sortedData);
                
                console.log("sortedData",sortedData)
        


            } catch (err) {
                console.error('Failed to fetch posts', err);
            }
            finally {
                setLoading(false)
            }
        }

        getPosts()
    }, [])
    return {posts, loading}
}

export default usePosts


