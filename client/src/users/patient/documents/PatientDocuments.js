import {PatientSidebar} from "../../../components/PatientSidebar";
import {PatientConditions} from "./PatientConditions";
import {Footer} from "../../../components/Footer";
import {PatientReportsCard} from "../dashboard/PatientReportsCard";
import {Topbar} from "../../../components/Topbar";

export const PatientDocuments = () => {
    return (
        <>
         <div className="flex">
             <PatientSidebar />
             <div className="w-full">
                 <Topbar title="Documents" />
             <div className="p-7 w-full">
                    <div className="grid laptop-screen:grid-cols-2 tablet-screen:grid-cols-1 p-5">
                        <div className="p-4">
                            <PatientConditions />
                        </div>
                        <div className="p-4">
                            <PatientReportsCard />
                        </div>
                    </div>
             </div>
             </div>
         </div>
            <Footer />
        </>
    )
}