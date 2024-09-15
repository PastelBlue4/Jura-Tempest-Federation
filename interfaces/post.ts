type PostType = {
  slug: string;
  title: string;
  date: string;
  ogImage?: "";
  description?: string;
  tags?: string[];
  readingLength: string;
  type: "tech" | "life" | "review";
};

export default PostType;
