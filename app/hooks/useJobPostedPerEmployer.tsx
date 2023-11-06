import { useEffect, useState } from "react";
import { getJobPostedPerEmployer } from "../utilities/utils";
interface JobsData {
  title: string;
  id: number;
  location: string;
  posted_date: number;
  description: string;
  category: number | string;
}
const getPostedJobsPerEmployer = (slug: string) => {
  const [posted, setPosted] = useState<JobsData[]>([]);
  console.log(posted,"posted1")
  const [refreshToggle, setRefreshToggle] = useState(false)

  useEffect(() => {
    const fetchPostedJobs = async (employerNumber:string) => {
        const fetchedJobs = await getJobPostedPerEmployer(employerNumber);
        console.log(fetchPostedJobs,"fetchedjobs")
          setPosted(fetchedJobs);
    };
    fetchPostedJobs(slug);
  }, [slug,refreshToggle]);
  return { 
    posted,
    refetch: () => setRefreshToggle(!refreshToggle)
  };
  
};
export default getPostedJobsPerEmployer;