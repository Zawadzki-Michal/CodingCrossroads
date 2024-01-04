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
    <Container className="bg-red-300 py-20 px-10 flex flex-col gap-10">
      {posts.map((post) => (
        <Link key={post._id} href={{
          pathname: `/post/${post?.slug?.current}`,
          query: { slug: post?.slug?.current },
          }}>
          <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tr-md hover:shadow-md duration-200">
            <div className="w-full md:w-3/5 overflow-hidden rounded-tl-md rounded-bl-md relative">
              <Image
                src={urlFor(post?.mainImage).url()}
                alt="blog post"
                width={400}
                height={400}
                className="w-full max-h-[400px] object-cover hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
              />
              <div className="absolute top-0 left-0 bg-black/20 w-full h-full hidden group-hover:inline-flex rounded-tl-md rounded-bl-md">
                <div className="absolute bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-xl rounded-md drop-shadow-lg text-white p-5 justify-center">
                  <p className="text-2xl font-bold">Read More</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
              <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                {post?.categories?.map((item) => (
                  <p key={item?._id} className="text-xs text-blue-500 font-semibold uppercase">
                    {item?.title}
                  </p>
                ))}
              </div>
              <h2 className="text-2xl font-semibold hover:text-red-700 duration-200 cursor-pointer">{post?.title}</h2>
              <p className="text-gray-600 ">{post?.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-500">{new Date(post?._createdAt).toLocaleDateString
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