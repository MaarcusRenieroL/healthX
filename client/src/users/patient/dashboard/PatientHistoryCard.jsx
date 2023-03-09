import React from "react";

export const PatientHistoryCard = ({scanName, dateTime, hospital, description, doctorName, classname}) => {
    return (
        <>
            <div className={`w - full text-white px-8 py-4 bg-[#121826] rounded-lg shadow-lg ` + classname}>
                <div className="flex items-center justify-between">
                    <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                        {scanName}
                    </h2>
                    <h5>
                        {dateTime}
                    </h5>
                </div>
                
                <p className="mt-5 text-md text-gray-800 dark:text-white md:mt-3 md:text-lg lg:mt-4">
                    {hospital}
                </p>
                
                <p className="mt-2 text-gray-600 dark:text-gray-200">
                    {description}
                </p>
                
                <div className="flex justify-end mt-4">
                    <button className="text-xl font-medium text-blue-600 dark:text-blue-300">
                        {doctorName}
                    </button>
                </div>
            </div>
        </>
    );
}