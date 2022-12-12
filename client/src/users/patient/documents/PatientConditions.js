import React from "react";

const conditions = [
    {
        name: "Night Blindness",
        period: "10 Jan 2020",
        severity: "Complaint",
    },
    {
        name: "Knee Pain",
        period: "10 Dec 2020",
        severity: "Severe",
    },
    {
        name: "UTI",
        period: "10 Nov 2020",
        severity: "Moderate",
    },
    {
        name: "Dizziness",
        period: "6 Sep 2021",
        severity: "Mild",
    },
    {
        name: "Fever",
        period: "10 Jan 2020",
        severity: "Mild",
    },
    {
        name: "Headache",
        period: "10 Jan 2021",
        severity: "Mild",
    },
    {
        name: "Headache",
        period: "10 Jan 2021",
        severity: "Mild",
    },
]

export const PatientConditions = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full">
                            <h1 className="text-2xl">Conditions</h1>
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="min-w-max w-full table-auto text-black">
                                    <thead>
                                    <tr className="uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-center">Name</th>
                                        <th className="py-3 px-6 text-center">Period</th>
                                        <th className="py-3 px-6 text-center">Severity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {conditions.map((condition) => {
                                        return (
                                            <tr className="border-b border-gray-200">
                                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                                    <div className="flex items-center text-center">
                                                        <span className="text-center">
                                                            {condition.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-3 text-center whitespace-nowrap">
                                                    <div className="flex items-center text-center">
                                                        <span className="text-center">
                                                            {condition.period}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-3 text-center whitespace-nowrap">
                                                    <div className="flex items-center text-center">
                                                        <span className="text-center">
                                                            {condition.severity}
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}