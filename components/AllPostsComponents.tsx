"use client"

import React, {useState, useEffect} from 'react'
import { Post } from '@prisma/client'
import PostsCard from './PostsCard'
import clsx from 'clsx'

interface AllPostsComponentsProps{
    posts: Post[]
}

const AllPostsComponents = ({posts}: AllPostsComponentsProps) => {
    const [activeCategory, setActiveCategory] =useState("all");
    const [filtered, setFiltered] = useState<Array<Post>>([]);
    const [visiblePosts, setVisiblePosts] = useState(9);

    const loadMorePosts = () => {
        setVisiblePosts(
          (prevVisiblePosts) => prevVisiblePosts + 3
        );
    };

    useEffect(() => {
        if (activeCategory === "all") {
          setFiltered(posts);
          return;
        }
    
        const filteredPostsCategory = posts.filter((post) =>
          post.category?.includes(activeCategory)
        );

        setFiltered(filteredPostsCategory);
    }, [activeCategory, posts]); 


    return (
        <div className="w-full h-fit dark:text-gray-100">
            <div className="wrapper px-10">
            
                <div className="flex gap-5 my-10 flex-wrap justify-center dark:text-white">
                    <button
                    className={clsx(
                        "py-1 px-3",
                        activeCategory === "all"
                        ? "bg-sky-400 text-white rounded-md"
                        : null
                    )}
                    onClick={() => setActiveCategory("all")}
                    >
                    All
                    </button>
                    <button
                    className={clsx(
                        "py-1 px-3",
                        activeCategory === "Tech"
                        ? "bg-sky-400 text-white rounded-md"
                        : null
                    )}
                    onClick={() =>
                        setActiveCategory("Tech")
                    }
                    >
                    Tech
                    </button>
                    <button
                    className={clsx(
                        "py-1 px-3",
                        activeCategory === "Travel"
                        ? "bg-sky-400 text-white rounded-md"
                        : null
                    )}
                    onClick={() => setActiveCategory("Travel")}
                    >
                    Travel
                    </button>
                    <button
                    className={clsx(
                        "py-1 px-3",
                        activeCategory === "Business"
                        ? "bg-sky-400 text-white rounded-md"
                        : null
                    )}
                    onClick={() =>
                        setActiveCategory("Business")
                    }
                    >
                    Business
                    </button>
                    <button
                    className={clsx(
                        "py-1 px-3",
                        activeCategory === "Interior Design"
                        ? "bg-sky-400 text-white rounded-md"
                        : null
                    )}
                    onClick={() =>
                        setActiveCategory("Interior Design")
                    }
                    >
                    Interior Design
                    </button>
                </div>
        
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    {filtered.slice(0, visiblePosts).map((post: Post, index: number) => (
                        <div key={index}>
                            <PostsCard post={post} />
                        </div>
                    ))}
                </div>

                <div className="py-10">
                    {visiblePosts < filtered.length && (
                    <div className="text-center mt-4">
                        <button
                        onClick={loadMorePosts}
                        className="bg-sky-400 hover:bg-sky-200 py-2 px-4 text-white rounded-md"
                        >
                        Show More
                        </button>
                    </div>
                    )}
                </div>

            </div>
      </div>
  )
}

export default AllPostsComponents