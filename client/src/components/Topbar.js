import React from "react";

export const Topbar = ({title}) => {
    return (
        <div className="w-full h-24 bg-[#121826] p-8">
            <h1 className="text-white font-bold text-2xl flex">{title}</h1>
        </div>
    )
}