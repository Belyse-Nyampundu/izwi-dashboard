import { deleteJob } from "../utilities/utils";
import { useEffect, useState } from "react";

interface PostsData {
  id: number;
  title: string;
  description: string;
  location: string;
  num_workers_needed: string;
  posted_date: string;
  job_category: number | string;
  employer: string;
}

const deleteJobPosted = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const handleDelete = async (id: number) => {
    try {
      await deleteJob(id);
    } catch (error) {
      console.log("Error deleting job posting:", error);
    }
  };

  return { posts, handleDelete };
};

export default deleteJobPosted;

