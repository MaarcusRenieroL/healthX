import {Topbar} from "../../../components/Topbar";
import {DoctorSidebar} from "../../../components/DoctorSidebar";

export const DoctorPatients = () => {
    return (
        <>
            <Topbar title="Patients" />
            <div className="flex flex-col md:flex-row">
                <DoctorSidebar />
                <div className="w-full">
                    Doctor Patients
                </div>
            </div>
        </>
    );
}