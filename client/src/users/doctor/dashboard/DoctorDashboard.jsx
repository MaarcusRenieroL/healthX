import {Topbar} from "../../../components/Topbar";
import {DoctorSidebar} from "../../../components/DoctorSidebar";
import {DoctorStats} from "./DoctorStats";
import {DoctorProgress} from "./DoctorProgress";
import {DoctorNotifications} from "./DoctorNotifications";
import {Footer} from "../../../components/Footer";
import {DoctorUpcomingAppointments} from "./DoctorUpcomingAppointments";
import {DoctorUpcomingEvents} from "./DoctorUpcomingEvents";
export const DoctorDashboard = () => {
    
    return (<>
        <div className="flex">
            <DoctorSidebar/>
            <div className="w-full">
                <Topbar title="Dashboard"/>
                <div className="w-full p-7">
                    <div className="grid laptop-large-screen:grid-cols-3">
                        <div className="col-span-3 grid laptop-large-screen:grid-cols-3 laptop-screen:grid-cols-1 m-4">
                            <div className="p-4">
                                <DoctorStats title="Approved" value="75"/>
                            </div>
                            <div className="p-4">
                                <DoctorStats title="Cancelled" value="30"/>
                            </div>
                            <div className="">
                                <DoctorProgress/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid 4k-screen:grid-cols-3 laptop-large-screen:grid-cols-3 laptop-screen:grid-cols-2">
                        <div className="p-4">
                            <DoctorUpcomingEvents title="Brain CT SCan" description="Report meeting with Lab technicians" dateTime={Date.now()} scanName="Brain CT scan"/>
                            <br/>
                            <DoctorUpcomingEvents title="Brain CT SCan" description="Report meeting with Lab technicians" dateTime={Date.now()} scanName="Brain CT scan"/>
                        </div>
                        <div className="p-4">
                            <DoctorUpcomingAppointments />
                        </div>
                        <div className="p-4">
                            <DoctorNotifications />
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        <Footer/>
    </>);
}