interface PostType {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  excerpt?: string;
  content: string;
  tags: string[];
}

export default PostType;
