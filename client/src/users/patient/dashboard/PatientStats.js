import React from "react";

import {StatsCard} from "../../../components/StatsCard";

export const PatientStats = ({tester, date, val, unit, header, expandedUnit}) => {
    
    const stats = [
        {
            tester: "Self",
            date: "2020-01-01",
            header: "bmi",
            val: "22",
            unit: "kg/m2",
            icon: "weight",
            expandedUnit: "Kilograms / Meters Squared",
        },
        {
            tester: "Self",
            date: "2020-01-01",
            header: "Temperature",
            val: "98.6",
            unit: "F",
            icon: "weight",
            expandedUnit: "Farhenheit",
        },
        {
            tester: "Self",
            date: "2020-01-01",
            header: "Blood Pressure",
            val: "130 / 84",
            unit: "mmHg",
            icon: "weight",
            expandedUnit: "Systolic / Diastolic",
        },
        {
            tester: "Self",
            date: "2020-01-01",
            header: "Glucose",
            val: "100 / 90",
            unit: "mg/dL",
            icon: "weight",
            expandedUnit: "Fasting / Random",
        },
        {
            tester: "Self",
            date: "2020-01-01",
            header: "Respiration",
            val: "52",
            unit: "bpm",
            icon: "weight",
            expandedUnit: "Breathe per minute",
        },
        {
            tester: "Self",
            date: "2020-01-01",
            header: "Heart Rate",
            val: "75",
            unit: "bpm",
            icon: "weight",
            expandedUnit: "Beats per minute",
        },
    ]
    
    return (
        <>
            <div className="text-black">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl">Today's Stats</h1>
                    <div className="grid grid-cols-6 gap-8 mt-6 xl:mt-12 xl:gap-12 4k-screen:grid-cols-6 laptop-screen:grid-cols-3 laptop-screen: grid-cols-3 mobile-large-screen:grid-cols-1">
                        {stats.map((item) => (
                            <StatsCard
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