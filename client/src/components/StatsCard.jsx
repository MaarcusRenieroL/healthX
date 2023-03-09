import React from "react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export const StatsCard = ({tester, date, val, unit, header, expandedUnit}) => {
    return (
        <>
            <div className="w-full space-y-8 border border-gray-200 rounded-lg dark:border-gray-700">
                <div className="flex justify-between pl-7 pt-7 pr-7"> {/* Self and Date */}
                    <h4 className="font-bold uppercase">{tester}</h4>
                    <p className="font-medium uppercase">{date}</p>
                </div>
                <div className="flex flex-col text-center"> {/* Value and Unit */}
                    <h2 className="text-3xl font-bold uppercase">
                        {val}
                    </h2>
                    <span className="mt-3 text-xl font-bold uppercase">{unit}</span>
                </div>
                <div className="bg-[#121826] p-4 flex flex-row justify-between">  {/* Text for card */}
                    <div>
                        <h2 className="text-lg uppercase text-white font-semibold">{header}</h2>
                        <p className="text-xs text-white">{expandedUnit}</p>
                    </div>
                    <div className="items-center">
                        <ArrowRightIcon className="h-6 w-6 text-white cursor-pointer" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </>
    )
}