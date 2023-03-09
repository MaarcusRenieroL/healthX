export const DoctorProgress = () => {
    return (<>
        <div className="grid grid-rows-3">
            <div className="p-4 pt-5 flex items-center justify-center">
                <img className="object-cover w-28 h-28 rounded-full"
                     src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Dr. Michel</h1>
                <p>General Practitioner</p>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Progress</h1>
                </div>
                <div className="relative p-5">
                    <div className="flex mb-2 items-center justify-between">
                        <div className="text-right">
                              <span className="text-md font-semibold inline-block text-cyan-600">
                                30%
                              </span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-5 mb-4 text-xs flex rounded-full bg-blue-100">
                        <div style={{width: "30%"}}
                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}