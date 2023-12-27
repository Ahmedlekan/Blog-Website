
import { prisma } from '@/app/api/client'
import { Post } from "@prisma/client"
import AllPostsComponents from '@/components/AllPostsComponents'

const getPost = async () =>{
  const posts: Post[] = await prisma.post.findMany()
  return posts
}

const AllPosts = async () => {
  const posts = await getPost()

  return (
    <div>
        <AllPostsComponents posts={posts} />
    </div>
  )
}

export default AllPosts