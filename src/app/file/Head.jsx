import React from "react";
import {
  FaInfoCircle,
  FaFileAlt,
  FaClock,
  FaComment,
  FaDownload,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const Head = () => {
  return (
    <div className="flex flex-wrap items-center justify-between p-4">
      <div className="flex items-center flex-wrap">
        <button className="text-gray-600">
          <FaArrowLeft />
        </button>
        <span className="ml-4 text-md font-semibold text-black">
          OlaMoney Technologies India Pvt Ltd
        </span>
        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm ml-4 mt-2 border-2 border-purple-700">
          Awaiting Business Approval
        </span>
        <div className="flex items-center flex-wrap lg:ml-4 space-x-2">
          <Icon icon={<FaInfoCircle />} />
          <Icon icon={<FaFileAlt />} />
          <Icon icon={<FaClock />} />
          <Icon icon={<FaComment />} />
          <Icon icon={<FaDownload />} />
          <Icon icon={<FaArrowRight />} />
        </div>
      </div>
      <div className="flex items-center mt-2 md:mr-6 md:mt-0">
        <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm mr-4">
          Save Draft
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex justify-center items-center">
          Submit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 ml-1 mt-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12h16m0 0l-4 4m4-4l-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Icon = ({ icon }) => (
  <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 cursor-pointer mx-2 text-black">
    {icon}
  </div>
);

export default Head;
