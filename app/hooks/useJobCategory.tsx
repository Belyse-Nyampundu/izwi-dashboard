
import { useState } from 'react';
import { getJobCategory } from '../utilities/utils';

interface JobCategoryData {
id: number,
name: string;
description: string;
}

const jobCategory = () => {
  const [jobCategories, setJobCategories] = useState<JobCategoryData[]>([]); 
  const fetchedJobCategory = async () => {
    try {
      const response = await getJobCategory(); 
      if (Array.isArray(response)) {
        setJobCategories(response);
      } else {
        console.error("API response does not contain the expected data");
      }
    } catch (error) {
      console.error("Error creating the job post:", error);
    }
  };

  return { fetchedJobCategory, jobCategories };
};
export default jobCategory;
