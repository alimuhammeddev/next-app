'use client'; // Marks this file as a Client Component

import React from "react";

export function Agent({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg lg:w-[1000px] w-fit-content">
          <h2 className="text-lg font-semibold mb-4 text-blue-500">
            Agent Skill
          </h2>
          <div className="bg-white shadow-2xl p-5 rounded-lg">
            <h3 className="text-blue-500 font-semibold">
              Check if on-hand inventory will allow all sales orders to ship
              without delay
            </h3>
            <p className="text-blue-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              aspernatur, reiciendis quo deleniti quod vel dolores doloribus
              ratione earum officia, unde consequatur repellat repudiandae
              placeat quos temporibus distinctio dignissimos inventore explicabo
              deserunt dicta. Dolorem quia, alias quis optio praesentium ab
              voluptatum ratione dolore mollitia nesciunt blanditiis illum
              dolorum, quisquam corrupti.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-blue-500 mt-5">
              Enable Email Access
            </h1>
            <p className="text-blue-500">
              Allow the agent to access email inboxes to read mail from unkown
              vendors
            </p>
            <div>
              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  className="peer h-8 text-black w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Email
                </span>
              </label>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Allow access
              </button>
            </div>
          </div>
          <div className="flex items-center gap-10 justify-end">
            <button className="mt-4 bg-gray-200 text-gray-500 px-4 py-2 rounded">
              Activate
            </button>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
