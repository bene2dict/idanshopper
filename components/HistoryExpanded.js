import React from "react";
import Link from "next/link";

import { MdOutlineAutoDelete } from "react-icons/md";

const HistoryExpanded = () => {
  const link = "https://jumia.com/vehicle/product-9";
  return (
    <div className="history-expanded-container flex flex-col gap-5">
      <h1 className="text-primary text-xl font-semibold">History</h1>

      <div className="history-list-container flex flex-col gap-10 text-secondary">
        <div className="history-list-group-day bg-white p-4 flex flex-col gap-4 shadow-sm">
          <h1 className="text-primary text-lg border-b border-slate-100 pb-3">
            Today, December 19th 2024
          </h1>
          <ul className="history-list">
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited text-sm">12:00am</p>
              <Link href="" className="history-item-link">
                {link.length > 20 ? link.slice(0, 25) + "..." : link}
              </Link>
              <MdOutlineAutoDelete className="w-5 h-5 text-primary cursor-pointer" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                {link.length > 20 ? link.slice(0, 25) + "..." : link}
              </Link>
              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                {link.length > 20 ? link.slice(0, 25) + "..." : link}
              </Link>

              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
          </ul>
        </div>

        <div className="history-list-group-day bg-white p-4 flex flex-col gap-4 shadow-sm">
          <h1 className="text-primary text-lg border-b border-slate-100 pb-3">
            yesterday, December 19th 2024
          </h1>
          <ul className="history-list">
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                {link.length > 20 ? link.slice(0, 25) + "..." : link}
              </Link>
              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                {link.length > 20 ? link.slice(0, 25) + "..." : link}
              </Link>
              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                {link.length > 20 ? link.slice(0, 25) + "..." : link}
              </Link>

              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
          </ul>
        </div>

        <div className="history-list-group-day bg-white p-4 flex flex-col gap-4 shadow-sm">
          <h1 className="text-primary text-lg border-b border-slate-100 pb-3">
            Thursday, December 32th 2024
          </h1>
          <ul className="history-list">
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                https://jumia.com/vehicle/product-9
              </Link>
              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                https://jumia.com/vehicle/product-10
              </Link>
              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                https://jumia.com/vehicle/product-4
              </Link>

              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
          </ul>
        </div>

        <div className="history-list-group-day bg-white p-4 flex flex-col gap-4 shadow-sm">
          <h1 className="text-primary text-lg border-b border-slate-100 pb-3">
            Saturday, December 34th 2024
          </h1>
          <ul className="history-list">
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                https://jumia.com/vehicle/product-9
              </Link>
              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                https://jumia.com/vehicle/product-10
              </Link>
              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
            <li className="history-list-item flex flex-row justify-between items-center hover-shadow-md p-3 ">
              <p className="history-item-time-visited">12:00am</p>
              <Link href="" className="history-item-link ">
                https://jumia.com/vehicle/product-4
              </Link>

              <MdOutlineAutoDelete className="w-4 h-4 text-primary" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoryExpanded;
