export const HistoryCard = ({scanName, dateTime, hospital, description, doctorName}) => {
    return (
        <div className="">
            <div className="w-full px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                        {scanName}
                    </h2>
                    <h5 className="text-white">
                        {dateTime}
                    </h5>
                </div>
                
                <p className="mt-5 text-md text-gray-800 dark:text-white md:mt-3 md:text-lg lg:mt-4">
                    {hospital}
                </p>
                
                <p className="mt-2 text-gray-600 dark:text-gray-200">
                    {description}
                </p>
                
                <div className="flex justify-end mt-4">
                    <button className="text-xl font-medium text-blue-600 dark:text-blue-300">
                        {doctorName}
                    </button>
                </div>
            </div>
        </div>
    );
}