import {Topbar} from "../../../components/Topbar";
import {DoctorSidebar} from "../../../components/DoctorSidebar";

export const DoctorPatients = () => {
    return (
        <>
            <div className={"flex"}>
                <DoctorSidebar />
                <div className={"w-full"}>
                    <Topbar title={"Patients"} />
                </div>
            </div>
        </>
    );
}