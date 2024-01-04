import {urlFor} from "../../sanity/lib/client"
import Image from "next/image";
import Link from "next/link";

export const RichText={
  types:{
    image:({value}:any) => {
      return (
        <div className="flex items-center justify-center">
          <Image 
          src={urlFor(value).url()}
          alt="blog post"
          width={400}
          height={400}
          className="object-contain py-6"

          />
        </div>
      )
      
    }
  },
  list:{
    bullet:({children}:any) => ( 
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
  },
  number: ({children}:any) => ( <ol className="mt-lg list-decimal">{children}</ol>),
  block: {
    h1: ({children}:any) => ( <h1 className="text-4xl font-bold py-5">{children}</h1>),
    h2: ({children}:any) => ( <h2 className="text-3xl font-bold py-5">{children}</h2>),
    h3: ({children}:any) => ( <h3 className="text-2xl font-bold py-5">{children}</h3>),
    h4: ({children}:any) => ( <h4 className="text-xl font-bold py-5">{children}</h4>),
    blockquote: ({children}:any) => ( <blockquote className="border-l-4 border-gray-300 pl-4 py-5 my-5">{children}</blockquote>),

  },
  marks: {
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith("/") ? "noopener noreferrer" : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline">{children}</Link>
      )
    }
  }

  
}