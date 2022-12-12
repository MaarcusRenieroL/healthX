import React from "react";

import { TechnicianSidebar } from "../../../components/TechnicianSidebar";
import { Topbar } from "../../../components/Topbar";

import {TechnicianStatsCard} from "./TechnicianStatsCard";
import {TechnicianAppointments} from "./TechnicianAppointments";
import {PatientDetails} from "./PatientDetails";
import {Footer} from "../../../components/Footer";

export const TechnicianDashboard = () => {
    return (
        <>
            <div className="flex">
                <TechnicianSidebar />
                <div className="w-full">
                    <Topbar title="Dashboard" />
                    <div className="p-7">
                        <div className="grid laptop-large-screen:grid-cols-2 laptop-screen:grid-cols-1">
                            <div className="grid grid-rows-2 h-3/4">
                                <div className="grid grid-cols-2 m-3 h-3/4">
                                    <div className="p-4">
                                        <TechnicianStatsCard title="Waiting" value="10" />
                                    </div>
                                    <div className="p-4">
                                        <TechnicianStatsCard title="Approved" value="10" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <TechnicianAppointments />
                                </div>
                            </div>
                            <div>
                                <PatientDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}