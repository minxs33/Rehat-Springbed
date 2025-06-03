'use client'

import { useState } from "react";
import { springbedSeries } from "../data/springbedSeries";

export default function CreateNew() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col bg-background rounded-2xl">
      {springbedSeries.map((series,index) => {
        const isFirst = index === 0;
        const isLast = index === springbedSeries.length - 1;

        return (  
          <div
            key={series.id}
            className={`shadow overflow-hidden transition-all ${isFirst ? 'rounded-t-2xl' : isLast ? 'rounded-b-2xl' : ''}`}
          >
            <button
              onClick={() => toggle(series.id)}
              className="w-full p-4 flex items-center justify-between hover:bg-[var(--primary)] dark:hover:bg-gray-800 group"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                  {series.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--primary)] group-hover:text-white">{series.title}</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400 group-hover:text-white font-semibold">{series.desc}</p>
                </div>
              </div>
              <span className="text-xl">{openId === series.id ? "−" : "+"}</span>
            </button>
            {openId === series.id && (
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 text-sm sm:text-md font-medium">
                <p>{series.details}</p>
                <a href="#" className="inline-block mt-3 text-[#2BA799] font-semibold hover:underline">
                  Lihat Detail →
                </a>
              </div>
            )}
          </div>
        )}
      )}
    </div>
  );
}

CreateNew.displayName = "CreateNew";
