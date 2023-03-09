import React from "react";
import {PatientSidebar} from "../../../components/PatientSidebar";
import {PatientStats} from "./PatientStats";
import {PatientHistoryCard} from "./PatientHistoryCard";
import {PatientUpcomingAppointments} from "./PatientUpcomingAppointments";
import {PatientReportsCard} from "./PatientReportsCard";
import {Footer} from "../../../components/Footer";
import {Topbar} from "../../../components/Topbar";

export const PatientDashboard = () => {
    return (<>
            <div className="flex">
                <PatientSidebar/>
                <div className="w-full">
                    <Topbar title="Dashboard"/>
                    <div className="p-7">
                        <PatientStats/>
                        <div
                            className="grid 4k-screen:grid-cols-3 laptop-large-screen:grid-cols-3 laptop-screen:grid-cols-1 tablet-screen:grid-cols-1">
                            <div className="p-4 w-full">
                                <h4 className="text-2xl font-bold">Your History</h4>
                                <PatientHistoryCard scanName="Blood Test" dateTime="29-10-2022 at 9:30AM"
                                                    hospital="Lab, New Age Hospital"
                                                    description="Triglyceride is indicated too high for an accurate LDL cholestrol estimation."
                                                    doctorName="Techn. James Matthew" classname="mt-10"/>
                                <PatientHistoryCard scanName="X-Ray" dateTime="10-08-2022 at 10:30PM"
                                                    hospital="Casualty, New Age Hospital"
                                                    description="Patient arrived with a critical injury in the scapula, and some bleeding, Report indicates the scapular region has a minor ligament tear."
                                                    doctorName="Dr. Robin Scherbatsky" classname="mt-10"/>
                            </div>
                            <div className="p-4 w-full">
                                <h4 className="text-2xl font-bold mb-10">Your Appointments</h4>
                                <PatientUpcomingAppointments/>
                            </div>
                            <div className="p-4 w-full">
                                <h4 className="text-2xl font-bold mb-10">Your Reports</h4>
                                <PatientReportsCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>)
}