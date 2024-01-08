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

interface Author extends Base {
  name: string;
  image: Image;
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