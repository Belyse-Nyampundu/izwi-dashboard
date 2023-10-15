import { useEffect, useState } from "react";
import { getJobApplication ,getRegisteredJobseeker} from "../utilities/utils";

interface PostsData {
  jobposted: any;
  id: number;
  date_created: number;
  jobpost: number |string;
  jobseeker: number | string; 
}
const getAppliedJobs = () => {
  const [jobApplication, setJobApplication] = useState<PostsData[]>([]);

  useEffect(()=>{
    (async()=>{
        const fetchedJobApplication = await getJobApplication();
        setJobApplication(fetchedJobApplication)
    })()
  },[])
  return{
    postss:jobApplication
  }

};
export default getAppliedJobs;


