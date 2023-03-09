import React from "react";
import {AdminSidebar} from "../../../components/AdminSidebar";
import {Topbar} from "../../../components/Topbar";
import {Footer} from "../../../components/Footer";
import {EmployeesList} from "./EmployeesList"

export const AdminEmployees = () => {
    return (
        <>
            <div className="flex">
                <AdminSidebar/>
                <div className="w-full">
                    <Topbar title="Employees"/>
                    <div className="p-7">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col text-left">
                                <div className="text-2xl font-bold">Employees</div>
                            </div>
                        </div>
                        <EmployeesList />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}