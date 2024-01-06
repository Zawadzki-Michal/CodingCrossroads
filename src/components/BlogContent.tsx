import Container from "./Container";
import { Post } from "../../types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/client";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <Container className="bg-black/25 lg:py-20 py-5 lg:px-24 px-2 grid lg:grid-cols-2 grid-cols-1 gap-20">
      {posts.map((post) => (
        <Link key={post._id} href={{
          pathname: `/post/${post?.slug?.current}`,
          query: { slug: post?.slug?.current },
          }}>
            
          <div className="flex flex-col md:flex-col bg-stone-100 rounded-md rounded-tr-md shadow-[0_3px_6px_rgb(0,0,0,0.3)] hover:shadow-lg duration-200 lg:min-h-72">
            <div className="w-full md:w-5/10 overflow-hidden rounded-tl-md rounded-bl-md relative">
              <Image
                src={urlFor(post?.mainImage).url()}
                alt="blog post"
                width={400}
                height={400}
                className="w-full max-h-[400px] object-contain hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
              />
              <div className="absolute top-0 left-0 bg-black/20 w-full h-full hidden group-hover:inline-flex rounded-tl-md rounded-bl-md">
                <div className="relative bottom-0 left-0 w-full bg-opacity-50 bg-black backdrop-blur-xl rounded-md drop-shadow-lg text-white p-5 justify-center">
                  <p className="text-2xl font-bold">Read More</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/10 flex flex-col justify-between py-5 px-3 lg:min-h-72">
              <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                {post?.categories?.map((item) => (
                  <p key={item?._id} className="text-xs text-blue-500 font-semibold uppercase">
                    {item?.title}
                  </p>
                ))}
              </div>
              <h2 className="lg:text-2xl text-xl font-semibold text-gray-700 hover:text-red-700 duration-200 cursor-pointer lg:mx-3">{post?.title}</h2>
              <p className="text-gray-600 lg:text-lg lg:mx-3">{post?.description}</p>
              </div>
              <div className="w-full text-center p-4">
                <h4 className="text-2xl font-bold underline text-gray-500">Click to read post</h4>
              </div>
              <div className="flex items-center justify-between lg:m-3 mt-5">
                <p className="text-md font-semibold text-gray-500">{new Date(post?._createdAt).toLocaleDateString
                ("en-UK", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}</p>
                <div className="flex items-center gap-2">
                  <Image src={urlFor(post?.author?.image).url()} alt="author" width={150} height={150} className="rounded-full object-cover w-10 h-10" />
                  <p className="text-sm font-semibold text-gray-500">{post?.author?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default BlogContent;