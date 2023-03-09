import React from "react";

export const EmployeesList = () => {
    
    return (<>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full lg:w-5/6">
                            <button className="items-end rounded-full bg-gray-500 p-2">
                                Refresh
                            </button>
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="min-w-max w-full table-auto text-black">
                                    <thead>
                                    <tr className="uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">ID</th>
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-left">Email</th>
                                        <th className="py-3 px-6 text-center">Type</th>
                                        <th className="py-3 px-6 text-center">Age</th>
                                        <th className="py-3 px-6 text-center">Gender</th>
                                        <th className="py-3 px-6 text-center">Phone Number</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="font-medium">1</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span>Name</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span>Email</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>Type</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>Age</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>Gender</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>Phone Number</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex item-center justify-center">
                                                    <button
                                                        className=" p-1 mr-2 ml-4 rounded-full bg-green-500 transform hover:scale-110">
                                                        Edit
                                                    </button>
                                                    <button
                                                        className=" p-1 mr-2 ml-4 rounded-full bg-red-500 transform hover:scale-110">
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                
                                </table>
                                <div className="py-3 px-6">
                                    <div className="flex flex-col items-center">
                                    <span className="text-sm text-gray-700 dark:text-gray-400">
                                        Showing
                                        <span className="font-semibold pl-1 pr-1">
                                            1
                                        </span>
                                        to
                                        <span className="font-semibold pl-1 pr-1">
                                            10
                                        </span>
                                        of
                                        <span className="font-semibold pl-1 pr-1">
                                            100
                                        </span>
                                        Entries
                                    </span>
                                        <div className="inline-flex mt-2 xs:mt-0">
                                            <button
                                                className="inline-flex items-center py-2 px-4 text-sm font-medium bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                                                <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor"
                                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                Prev
                                            </button>
                                            <button
                                                className="inline-flex items-center py-2 px-4 text-sm font-medium bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                                                Next
                                                <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor"
                                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}