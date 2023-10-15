import { getRegisteredJobseeker } from "../utilities/utils";
import { useEffect, useState } from "react";

interface PostsData {
  first_name: string;
  last_name: number;
  phone_number: number;
  location: string;
}

const registeredJobseeker = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [numberOfRegisteredUsers, setNumberOfRegisteredUsers] = useState<number>(0);
  const [refreshToggle,setRefreshToggle] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRegisteredJobseeker();
      setPosts(response); 
      setNumberOfRegisteredUsers(response.length);
    };
    fetchData();
  }, [refreshToggle]);

  return { posts, numberOfRegisteredUsers,
    refetch: () => setRefreshToggle(!refreshToggle)
   };
};
export default registeredJobseeker;
