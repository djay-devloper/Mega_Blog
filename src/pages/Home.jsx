import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

export default function Home(){
    // array to store posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16">
                <Container>
                    <div className="rounded-3xl border border-slate-200 bg-white/80 px-8 py-16 text-center shadow-sm backdrop-blur">
                        <h1 className="text-3xl font-semibold text-slate-900">
                            Add your first post to see it here.
                        </h1>
                        <p className="mt-3 text-slate-500">
                            Create a polished story and share it with your audience.
                        </p>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-10'>
            <Container>
                <div className='mb-8'>
                    <h1 className='text-3xl font-semibold tracking-tight text-slate-900'>Latest articles</h1>
                    <p className='mt-2 text-slate-500'>Fresh ideas, thoughtful reads, and inspiring stories.</p>
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