'use client'
import React, { useEffect, useState} from "react";
import Link from "next/link";
import getAppliedJobs from "../hooks/useJobApplication";
import getJobsPerId from "../hooks/useJobPostedPerEmployer";
import Layout from "../Components/Layout";

const JobPosting = () => {
  const employerNumber = "+25462765272"
  const { posted } = getJobsPerId(employerNumber);
  const {postss} = getAppliedJobs();
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = posted.filter((posting: { title: string; }) =>
  posting.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <Layout>
    <div className=" w-full h-screen flex flex-col items-center">
    <div className="py-6 ml-60 mt-12 w-4/5 rounded-lg">
  <p className="text-teal-600 ml-8 text-3xl font-bold">Job Postings!</p>
  <hr className="mt-2 border-b-2 border-teal-600 w-36 ml-8" />
</div>
      <div className="flex mt-8">
      <div className="inline-flex border border-[#C0CDCA] rounded mr-72">
  <input
    type="text"
    placeholder="Search here..."
    className="pl-4 pr-12 py-2 bg-transparent border-none outline-none rounded-l w-96"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
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
      <th className="py-2 px-16 text-left w-72">Jobseeker name</th>
      <th className="py-2 px-16 text-left w-72">applied date</th>
      <th className="py-2 px-16 text-left w-72">jobpost</th>
    </tr>
  </thead>
  <tbody>
    {filtered.map((item) => {
      const matchingApplication = postss.find((application) => application.jobpost === item.id);
      return (
        <tr key={item.id} className="border-b border-[#C0CDCA]">
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
    </div>
    </Layout>
  );
};
export default JobPosting;