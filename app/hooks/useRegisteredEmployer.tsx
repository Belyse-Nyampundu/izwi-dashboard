import { getRegisteredEmployer } from "../utilities/utils";
import { useEffect, useState } from "react";

interface PostsData {
  id:number;
  first_name: string;
  last_name: number;
  phone_number: number;
  location: string;
  natonal_identity : number;
}

const registeredEmployer = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [numberOfRegisteredEmployer, setNumberOfRegisteredEmployer] = useState<number>(0);
  const [refreshToggle,setRefreshToggle] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRegisteredEmployer();
      setPosts(response); 
      setNumberOfRegisteredEmployer(response.length); 
    };
    fetchData();
  }, [refreshToggle]);

  return { 
    posts, numberOfRegisteredEmployer,
    refetch: () => setRefreshToggle(!refreshToggle)
   };
};
export default registeredEmployer;
