import React from 'react'
import { Post } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'

interface PostsCardProps{
    post: Post,
}

const PostsCard = ({post}: PostsCardProps) => {
  return (
    <Link href={{ pathname: `post/${post.id}` }}>

      <div
        className="dark:bg-dark rounded-sm overflow-hidden shadow-xl"
      >
        <div className="w-full flex">
          <Image
            src={post.image}
            height={900}
            width={900}
            alt="blog image"
            className="rounded-sm"
          />
        </div>

        <div className="p-3">
          <div className="px-3 inline-block text-gray-50 bg-sky-400 rounded-md whitespace-nowrap ">
            {post.category}
          </div>

          <div className="text-xl mt-3 text-gray-900 font-bold dark:text-white">
            {post.title}
          </div>

          <p className="mt-3 dark:text-white text-gray-900 text-sm">
            {post.snippet.substring(0, 150) +
              (post.snippet.length > 150 ? "..." : "")}
          </p>

          <div className="flex mt-3 gap-3 items-center">

            <div className="flex gap-2 dark:text-white text-gray-500 text-sm">
              <span>{post.author}</span>
              <span>⋅</span>
              <span>5 min read</span>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};


export default PostsCard