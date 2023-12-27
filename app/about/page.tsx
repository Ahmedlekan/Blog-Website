import Image from "next/image";
import about from "@/public/assets/about-profile.jpg"
import { IoMdPulse } from "react-icons/io";

const About = () => {
  return (
    <div className="py-10">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Our Story
        </h1>
        <Image
          src={about}
          width={600}
          height={600}
          alt="about us"
          className="rounded-md"
        />
        <p className="max-w-[600px] text-center text-gray-600 dark:text-gray-100">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aperiam eveniet debitis
          voluptate eius aliquid ratione inventore, aut
          asperiores eaque nam fuga iste odio neque iusto
          quibusdam expedita, perspiciatis, suscipit
          maiores? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptates deleniti debitis
          expedita eum accusantium? Dolores hic aliquam
          laudantium provident esse fuga tempora, quibusdam
          vel eaque, voluptatem et ab veniam porro.
        </p>
        
         <div className="flex gap-1 items-center">
            <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
              Diplo
            </h1>
            <IoMdPulse
              className="text-3xl dark:text-white"
              aria-hidden="true"
            />
            
          </div>
      </div>
    </div>
  );
};

export default About;