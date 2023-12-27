import Trending from "@/components/Trending"
import Tech from "@/components/Tech"
import Travel from "@/components/Travel"
import Other from "@/components/Other"
import Subscribe from "@/components/Subscribe"
import Sidebar from "@/components/Sidebar"
import { prisma } from "./api/client"
import { Post } from "@prisma/client"


const getPost = async () =>{
  const posts: Post[] = await prisma.post.findMany()

  return posts
}

export default async function Home() {
  const posts = await getPost()

  const formatPosts = () => {
    const trendingPosts: Post[] = [];
    const techPosts: Post[] = [];
    const travelPosts: Post[] = [];
    const otherPosts: Post[] = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className='px-10 leading-7 dark:text-wh-100'>
      <Trending trendingPosts={trendingPosts} />

      <div className="md:flex gap-10 mb-5">
        <div className=" basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        
        <div className=" basis-1/4">
          <Sidebar />
        </div>
      </div>

    </main>
  )
}
