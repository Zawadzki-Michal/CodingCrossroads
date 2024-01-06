import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "../../../../../types";
import Container from "@/components/Container";
import Image from "next/image";
import { urlFor } from "../../../../../sanity/lib/client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWordpress } from 'react-icons/fa'
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";


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

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    body,
    author->,
  }`;

  const post: Post = await client.fetch(query, { slug });
  console.log(post);

  return (
    <Container className="mb-10 lg:w-4/5 lg:mx-auto lg:m-10">
      
      <div className="flex items-center justify-evenly mb-10">
        <div className="h-full md:w-1/2">
          <Image src={urlFor(post?.mainImage).url()} width={400} height={400} alt="main image" className="object-cover w-full max-h-[460px]" />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image src={urlFor(post?.author?.image).url()} width={200} height={200} alt="author" className="rounded-full object-cover w-32 h-32" />
          <p className="text-3xl text-purple-600 font-semibold">{post?.author?.name}</p>
          <p className="text-xl text-gray-700 text-center tracking-wide">{post?.author?.description}</p>
          
          <div className="flex items-center gap-4">
          <Link href="https://github.com/Zawadzki-Michal" target='blank'>
            <FaGithub className='text-2xl md:text-4xl text-gray-700 hover:text-gray-500 duration-200' />
          </Link>
          <Link href="https://www.linkedin.com/in/michal-zawadzki-12329394" target='blank'>
            <FaLinkedin className='text-2xl md:text-4xl text-gray-700 hover:text-blue-400 duration-200' />
          </Link>
          <Link href="https://portfolio-sage-two-22.vercel.app/" target='blank'>
            <FaWordpress className='text-2xl md:text-4xl text-gray-700 hover:text-blue-400 duration-200' />
          </Link>
          </div>
        </div>
        
      </div>
      <h1 className="lg:text-5xl text-3xl font-bold text-center lg:m-10 m-4 text-gray-700">{post?.title}</h1>
      <span className="flex w-11/12 lg:w-full  mx-auto mb-6    border-b-2  border-gray-700"></span>
      <div className="text-gray-700 font-medium leading-10 text-xl mx-4">
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default SlugPage;