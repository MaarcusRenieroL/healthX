import React from "react";
import {AdminSidebar} from "../../../components/AdminSidebar";
import {Topbar} from "../../../components/Topbar";

export const AdminAnalytics = () => {
    return (
        <div className="flex">
            <AdminSidebar/>
            <div className="w-full">
                <Topbar title="Analytics"/>
                <div className="p-7">
                    <h1>Admin Analytics</h1>
                </div>
            </div>
        </div>
    );
}