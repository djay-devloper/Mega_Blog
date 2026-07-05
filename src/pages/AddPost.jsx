import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='w-full py-10'>
        <Container>
            <div className='rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm backdrop-blur sm:p-8'>
                <div className='mb-6'>
                    <h1 className='text-3xl font-semibold tracking-tight text-slate-900'>Create a new post</h1>
                    <p className='mt-2 text-slate-500'>Share your story with a polished, professional layout.</p>
                </div>
                <PostForm />
            </div>
        </Container>
    </div>
  )
}

export default AddPost

// no post argument provided to Postform, hence create mode will be used in Postform component.