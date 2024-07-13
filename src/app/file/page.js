import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import "@/app/file/link.css";

function VendorRequestDetails() {
  return (
    <div className="mb-4">
      <div className="border-b p-6">
        <div className="flex flex-row gap-4 mb-2">
          <div className="w-2 h-8 bg-red-500"></div>
          <h2 className="text-xl font-bold text-black mb-4">
            Vendor Request Details
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Request ID
            </label>
            <input
              type="text"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="REQ202345"
              readOnly
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Request Type*
            </label>
            <select className="mt-1 block w-full border text-black border-gray-300 shadow-sm">
              <option>Product Purchase</option>
              <option>Service Request</option>
              <option>Technical Support</option>
              <option>Other</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Requested By*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="John Doe"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Request Date*
            </label>
            <input
              type="date"
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              value="2024-07-13"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Description*
            </label>
            <textarea
              className="mt-1 block w-full border text-black border-gray-300 shadow-sm"
              rows="4"
              placeholder="Enter description..."
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">
              Urgency
            </label>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorRequestDetails;
