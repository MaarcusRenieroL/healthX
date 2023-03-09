import React from "react";
import {AdminSidebar} from "../../../components/AdminSidebar";
import {AdminStats} from "./AdminStats";

import {Topbar} from "../../../components/Topbar";


export const AdminDashboard = () => {
    return (
        <div className="flex">
            <AdminSidebar/>
            <div className="w-full">
                <Topbar title="Dashboard"/>
                <div className="p-7">
                    <div>
                        <AdminStats />
                    </div>
                </div>
            </div>
        </div>
    );
}