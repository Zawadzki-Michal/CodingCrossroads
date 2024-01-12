import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "../../../../../types";
import Container from "@/components/Container";
import Image from "next/image";
import { urlFor } from "../../../../../sanity/lib/client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWordpress } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";
import CommentBox from "@/components/CommentSection";
import { Comment } from "../../../../../types";
import SocialShare from "@/components/SocialShare";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == "post"]{slug}`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
};

const CommentDisplay = ({ comment }: { comment: Comment }) => (
  <div className="comment">
    <p>
      <strong>{comment.name}</strong> (
      {new Date(comment._createdAt).toLocaleDateString()})
    </p>
    <p>{comment.comment}</p>
  </div>
);

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    ...,
    body,
    author->,
    'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
      _id,
      name,
      email,
      comment,
      _createdAt
    }
  }`;

  const baseUrl = "https://www.coding-crossroads.co.uk/post/";
  const postUrl = baseUrl + slug;

  const post: Post = await client.fetch(query, { slug });
  console.log(post);

  return (
    <Container className="mb-10 lg:w-8/12 lg:mx-auto lg:m-10">
      <div className="flex items-center justify-evenly mb-10">
        <div className="h-full md:w-1/2">
          <Image
            src={urlFor(post?.mainImage).url()}
            width={400}
            height={400}
            alt="main image"
            className="object-cover w-full max-h-[460px]"
          />
        </div>
        <div className="w-5/12 hidden md:inline-flex flex-col items-center gap-6 px-4">
          <Image
            src={urlFor(post?.author?.image).url()}
            width={200}
            height={200}
            alt="author"
            className="rounded-full object-cover w-32 h-32"
          />
          <p className="text-3xl text-purple-600 font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-xl text-gray-700 text-center tracking-wide">
            {post?.author?.description}
          </p>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/Zawadzki-Michal" target="blank">
              <FaGithub className="text-2xl md:text-4xl text-gray-700 hover:text-gray-500 duration-200" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/michal-zawadzki-12329394"
              target="blank"
            >
              <FaLinkedin className="text-2xl md:text-4xl text-gray-700 hover:text-blue-400 duration-200" />
            </Link>
            <Link
              href="https://portfolio-sage-two-22.vercel.app/"
              target="blank"
            >
              <FaWordpress className="text-2xl md:text-4xl text-gray-700 hover:text-blue-400 duration-200" />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="lg:text-5xl text-3xl font-bold text-center lg:m-10 m-4 text-gray-700">
        {post?.title}
      </h1>
      <span className="flex mx-3 mb-6    border-b  border-gray-700"></span>
      <div className="text-gray-700  font-normal lg:leading-10 leading-7  text-lg  lg:text-2xl mx-4 flex flex-col gap-5">
        <PortableText value={post?.body} components={RichText} />
      </div>
      <div className="min-h-24 md:flex flex flex-col-reverse gap-6 md:gap-2 md:flex-row  md:justify-between align-bottom md:pr-4">
        <h1 className="lg:text-4xl text-3xl font-bold my-5 mx-3 text-gray-700">
          Comments
        </h1>
        <SocialShare shareUrl={postUrl} title={post?.title} />
      </div>
      <span className="flex mx-3 mb-6 mt-3    border-b  border-gray-700"></span>
      <div className="text-gray-700 lg:leading-10 leading-7  text-lg  lg:text-xl flex flex-col gap-5">
        <CommentBox postId={post?._id} />
      </div>
    </Container>
  );
};

export default SlugPage;
