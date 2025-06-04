'use client'

import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface SpringbedSeriesItem {
  id: string;
  title: string;
  desc: string;
  details: string;
  icon: React.ReactNode;
}

interface CreateNewProps {
  springbedSeriesEntries: SpringbedSeriesItem[];
}

export default function CreateNew({ springbedSeriesEntries }: CreateNewProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col bg-background rounded-2xl">
      {springbedSeriesEntries.map((series, index) => {
        const isFirst = index === 0;
        const isLast = index === springbedSeriesEntries.length - 1;

        return (  
          <div
            key={series.id}
            className={`shadow overflow-hidden transition-all ${isFirst ? 'rounded-t-2xl' : isLast ? 'rounded-b-2xl' : ''}`}
          >
            <button
              onClick={() => toggle(series.id)}
              className={`w-full p-4 flex items-center justify-between ${openId === series.id ? "" : "hover:bg-[#e5f3f1] dark:hover:bg-[#111d1a]"} group transition-all ease-in-out duration-200`}
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                  {series.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold text-[var(--primary)]`}>{series.title}</h3>
                  <p className={`text-sm text-gray-800 dark:text-gray-200 font-semibold`}>{series.desc}</p>
                </div>
              </div>
              {openId === series.id ? 
                <span className="text-xl rounded-full bg-muted p-2"><ChevronDownIcon className="w-6 h-6"/></span> : 
                <span className="text-xl p-2"><ChevronUpIcon className="w-6 h-6"/></span>
              }
            </button>
            {openId === series.id && (
              <div className="p-4 pt-0">
                <div className="text-gray-600 dark:text-gray-200 text-sm sm:text-md font-medium bg-muted p-4 rounded-xl">
                  <p>{series.details}</p>
                  <a href="#" className="inline-block mt-3 text-[#2BA799] font-semibold hover:underline">
                    Lihat Detail →
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      )}
    </div>
  );
}

CreateNew.displayName = "CreateNew";
