import {PatientList} from "./PatientList";

export const AppointmentDetails = () => {
    return (
        <div className={"p-4"}>
            <h1 className={"text-2xl font-bold"}>Appointment Details</h1>
            <div className={"pt-4"}>
                <PatientList />
            </div>
        </div>
    )
}