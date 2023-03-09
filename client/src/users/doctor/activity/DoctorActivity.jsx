import {Topbar} from "../../../components/Topbar";
import {DoctorSidebar} from "../../../components/DoctorSidebar";
import {Footer} from "../../../components/Footer";
import {Calendar} from "../../patient/tasks/Calendar";
import {CountCard} from "../../../components/CountCard";

export const DoctorActivity = () => {
    return (
        <>
            <div className={"flex"}>
                <DoctorSidebar />
                <div className={"w-full"}>
                    <Topbar title={"Activity"} />
                    <div className="grid grid-cols-2 p-7">
                        <div className="p-7">
                            <h1 className="text-3xl mb-10 font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Today's Schedule</h1>
                            <div className="grid grid-row-2">
                                <div className="grid grid-cols-2">
                                    <CountCard count="72" title="SCHEDULED"/>
                                    <CountCard count="12" title="WAITING"/>
                                </div>
                                <div className="grid grid-cols-2">
                                    <CountCard count="25" title="ENGAGED"/>
                                    <CountCard count="58" title="CHECKOUT"/>
                                </div>
                            </div>
                        </div>
                        <div className="p-7">
                            <Calendar />
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    );
}