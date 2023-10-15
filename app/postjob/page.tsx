'use client'
import { useEffect, useState } from "react";
import jobCreated from "../hooks/useJobCreated";
import jobCategory from "../hooks/useJobCategory";
import Layout from "../Components/Layout";
import Link from 'next/link';

const Postjob = () => {
    const { handleJobPost } = jobCreated();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        num_workers_needed: "",
        posted_date: "",
        job_category: "",
        employer:"",
    });
     const [titleError, setTitleError] = useState("");
     const [locationError, setLocationError] = useState("");
     const [numberOfWorkersError, setNumberOfWorkersError] = useState("");
     const [categoryError, setCategoryError] = useState("");
     const [descriptionError, setDescriptionError] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);
     const{jobCategories,fetchedJobCategory}= jobCategory();

    useEffect(() =>{
        fetchedJobCategory()
    },[]);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
      
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setTitleError("");
        setLocationError("");
        setNumberOfWorkersError("");
        setCategoryError("");
        setDescriptionError("");
   let isValid = true;

   if (formData.title.trim() === "") {
       setTitleError("Title cannot be empty");
          isValid = false;
}
       if (formData.location.trim() === "") {
           setLocationError("Location cannot be empty");
            isValid = false;
}
     if (formData.num_workers_needed.trim() === "") {
         setNumberOfWorkersError("Number of workers cannot be empty");
          isValid = false;
}
    if (formData.job_category.trim() === "") {
           setCategoryError("Category cannot be empty");
              isValid = false;
}
    if (formData.description.trim() === "") {
       setDescriptionError("Description cannot be empty");
           isValid = false;
}
const submitData = {
    title: formData.title,
    description: formData.description,
    location: formData.location,
    num_workers_needed: formData.num_workers_needed,
    posted_date: formData.posted_date,
    employer: formData.employer,
    job_category: formData.job_category,
}
if (isValid) {
    try {
        await handleJobPost(submitData);
        setFormData({
            title: "",
            description: "",
            location: "",
            num_workers_needed: "",
            posted_date: "",
            job_category: "",
            employer: "",
        });
        setTitleError("");
        setLocationError("");
        setNumberOfWorkersError("");
        setCategoryError("");
        setDescriptionError("");
        alert("Form submitted successfully!");
    } catch (error) {
        console.error("Error creating the job post:", error);
    }
    
}
};
return (
    <Layout>
   <div className="-mb-80 ml-[300px]">
   <div className="py-6 ml-30 mt-12 w-4/5 rounded-lg">
  <p className="text-teal-600 ml-8 text-3xl font-bold">Post your job here</p>
  <hr className="mt-2 border-b-2 border-teal-600 w-36 ml-8" />
</div>

<div className=" mt-14 flex text-black">
<div className="">

    <form className="px-6 mt-6" onSubmit={handleSubmit}>
    <div>
         <label htmlFor="title" className="text-xl text-left font-merriweather block">
               Title
         </label>
      <input
           id="title"
           type="text"
           name="title"
           value={formData.title}
           onChange={handleInputChange}
           className="w-[600px] p-4 border border-gray-300 text-left rounded-lg mb-12 font-merriweather "
       />
              {titleError && <p className="text-red-500">{titleError}</p>}
    </div>

    <div className="mb-6">
        <label htmlFor="location" className="text-xl text-left font-merriweather block">
           Location
        </label>
     <input
         id="location"
         type="text"
         name="location"
         value={formData.location}
         onChange={handleInputChange}
         className="w-[600px] p-4 border border-gray-300 rounded-lg mb-6 font-merriweather "
     />
          {locationError && <p className="text-red-500">{locationError}</p>}</div>
    <div className="mb-6">
         <label htmlFor="number_of_workers" className="text-xl text-left font-merriweather block">
                 Number of workers
         </label>
    <input
        id="number_of_workers"
        type="number"
        name="num_workers_needed"
        value={formData.num_workers_needed}
        onChange={handleInputChange}
        className="w-[600px] p-4 border border-gray-300 rounded-lg mb-6 font-merriweather text-align: left;"
     />
     {numberOfWorkersError && <p className="text-red-500">{numberOfWorkersError}</p>}
     </div>
     
    
<div className="mb-6">
    <label htmlFor="category" className="text-xl text-left font-merriweather block">
        Category
    </label>
    <select
        id="category"
        name="job_category"
        value={formData.job_category}
        onChange={handleInputChange}
        className="w-[600px] p-4 border border-gray-300 rounded-lg mb-6 font-merriweather text-align: left;"
    >
        <option value="">Select a category</option>
        {jobCategories.map((category) => (
        <option key={category.id} value={category.id}>
                {category.name}
        </option>
        ))}
    </select>
    {categoryError && <p className="text-red-500">{categoryError}</p>}
</div> 


    <div className="mb-6">
         <label htmlFor="category" className="text-xl text-left font-merriweather  block">
         Employer
         </label>
    <input
        id="category"
        type="text"
        name="employer"
        value={formData.employer}
        onChange={handleInputChange}
        className="w-[600px] p-4  border border-gray-300 rounded-lg mb-6 font-merriweather text-align: left;"
    />
     {categoryError && <p className="text-red-500">{categoryError}</p>}
    </div>

     </form>
</div>
     <div className="mt-6  ">
        <div className="mb-40 ">
             <label htmlFor="description" className="text-xl text-left font-merriweather block">
                 Description
             </label>
    <textarea
        id="description"

        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="w-[600px] border border-gray-300 rounded-lg placeholder-black font-merriweather"
    ></textarea>
       {descriptionError && <p className="text-red-500">{descriptionError}</p>}

    <div className="text-red-500">
        {handleJobPost && Object.values(handleJobPost)[0]}
    </div>
    <div className="mt-36">
        <Link href={"/jobPosting"}>
        <button
         type="button"
         className="  bg-teal-600 text-white pl-72  w-[600px] p-3 rounded-lg text-2xl cursor-pointer hover:bg-black mt-4 font-merriweather text-left"
         disabled={isSubmitting}
         
         onClick={handleSubmit}
        >
     {isSubmitting ? "Submitting..." : "Post"}
    </button>
    </Link>
</div>
</div>
</div>
</div>
</div>
</Layout>
);
};
export default Postjob;

