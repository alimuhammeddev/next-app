"use client";

import Image from "next/image";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Table } from "../Table/page";
import { Jane } from "../Jane/page";
import { Emily } from "../Emily/page";
import { Agent } from "../AgentSkill/page";

export default function Hero() {
  const [active, setActive] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAgentSkillPopupOpen, setIsAgentSkillPopupOpen] = useState(false);

  const links = [
    "Home",
    "Recent",
    "Pinned",
    "Agent Skill",
    "My Work",
    "Settings",
  ];

  const handleLinkClick = (link) => {
    setActive(link);
    if (link === "Agent Skill") {
      setIsAgentSkillPopupOpen(true); // Open the Agent Skill popup
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar for Small Screens */}
      <div className="md:hidden bg-blue-500 text-white p-4 flex items-center justify-between">
        <h1 className="font-semibold text-lg">CRM Dashboard</h1>
        <button className="text-2xl" onClick={() => setIsSidebarOpen(true)}>
          <i className="bx bx-menu"></i>
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 bg-blue-500 shadow-lg h-full text-white transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative z-50`}
        >
          <div className="p-6 text-lg font-semibold border-b text-white">
            CRM Dashboard
            <button
              className="md:hidden absolute top-6 right-6 text-white text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              &times;
            </button>
          </div>
          <ul className="mt-6">
            {links.map((link) => (
              <li
                key={link}
                className={`px-6 py-3 cursor-pointer ${
                  active === link
                    ? "bg-white text-blue-500"
                    : "hover:bg-blue-400"
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-8 pt-16 md:pt-8">
          {/* Insights Panel */}
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-xl mb-8">
            <h2 className="text-2xl font-bold">Hi Mona,</h2>
            <p className="mt-2 text-lg font-bold">
              68% of your goal has been achieved!
            </p>
            <div>
              <h1>
                CRM Dashboard has 30 key leads that show a detailed and strong
                purchase intent and are actively engaging. These leads need your
                focus.
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
                <div className="bg-white text-blue-500 w-full md:w-fit p-3 rounded-2xl">
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
                  <Jane />
                  <p className="mt-8">Expand business. High buying intent</p>
                </div>

                <div className="bg-white text-blue-500 w-full md:w-fit p-3 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/woman2.jpg"
                      alt="CRM Dashboard"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold">Emily Lewis</h1>
                      <p className="text-sm">CEO EL Stores</p>
                    </div>
                  </div>
                  <Emily />
                  <p className="mt-2">Expand business. High buying intent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-blue-500">
            {/* Leads */}
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Leads</h3>
              <p>25 New Leads</p>
            </div>

            {/* Opportunities */}
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Opportunities</h3>
              <p>15 Active Opportunities</p>
            </div>

            {/* Key Activities */}
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Activities</h3>
              <ul className="list-disc pl-4">
                <li>Follow-up with John</li>
                <li>Schedule Demo with Sarah</li>
                <li>Send Proposal to Smith Corp.</li>
              </ul>
            </div>
            <Table />
          </div>
        </div>
      </div>

      <Agent
        isOpen={isAgentSkillPopupOpen}
        onClose={() => setIsAgentSkillPopupOpen(false)}
      />
    </div>
  );
}
