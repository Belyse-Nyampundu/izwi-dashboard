'use client'
import React, { useEffect, useState} from "react";
import Link from "next/link";
import getPostedJobs from "../hooks/usePostedJobs";
import getAppliedJobs from "../hooks/useJobApplication";
import getPostedJobsPerEmployer from "../hooks/useJobPostedPerEmployer";
import Layout from "../Components/Layout";
import deleteJobPosted from "../hooks/useDeleteJobPost";
import ReactPaginate from "react-paginate";

const JobPosting = () => {
  const number = "+25462765272"
  const { posted } = getPostedJobsPerEmployer(number);
  console.log(posted,"id")
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  
  const {postss} = getAppliedJobs();
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = posted.filter((posting: { title: string; }) =>
  posting.title.toLowerCase().includes(searchTerm.toLowerCase())

  
);
const paginatedData = filtered.slice(
  currentPage * itemsPerPage,
  currentPage * itemsPerPage + itemsPerPage
);
const totalPages = Math.ceil(filtered.length / itemsPerPage);
const handlePageChange = ({ selected }: { selected: number }) => {
  setCurrentPage(selected);
};
// const {posts: setSelectedPosts, handleDelete} = deleteJobPosted();
const { posts, handleDelete, selectedPosts, setSelectedPosts } = deleteJobPosted();

const handleCheckboxChange = (itemId: number) => {
  setSelectedPosts((prevSelectedPosts: number[]) => {
    if (prevSelectedPosts.includes(itemId)) {
      return prevSelectedPosts.filter((id) => id !== itemId);
    } else {
      return [...prevSelectedPosts, itemId];
    }
  });
};
  return (
    <Layout>
    <div className="ml-[200px] w-full h-screen flex flex-col items-center">
      <div className="bg-teal-600 py-6  mt-12 w-10/12 rounded-lg">
        <p className="text-white ml-8 text-3xl font-bold">Job Postings! </p>
      </div>

      <div className="flex mt-8">
        <div className="-ml-[50px] inline-block border border-[#C0CDCA] rounded">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-transparent border-none outline-none rounded-l-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="inline-block">
          <button className="px-12 py-4  bg-teal-600 text-white rounded-r-lg">
            Search
          </button>
        </div>

        <div className="ml-72">
          <Link href="/postjob">
            <button className="px-12 py-4 bg-teal-600 text-white rounded-xl ">
              Post job
            </button>
          </Link>
        </div>
      </div>
      <table className="mt-20 w-8/12 ml-20 overflow-hidden max-h-[calc(100vh-50px)] overflow-y-auto">
  <thead className="bg-teal-600 text-white h-24">
    <tr>
      <th className="py-2 px-16 text-left w-72">Job title</th>
      <th className="py-2 px-16 text-left w-72">Description</th>
      <th className="py-2 px-16 text-left w-72">Created date</th>
    </tr>
  </thead>
  <tbody>
    {paginatedData.map((item) => {
      const matchingApplication = postss.find((application) => application.jobpost === item.id);
      return (
        <tr key={item.id} className="border-b border-[#C0CDCA]">
           <td className="py-12 px-8">
    <input
      type="checkbox"
      onChange={() => handleCheckboxChange(item.id)}
    />
  </td>
          <td className="py-12 px-8">{item.title}</td>
          <td className="py-2 px-2">{item.description}</td>
          <td className="py-2 px-12">{item.posted_date && new Date(item.posted_date).toLocaleDateString('en-US')}</td>
          <td className="py-2 px-12">{matchingApplication ? matchingApplication.jobseeker : ''}</td>
          <td className="py-2 px-12"> {matchingApplication ? new Date(matchingApplication.date_created).toLocaleDateString('en-US') : ''}</td>
          <td className="py-2 px-12">{matchingApplication ? matchingApplication.jobpost : ''}</td>
        </tr>
      );
    })}
  </tbody>
</table>
<div className="my-4 flex items-center">
  <ReactPaginate
    pageCount={totalPages}
    pageRangeDisplayed={3}
    marginPagesDisplayed={1}
    onPageChange={handlePageChange}
    previousLabel={'Previous'}
    nextLabel={'Next'}
    containerClassName={'pagination flex space-x-2'}
    activeClassName={'bg-blue-900 text-white'}
    pageClassName={'bg-gray text-black px-3 py-1 rounded'}
    previousClassName={'bg-gray-300 text-black px-3 py-1 rounded'}
    nextClassName={'bg-gray-300 text-black px-3 py-1 rounded'}
  />
</div>
    </div>
    </Layout>
  );
 
};

export default JobPosting;

