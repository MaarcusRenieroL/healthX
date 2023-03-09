import React from "react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export const AdminStatsCard = ({tester, date, val, unit, header, expandedUnit}) => {
    return (
        <>
            <div className="w-full space-y-8 border border-gray-200 rounded-lg dark:border-gray-700">
                <div className="mt-3 flex flex-col text-center"> {/* Value and Unit */}
                    <h2 className="text-3xl font-bold uppercase">
                        {val}
                    </h2>
                    <span className="mt-3 text-2xl font-bold uppercase">{unit}</span>
                </div>
                <div className="bg-[#121826] p-4 flex flex-row justify-between">  {/* Text for card */}
                    <div>
                        <p className="text-lg text-white">View More</p>
                    </div>
                    <div className="items-center">
                        <ArrowRightIcon className="h-6 w-6 text-white cursor-pointer" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </>
    )
}