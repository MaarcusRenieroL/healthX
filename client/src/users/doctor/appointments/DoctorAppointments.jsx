import {Topbar} from "../../../components/Topbar";
import {DoctorSidebar} from "../../../components/DoctorSidebar";
import {AppointmentDetails} from "./AppointmentDetails";
import {PatientDetails} from "./PatientDetails";
import {Footer} from "../../../components/Footer";

export const DoctorAppointments = () => {
    return (
        <>
            <div className={"flex"}>
                <DoctorSidebar />
                <div className={"w-full"}>
                    <Topbar title={"Appointments"} />
                    <div className={"grid grid-cols-2 p-7"}>
                        <div className={"p-4"}>
                            <AppointmentDetails />
                        </div>
                        <div className={"p-4"}>
                            <PatientDetails />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}