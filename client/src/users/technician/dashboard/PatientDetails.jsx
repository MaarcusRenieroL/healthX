import {PatientHistoryCard} from "./PatientHistoryCard";

export const PatientDetails = () => {
    return (
        <>
            <div className="p-4">
                <div className="p-4">
                    <div className="flex row-span-1">
                        <div className="h-1/2 flex">
                            <div className="w-1/4 flex items-center justify-center">
                                <img src="https://media.istockphoto.com/photos/portrait-of-a-smiling-scientist-at-laboratory-picture-id1186418579?k=20&m=1186418579&s=612x612&w=0&h=_9VCV1RXMd-nGL3seexNGzeLnX7P7ouyghLn7D1cpF4="
                                     className="p-4 rounded-lg" />
                            </div>
                            <div className="w-3/4 p-4 flex-col my-auto items-center justify-center">
                                <h1 className="text-2xl font-bold">Maxwell</h1>
                                <p>20 yrs old, Male, 22/05/2022</p>
                                <p>Vellore - Chennai Rd, Rajalakshmi Nagar, Thandalam, Tamil Nadu 602105</p>
                            </div>
                            <div className="w-1/4 flex flex-col items-center justify-center">
                                <h1 className="text-5xl font-bold">10 / 21</h1>
                            </div>
                        </div>
            
                    </div>
                    <div className="">
                        <div className="p-4">
                            <PatientHistoryCard scanName="Sugar Level" date="19-05-2022" time="at 07:30AM"
                                            hospital="Lab, New Age Hospital"
                                            description="Triglyceride is indicated too high for an accurate LDL cholestrol estimation."
                                            doctorName="Techn. James Matthew"
                                            className="w-full px-8 py-4 mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800" />
                            <PatientHistoryCard scanName="Blood Test" date="29-10-2022" time="at 09:30AM"
                                            hospital="Lab, New Age Hospital"
                                            description="Platelets count is comparatively less, can be a symptom of chronic disease "
                                            doctorName="Techn. Charles Reeves"
                                            className="w-full px-8 py-4 mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800" />
                        </div>
                
                
                
                        <div className="p-4">
                            <label className="block mb-2 font-bold text-lg font-medium text-white"
                                   htmlFor="multiple_files">Upload files</label>
                            <input
                                className="block w-full text-md p-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="multiple_files" type="file" multiple="" />
                        </div>
            
                    </div>
                </div>
            </div>
        </>
    )
}