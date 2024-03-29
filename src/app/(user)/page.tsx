import Hero from "@/components/Hero";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import BlogContent from "@/components/BlogContent";

export const revalidate = 30;

const query = groq`*[_type == "post"]{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main>
      <Hero />
      <div id="blog">
        {/* Add the id="blog" */}
        <BlogContent posts={posts} />
      </div>
    </main>
  );
}
