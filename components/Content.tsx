"use client"

import { FormattedPost } from '@/type'
import Image from 'next/image'
import SocialLinks from './SocialLinks'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'

type ContentProps = {
  post: FormattedPost;
}

const Content = ({ post }: ContentProps) => {

  const editor = useEditor({
    extensions: [StarterKit],
    content: post.content,
  });

  return (
    <div className="w-full max-w-full mb-10 dark:text-wh-100">
      {/* BreadCrumb */}
      <h5 className=' text-wh-500 dark:text-wh-100'>{`Home > ${post.category} > ${post.title}`}</h5>
      
      {/* HEADER */}
      <h3 className="font-bold text-3xl my-3">{post.title}</h3>
      <div className="flex gap-3 mb-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs dark:text-wh-100">{post.createdAt}</h6>
      </div>

      {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 85vw,
                  (max-width: 1060px) 75vw,
                  60vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        
        {/* content */}
        <div className=' dark:text-wh-50'>
          <EditorContent  editor={editor} />          
        </div>

      {/* SOCIAL LINKS */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>

    </div>
  )
}

export default Content