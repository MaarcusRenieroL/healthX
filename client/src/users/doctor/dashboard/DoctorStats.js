import React from "react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export const DoctorStats = ({title, value}) => {
    let date = new Date();
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate();
    let year = date.getFullYear();
    let dateString = month + " " + day + ", " + year;
    
    return (
        <>
            <div className="w-full space-y-8 border border-gray-200 rounded-lg dark:border-gray-700">
                <div className="flex justify-between pl-7 pt-7 pr-7"> {/* Self and Date */}
                    <p className="font-medium uppercase">{dateString}</p>
                </div>
                <div className="flex flex-col text-center"> {/* Value and Unit */}
                    <h2 className="text-4xl font-bold uppercase">
                        {title}
                    </h2>
                    <span className="mt-3 text-6xl font-bold uppercase">{value}</span>
                </div>
                <div className="bg-[#121826] p-4 flex flex-row justify-between rounded-md">  {/* Text for card */}
                    <div>
                        <h2 className="text-lg uppercase text-white font-semibold">Click to view more</h2>
                    </div>
                    <div className="items-center">
                        <ArrowRightIcon className="h-6 w-6 text-white cursor-pointer" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </>
    )
}