import React, { useState } from "react";

export const Table = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track search input
  const [data] = useState([
    { id: 1, name: "John Doe", topic: "Topic 1", statusReason: "Active", createdOn: "2024-12-01" },
    { id: 2, name: "Jane Smith", topic: "Topic 2", statusReason: "Inactive", createdOn: "2024-12-02" },
    { id: 3, name: "Michael Brown", topic: "Topic 3", statusReason: "Pending", createdOn: "2024-12-03" },
    { id: 4, name: "Emily Davis", topic: "Topic 4", statusReason: "Active", createdOn: "2024-12-04" },
  ]);

  // Filter data based on search term
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.statusReason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.createdOn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:p-4">
      {/* Search Input */}
      <div className="relative mb-4">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder="Search"
          className="w-full rounded-md border-gray-200 py-2.5 px-4 shadow-sm sm:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>

      {/* Table */}
      <div className="">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 lg:px-24 px-4 py-2">Name</th>
              <th className="border border-gray-300 lg:px-24 px-4 py-2">Topic</th>
              <th className="border border-gray-300 lg:px-24 px-4 py-2">Status Reason</th>
              <th className="border border-gray-300 lg:px-24 px-4 py-2">Created On</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 lg:px-24 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 lg:px-24 px-4 py-2">{item.topic}</td>
                  <td className="border border-gray-300 lg:px-24 px-4 py-2">{item.statusReason}</td>
                  <td className="border border-gray-300 lg:px-24 px-4 py-2">{item.createdOn}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center border border-gray-300 px-4 py-2 text-gray-500"
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};