import React from "react";

import {AdminStatsCard} from "./AdminStatsCard";

export const AdminStats = ({tester, date, val, unit, header, expandedUnit}) => {
    
    const stats = [
        {
            val: "Active Doctors",
            unit: "130",
        },
        {
            val: "Active Patients",
            unit: "1350",
        },
        {
            val: "Active Employees",
            unit: "85",
        },
    ]
    
    return (
        <>
            <div className="text-black">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl">Today's Stats</h1>
                    <div className="grid grid-cols-3 gap-8 mt-6 xl:mt-12 xl:gap-12 tablet-screen:grid-cols-3 mobile-large-screen:grid-cols-1">
                        {stats.map((item) => (
                            <AdminStatsCard
                                key={item.header}
                                tester={item.tester}
                                date={item.date}
                                val={item.val}
                                unit={item.unit}
                                header={item.header}
                                expandedUnit={item.expandedUnit}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};