import { StaticImageData } from "next/image";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  comments: Comment[];
}

export interface Project {

  title: string;
  route: string;
  description: string;
  imageSrc: StaticImageData;
  projectImages: { 
    image: any;
    description: string;
  }[];
  websiteLink: string;
  repositoryLink: string;
  longDescription: string;

  
}

interface CarouselProps {
  data: {
    image: string;
  }[];
  currentImg: number; // Define currentImg prop with the correct type
  goToPreviousImage: () => void;
  goToNextImage: () => void;
}

interface Author extends Base {
  name: string;
  image: string;
  description: string;
  slug: Slug;
}



interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _type: "slug";
  current: string;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category {
  _id: string;
  description: string;
  title: string;
}

export interface CommentFormProps {
  postId: string; // Assuming postId is a string
}

export interface Comment {
  _id: string;
  name: string;
  email: string; // include this only if you intend to display or use it
  comment: string;
  _createdAt: string;
}

export interface ContactFormProps {
  _id: string;
  name: string;
  email: string;
  message: string;
}