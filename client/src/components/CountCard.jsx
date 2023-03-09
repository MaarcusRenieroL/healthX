import React from "react";

export const CountCard = ({count, title}) => {
    return (
        <>
            <div className="h-full w-full">
                <div className="px-6 py-8">
                    <div className="w-full h-full p-4 space-y-8 bg-white border border-gray-200 rounded-lg dark:border-gray-700">
                        <div className="flex flex-col text-center"> {/* Value and Unit */}
                            <h2 className="text-lg text-black uppercase font-semibold">{count}</h2>
                            <p className="text-sm text-black">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}