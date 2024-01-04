import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "../../../../../types";
import Container from "@/components/Container";
import Image from "next/image";
import { urlFor } from "../../../../../sanity/lib/client";

interface Props {
  params: {
    slug: string;
  };
}

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
   <Container className="mb-10">
    <div className="flex items-center mb-10">
      <div className="w-full md:w-2/3">
        <Image src={urlFor(post?.mainImage).url()} width={400} height={400} alt="main image" className="object-cover w-full" />
      </div>
      <div className="w-1/3">

      </div>
    </div>
   </Container>
  );
};

export default SlugPage;