
import { useState } from 'react';
import { createPosts } from '../utilities/utils';
import { useRouter } from 'next/navigation'; 

interface JobPostData {
  title: string;
  description: string;
  location: string;
  num_workers_needed: string;
  posted_date: string;
  job_category: string;
  employer:String;

}

const jobCreated = () => {
  const [createJob, setCreateJob] = useState<JobPostData | null>(null); 
  const router = useRouter();
  const handleJobPost = async (jobPosted: JobPostData) => {
    try {
      console.log("Job posted:", jobPosted);
      const response = await createPosts(jobPosted); 
      if (response.id) {
        router.push("/jobPosting");
        setCreateJob(response);
      } else {
        console.error("API response does not contain the expected data");
      }
    } catch (error) {
      console.error("Error creating the job post:", error);
    }
  };

  return { handleJobPost, createJob };
};
export default jobCreated;


