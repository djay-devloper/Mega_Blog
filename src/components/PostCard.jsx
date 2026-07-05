import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className="group block h-full">
        <div className='group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
            <div className='mb-4 h-48 overflow-hidden rounded-xl'>
                <img 
                    src={appwriteService.getFileView(featuredImage)} 
                    alt={title}
                    className='h-full w-full object-cover transition duration-500 group-hover:scale-105' 
                />
            </div>
            <div className='px-1 pb-1'>
                <h2 className='line-clamp-2 text-lg font-semibold text-slate-900 transition group-hover:text-slate-700'>{title}</h2>
                <p className='mt-2 text-sm text-slate-500'>Read article</p>
            </div>
        </div>
    </Link>
  )
}

export default PostCard