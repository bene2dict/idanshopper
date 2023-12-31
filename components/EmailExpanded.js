// import React from 'react'
import { SettingsContext } from "@/context/SettingsContext";
import { useContext } from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { BsEnvelopePlus } from "react-icons/bs";

const EmailExpanded = () => {
  const { status } = useContext(SettingsContext);

  const email = "mail@gmail.com";
  return (
    <div className="history-list-item  flex flex-col gap-16 hover-shadow-md p-3 ">
      <h1 className="text-2xl font-bold text-primary">Emails</h1>

      <div className="relative flex flex-col gap-5 items-center">
        <div
          className={`history-list-item w-full flex flex-row justify-between items-center hover-shadow-md p-3 bg-white shadow-sm rounded-bl-md rounded-tr-md ${
            true
              ? "border-b-4 border-r-4 border-b-primary-green border-r-primary-green"
              : "border-b-4 border-r-4 border-b-primary border-r-primary"
          }`}
        >
          <div className="flex flex-row items-center gap-3 ">
            <FaEdit className="w-6 h-6 text-slate-400 hover:text-primary-orange cursor-pointer" />
            <span className="flex flex-col">
              <p className="text-[12px] font-bold text-primary-green">
                Primary Email
              </p>
              <p href="" className="history-item-link">
                {email.length > 20 ? link.slice(0, 25) + "..." : email}
              </p>
            </span>
          </div>

          <span className="flex flex-row items-center gap-2">
            <GrStatusGoodSmall
              className={`w-5 h-5 ${
                true ? "text-primary-green" : "text-primary"
              } cursor-pointer`}
            />
            <p
              className={`${
                true ? "text-primary-green" : "text-primary"
              } text-[12px]`}
            >
              {true ? "active" : "not-active"}
            </p>
          </span>
        </div>

        <div
          className={`history-list-item w-full flex flex-row justify-between items-center hover-shadow-md p-3 bg-white shadow-sm rounded-bl-md rounded-tr-md ${
            status
              ? "border-b-4 border-r-4 border-b-primary-green border-r-primary-green"
              : "border-b-4 border-r-4 border-b-primary border-r-primary"
          }`}
        >
          <div className="flex flex-row items-center gap-3 ">
            <FaEdit className="w-6 h-6 text-slate-400 hover:text-primary-orange cursor-pointer" />
            <span className="flex flex-col">
              <p className="text-[12px] font-normal text-primary">
                Secondary Email
              </p>
              <p href="" className="history-item-link">
                {email.length > 20 ? link.slice(0, 25) + "..." : email}
              </p>
            </span>
          </div>

          <span className="flex flex-row items-center gap-2">
            <GrStatusGoodSmall className="w-5 h-5 text-primary cursor-pointer" />
            <p
              className={`${
                status ? "text-primary-green" : "text-primary"
              } text-[12px]`}
            >
              {status ? "active" : "not-active"}
            </p>
          </span>
        </div>
        <div className="flex flex-row gap-5 items-center bg-white p-3 px-6 hover:text-primary rounded-md shadow-sm hover:shadow-md text-sm cursor-pointer">
          <BsEnvelopePlus className="w-8 h-8" />
          <span>Add Email</span>
        </div>
      </div>
    </div>
  );
};

export default EmailExpanded;
