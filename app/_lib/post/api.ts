import fs from "fs";
import { join } from "path";

export const getPostById = () => {
  const postsDirectry = join(process.cwd(), "posts");

  console.log(postsDirectry + "");
};
