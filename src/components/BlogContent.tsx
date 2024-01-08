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
        <Link
          key={post._id}
          href={{
            pathname: `/post/${post?.slug?.current}`,
            query: { slug: post?.slug?.current },
          }}
        >
          <div className="justify-between bg-stone-100 rounded-md rounded-tr-md shadow-[0_3px_6px_rgb(0,0,0,0.3)] hover:shadow-lg duration-200 lg:min-h-[calc(100vh-260px)] ">
            {/* // Section for Image */}
            <div className="w-full md:w-5/10 overflow-hidden rounded-tl-md rounded-bl-md">
              <Image
                src={urlFor(post?.mainImage).url()}
                alt="blog post"
                width={400}
                height={400}
                className="w-full max-h-[400px] object-contain hover:scale-150 duration-700 rounded-tl-md rounded-bl-md"
              />
            </div>

            {/* // Section for Title, Description */}
            <div className="flex flex-col min-h-96 justify-between px-3 lg:p-6">
              <div className="flex flex-col">
                <h2 className="lg:text-3xl text-xl font-semibold text-gray-700 hover:text-red-700 duration-200 cursor-pointer mb-4">
                  {post?.title}
                </h2>
                <p className="text-gray-600 lg:text-lg">{post?.description}</p>
              </div>
              <h4 className="text-xl text-center font-bold pt-5 underline text-gray-500 hover:text-gray-600">
                Click to read post
              </h4>
              {/* // Section for Date, Categories, Author */}
              <div className="flex justify-between pt-10">
                {/* // Container for Date and Categories */}
                <div>
                  <p className="text-md font-semibold text-gray-500">
                    {new Date(post?._createdAt).toLocaleDateString("en-UK", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  {post?.categories?.map((item) => (
                    <p
                      key={item?._id}
                      className="text-xs text-blue-500 font-semibold uppercase"
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>

                {/* // Container for Author */}
                <span className="flex flex-row items-center gap-3">
                  <Image
                    src={urlFor(post?.author?.image).url()}
                    alt="author"
                    width={150}
                    height={150}
                    className="rounded-full object-cover w-10 h-10"
                  />
                  <p className="text-sm font-semibold text-gray-500">
                    {post?.author?.name}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default BlogContent;
