import {PatientSidebar} from "../../../components/PatientSidebar";
import {Footer} from "../../../components/Footer";
import {Topbar} from "../../../components/Topbar";
import {Calendar} from "./Calendar";
import {HistoryCard} from "../history/HistoryCard";
export const PatientTasks = () => {
    return (<>
    {/*<div className="flex">*/}
    {/*    <PatientSidebar/>*/}
    {/*    <Topbar title="Tasks"/>*/}
    {/*    <div className="p-7 flex">*/}
    {/*        <div className="p-4 w-1/2">*/}
    {/*            <Calendar/>*/}
    {/*        </div>*/}
    {/*        <div className="p-4 w-1/2"/>*/}
    {/*            <HistoryCard scanName="Blood Test (Fasting)" dateTime="22/09/22 7:00AM"/>*/}
    {/*            <br/>*/}
    {/*            <HistoryCard scanName="Sugar Test (Fasting)" dateTime="25/09/22 7:30AM"/>*/}
    {/*            <br/>*/}
    {/*            <HistoryCard scanName="Mantoux test" dateTime="25/09/22 7:00PM"/>*/}
    {/*            <br/>*/}
    {/*        </div>*/}
    {/*    </div>*/}
        <div className="flex">
            <PatientSidebar/>
            <div>
                <Topbar title="Tasks"/>
                <div className="p-7 flex h-screen w-screen">
                    <div className="p-4 w-1/2">
                        <Calendar/>
                    </div>
                    <div className="p-4 w-2/5">
                        <HistoryCard scanName="Blood Test (Fasting)" dateTime="22/09/22 7:00AM"/>
                        <br/>
                        <HistoryCard scanName="Sugar Test (Fasting)" dateTime="25/09/22 7:30AM"/>
                        <br/>
                        <HistoryCard scanName="Mantoux test" dateTime="25/09/22 7:00PM"/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
</>)
}