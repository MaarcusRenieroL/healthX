import {CheckIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {Avatar} from "flowbite-react";

export const DoctorUpcomingEvents = ({title, scanName, dateTime, description}) => {
    return (<div className="">
        <div className="w-full px-4 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex items-center justify-between">
                <div className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                    <Avatar.Group>
                        <Avatar
                            className="!rounded-full ring-2 ring-gray-300 dark:ring-gray-500 rounded w-10 h-10 rounded"
                            img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            rounded={true}
                            stacked={true}
                        />
                        <Avatar
                            className="!rounded-full ring-2 ring-gray-300 dark:ring-gray-500 rounded w-10 h-10 rounded"
                            img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            rounded={true}
                            stacked={true}
                        />
                        <Avatar
                            className="!rounded-full ring-2 ring-gray-300 dark:ring-gray-500 rounded w-10 h-10 rounded"
                            img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            rounded={true}
                            stacked={true}
                        />
                        <Avatar
                            className="!rounded-full ring-2 ring-gray-300 dark:ring-gray-500 rounded w-10 h-10 rounded"
                            img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                            rounded={true}
                            stacked={true}
                        />
                        <a className="relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
                           href="#">+99</a>
                    </Avatar.Group>
                    <h2 className="mt-4">
                        {scanName}
                    </h2>
                </div>
                <h5>
                    {dateTime}
                </h5>
            </div>
            
            <p className="mt-5 text-md text-gray-800 dark:text-white md:mt-3 md:text-lg lg:mt-4">
                {title}
            </p>
            
            <p className="mt-2 text-gray-600 dark:text-gray-200">
                {description}
            </p>
            
            <div className="flex justify-end mt-4">
                <button className="text-xl font-medium text-blue-600 dark:text-blue-300">
                    <div className="flex">
                        <CheckIcon className="h-6 w-6"/>
                        <XMarkIcon className="ml-4 h-6 w-6"/>
                    </div>
                </button>
            </div>
        </div>
    </div>);
}