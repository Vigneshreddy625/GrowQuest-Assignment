import React from 'react'
import ToggleSwitch from '../ToggleSwitch'
import { FaPaperclip } from 'react-icons/fa'
import "@/app/file/link.css"

function page() {
  return (
    <div>
    <div className="mb-2 border-b p-6">
      <div className='flex gap-4 mb-2'>
        <div className='w-2 h-8 bg-red-500'></div>
      <h2 className="text-xl font-bold text-black mb-4">
        Business Details
      </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 text-gray-700">
        <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Vendor ID
            </label>
            <input
              type="text"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="AMZ2034566"
              readOnly
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Legal Name*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="OlaMoney Pvt Ltd"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Trade Name*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="OlaMoney Pvt Ltd"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Vendor State*
            </label>
            <select className="mt-1 block w-full border text-black border-gray-300 shadow-sm">
              <option>Karnataka</option>
              <option>Telangana</option>
              <option>Tamil Nadu</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Vendor Location*
            </label>
            <select className="mt-1 block w-full border text-black border-gray-300 shadow-sm">
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>kolkata</option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700 mr-2">
              GST Registered
            </label>
            <ToggleSwitch />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              GST Certificate*
            </label>
            <div className="mt-1 flex justify-between bg-blue-300 border border-gray-300 py-1">
              <label className="cursor-pointer flex items-center ml-2">
                <span className="text-sm text-blue-600">
                  Browse or drop files
                </span>
                <input type="file" className="hidden" />
              </label>
              <FaPaperclip className="mr-2" />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Payment Terms
            </label>
            <input
              type="text"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="AAGCV7941K"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              PAN Attachment*
            </label>
            <div className="mt-1 flex justify-between border bg-blue-300 border-gray-300 py-1">
              <label className="cursor-pointer flex items-center ml-2">
                <span className="text-sm text-blue-600">
                  Browse or drop files
                </span>
                <input type="file" className="hidden" />
              </label>
              <FaPaperclip className="mr-2" />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Policy*
            </label>
            <select className="mt-1 block w-full border text-black border-gray-300 shadow-sm">
              <option>MarketingALL</option>
              <option>Sponsorship</option>
            </select>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 w-full mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Vendor Address
        </label>
        <input
          type="text"
          className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
        />
      </div>
    </div>
    <div className="mb-2 border-b px-6 py-2">
    <div className='flex gap-4 mb-4'>
    <div className='w-2 h-8 bg-red-500'></div>
      <h2 className="text-xl font-bold text-black">
        MSME Details
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-black">
        <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <div className=" w-full flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700 mr-2">
              MSME Registered
            </label>
            <ToggleSwitch />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              MSME Attachment*
            </label>
            <div className="mt-1 flex justify-between bg-blue-300 border border-gray-300 py-1">
              <label className="cursor-pointer flex items-center ml-2">
                <span className="text-sm text-blue-600">
                  Browse or drop files
                </span>
                <input type="file" className="hidden" />
              </label>
              <FaPaperclip className="mr-2 text-gray-700 mt-1" />
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700 mr-2">
              Lower Exception
            </label>
            <ToggleSwitch />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Lower Exception Certificate
            </label>
            <div className="mt-1 flex justify-between bg-blue-300 border border-gray-300 py-1">
              <label className="cursor-pointer flex items-center ml-2">
                <span className="text-sm text-blue-600">
                  Browse or drop files
                </span>
                <input type="file" className="hidden" />
              </label>
              <FaPaperclip className="mr-2 text-gray-700 mt-1" />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              LDC Upper Limit
            </label>
            <input
              type="text"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="50000"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              LDC Start Date*
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="date"
                className="block w-full border text-black border-gray-300 shadow-sm"
                value="2024-03-26"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              LDC End Date*
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="date"
                className="block w-full border border-gray-300 shadow-sm"
                value="2024-03-26"
              />
            </div>
          </div>
          <div className="w-full">
          </div>  
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Lower Exception Certificate
            </label>
            <div className="mt-1 flex justify-between bg-blue-300 border border-gray-300 py-1">
              <label className="cursor-pointer flex items-center ml-2">
                <span className="text-sm text-blue-600">
                  Browse or drop files
                </span>
                <input type="file" className="hidden" />
              </label>
              <FaPaperclip className="mr-2" />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              PAN Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 shadow-sm"
            />
          </div>
          </div>
        </div>
      </div>
      <div className="mb-2 border-b px-6 py-2">
      <div className='flex flex-col gap-4 mb-4'>
      <div className='w-2 h-8 bg-red-500'></div>
      <h2 className="text-xl font-bold text-black">
        Additional Location For Supply
      </h2>
      <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Location*
            </label>
            <div className="mt-1 flex justify-between bg-blue-300 border border-gray-300 py-1">
              <label className="cursor-pointer flex items-center ml-2">
                <span className="text-sm text-blue-600">
                  Mark Location
                </span>
                <input type="file" className="hidden" />
              </label>
              <FaPaperclip className="mr-2 text-gray-700 mt-1" />
            </div>
          </div>
      </div>
      
      </div>
    </div>

  )
}

export default page