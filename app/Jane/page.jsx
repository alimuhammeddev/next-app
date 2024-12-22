"use client";

import Image from "next/image";
import React, { useState } from "react";

export const Jane = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = () => {
    setIsPopupOpen(true); // Opens the popup when the background is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Closes the popup
  };

  return (
    <div>
      <div>
        {/* Card with background click to show popup */}
        <div
          className="bg-gray-200 p-2 w-full rounded-xl mt-3 cursor-pointer hover:shadow-lg transition duration-500"
          onClick={handleCardClick}
        >
          <div className="flex items-center gap-1">
            <i className="bx bx-envelope text-xl text-gray-600"></i>
            <p className="font-semibold">Engage with Jane Rayes</p>
          </div>
          <h1>
            Jane may be interested in upgrading Paydem to suit customers'
            expectations.
          </h1>
        </div>

        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-10 z-10 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg relative">
              {/* Cancel button at top-right corner */}
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                <i className="bx bx-x text-2xl"></i>
              </button>

              <h2 className="lg:text-[30px] font-semibold">
                Engage with Jane Rayes
              </h2>
              <div className="flex items-center gap-3">
                <Image
                  src="/woman1.jpg"
                  alt="CRM Dashboard"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-semibold">Jane Rayes</h1>
                  <p className="text-sm">CEO Paydem</p>
                </div>
              </div>
              <h2 className="font-semibold mt-2">About Jane</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br className="lg:block hidden"/>{" "}
                Minima placeat mollitia esse adipisci sunt! Natus laborum <br className="lg:block hidden"/>{" "}
                voluptatum id enim, dolorum, consequuntur cupiditate nesciunt{" "}
                <br className="lg:block hidden"/> autem placeat molestias accusantium totam perspiciatis
                inventore?
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
