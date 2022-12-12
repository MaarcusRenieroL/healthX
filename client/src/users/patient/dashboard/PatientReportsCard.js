import { Card } from "flowbite-react"

const users = [
    {
        name: "Blood Test",
        date: "12/1/2022",
    },
    {
        name: "Chest X-Ray Report",
        date: "12/1/2022",
    },
    {
        name: "Sugar Test",
        date: "12/1/2022",
    },
    {
        name: "Haemoglobin Test",
        date: "24/12/2021",
    },
    {
        name: "Liver Panel",
        date: "24/12/2021",
    },
    {
        name: "Liver Panel",
        date: "22/12/2021",
    },
    {
        name: "Liver Panel",
        date: "20/12/2021",
    },
];
export const PatientReportsCard = () => {
    return (
        <div className="text-white">
            <Card className="bg-[#121826]">
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none">
                        Report
                    </h5>
                    
                    <a
                        href="/patient/history"
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        View all
                    </a>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {users.map((user) => (
                            <li className="py-3 sm:py-4 hover:bg-blue-500 rounded-lg p-3">
                                <div className="flex items-center space-x-4">
                                    
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            {user.name}
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            {user.date}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <a href="/frontend/src/pages" className="text-sm">Download</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </div>
    )
}