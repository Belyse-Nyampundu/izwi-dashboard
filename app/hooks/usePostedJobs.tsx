import { useEffect, useState } from "react";
import { getJobPosted } from "../utilities/utils";
interface PostsData {
  employerId: string;
  title: string;
  id: number;
  location: string;
  posted_date: number;
  description: string;
  category: number | string;
}
const getPostedJobs = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  useEffect(() => {
    const fetchPostedJobs = async () => {
      try {
        const fetchedPosts = await getJobPosted();
        setPosts(fetchedPosts);
      } catch (error) {
        console.log("Error fetching posted jobs:", error);
      }
    };
    fetchPostedJobs();
  }, []);
  return { posts };
};
export default getPostedJobs;
