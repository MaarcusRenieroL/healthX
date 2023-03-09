import {PatientHistoryCard} from "./PatientHistoryCard";
import {PatientHistoryDetails} from "./PatientHistoryDetails";

export const PatientDetails = () => {
    return (
        <>
        <div className="p-4">
            <div className="flex row-span-1">
                <div className="h-1/2 flex">
                    <div className="w-1/4 flex items-center justify-center">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                             className="p-4 rounded-full"/>
                    </div>
                    <div className="w-3/4 p-4 flex-col my-auto items-center justify-center">
                        <h1 className="text-2xl font-bold">Neil Sims</h1>
                        <p>20 yrs old, Male, 04/11/2022</p>
                        <p>Vellore - Chennai Rd, Rajalakshmi Nagar, Thandalam, Tamil Nadu 602105</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-bold">10 / 21</h1>
                        <p className="pt-10">Next visit</p>
                    </div>
                </div>
            
            </div>
            <div className="grid grid-cols-2 mt-0">
                <div className="p-4">
                    <PatientHistoryCard scanName="Brain CT Scan" date="29-09-2022" time="at 11:30AM"
                                    hospital="New Age Hospital"
                                    description="The ventricles, cisterns and sulci are normal for the patient's age. There is no midline shift "
                                    doctorName="Charles Reeves"
                                    className="w-full px-8 py-4 mt-4 bg-white rounded-lg shadow-lg"/>
                    <PatientHistoryCard scanName="Blood Test" date="09-05-2022" time="at 09:30AM"
                                    hospital="New Age Hospital"
                                    description="No acute intracranial haemorrhage and discrete calvarial fracture. Minimal soft tissue swelling. Left Parietal region"
                                    doctorName="Dr. Alex Reeves"
                                    className="w-full px-8 py-4 mt-4 bg-white rounded-lg shadow-lg "/>
                    <PatientHistoryCard scanName="Chest X-ray" date="29-03-2021" time="at 10:00AM"
                                    hospital="New Age Hospital"
                                    description="No sign of meningial fracture or swelling of bronchi"
                                    doctorName="Charles Reeves"
                                    className="w-full px-8 py-4 mt-4 bg-white rounded-lg shadow-lg "/>
                </div>
                <div className="p-4">
                        <PatientHistoryDetails scanName="Brain CT Scan" date="29-09-2022" time="at 11:30AM"
                                        hospital="New Age Hospital"
                                        description={<>
                                            <li>No acute intracranial haemorrhage and discrete calvarial fracture.
                                                Minimal soft tissue swelling. Left Parietal region
                                            </li>
                            
                                            <li>Dilation of 3rd and 4th lateral ventricles
                                            </li>
                            
                                            <li>Presence of Intraventricular hemorrhage
                                            </li>
                                            <li>Signs of Suprasellar cistern present
                                            </li>
                                        </>}
                                        doctorName="Dr Alex Reeves "
                                        className="w-full px-8 py-4 mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800"/>
                        <input
                            className="mt-5 block w-full text-lg p-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                                 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600
                                  dark:placeholder-gray-400"
                            id="large_size" type="file"/>
                </div>
            </div>
        </div>
    </>)
}