import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    
    // The fetch logic is now safely INSIDE the curly braces of the useEffect
    useEffect(() => {
        // getPosts doesn't provide array of posts directly, it provides object with documents key which contains array of posts.
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, []) // <--- The empty dependency array stays at the very end

  return (
    <div className='w-full py-10'>
        <Container>
            <div className='mb-8'>
                <h1 className='text-3xl font-semibold tracking-tight text-slate-900'>All posts</h1>
                <p className='mt-2 text-slate-500'>Browse everything published so far.</p>
            </div>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='w-full p-2 sm:w-1/2 lg:w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts