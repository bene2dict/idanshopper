"use client";

import React, { useContext } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { RiHistoryLine } from "react-icons/ri";
import { TbCoinBitcoin } from "react-icons/tb";

import { SettingsContext } from "@/context/SettingsContext";

const SettingsLayout = ({ children }) => {
  const { focused, toggleMenu } = useContext(SettingsContext);

  const text = "Browse searched products";
  return (
    <main className="flex flex-col lg:flex-row min-h-screen px-2 lg:px-6 md:px-20 py-10 text-secondary bg-gray-50">
      <aside className="profile-menu flex-none w-full lg:w-[20rem] relative">
        <ul className="settings-options-list relative shadow-sm bg-white  flex flex-col">
          <li
            className="setting-option-item cursor-pointer"
            onClick={() => toggleMenu("earn")}
          >
            <span className="flex flex-row gap-3 items-center  p-3 hover:bg-slate-100">
              <span className="bg-slate-50 rounded-full lg:p-2">
                <TbCoinBitcoin className="w-7 h-7 text-primary" />
              </span>

              <div className="option-item-description">
                <p className="option-item-title-small text-[12px] text-slate-400">
                  Earn
                </p>
                <p className="option-item-name">Coming soon...</p>
              </div>
            </span>
          </li>
          <li
            className="setting-option-item cursor-pointer"
            onClick={() => toggleMenu("email")}
          >
            <span className="flex flex-row gap-3 items-center  p-3 hover:bg-slate-100">
              <span className="bg-slate-50 rounded-full  lg:p-2">
                <MdOutlineEmail className="w-7 h-7 text-primary" />
              </span>

              <div className="option-item-description">
                <p className="option-item-title-small text-[12px] text-slate-400">
                  Email
                </p>
                <p className="option-item-name text-md">Email@gmail.com</p>
              </div>
            </span>
          </li>
          <li className="setting-option-item">
            <span className="flex flex-row gap-3 items-center  p-3 hover:bg-slate-100">
              <span className="bg-slate-50 rounded-full  lg:p-2">
                <TbLocation className="w-7 h-7 text-primary" />
              </span>

              <div className="option-item-description">
                <p className="option-item-title-small text-[12px] text-slate-400">
                  Location
                </p>
                <p className="option-item-name text-md">Nigeria</p>
              </div>
            </span>
          </li>
          <li
            className="setting-option-item cursor-pointer"
            onClick={() => toggleMenu("history")}
          >
            <span className="flex flex-row gap-3 items-center  p-3 hover:bg-slate-100">
              <span className="bg-slate-50 rounded-full  lg:p-2">
                <RiHistoryLine className="w-7 h-7 text-primary" />
              </span>

              <div className="option-item-description">
                <p className="option-item-title-small text-[12px] text-slate-400">
                  History
                </p>
                <p className="option-item-name text-md">
                  {text.length > 15 ? text.slice(0, 15) + "..." : text}
                </p>
              </div>
            </span>
          </li>
        </ul>
      </aside>
      <section className="expanded-container mt-10 lg:mt-0 lg:ml-6 flex-1 h-auto relative">
        {children}
      </section>
    </main>
  );
};

export default SettingsLayout;
