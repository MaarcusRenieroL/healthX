export const PatientHistoryCard = ({scanName, date, time, hospital, description, doctorName, className}) => {
    return (
        <div className="">
            <div className={className}>
                <div className="flex items-center justify-between">
                    <h2 className={`mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl`}>
                        {scanName}
                    </h2>
                    <div className="flex flex-col">
                        <h5 className="text-sm text-right">
                            {date}
                        </h5>
                        <h5 className="text-sm text-right">
                            {time}
                        </h5>
                    </div>
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