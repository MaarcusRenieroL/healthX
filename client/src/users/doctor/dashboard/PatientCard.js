export const PatientCard = ({imgSrc, name, deptName, dateTime}) => {
    return (
        <>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 p-4 sm:py-4 rounded-full hover:bg-blue-500">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={imgSrc}
                                    alt=""
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                    {name}
                                </p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                    {deptName}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <p>
                                    {dateTime}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}