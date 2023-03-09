import {PatientSidebar} from "../../../components/PatientSidebar";
import {HistoryCard} from "./HistoryCard";
import {Footer} from "../../../components/Footer";
import {Topbar} from "../../../components/Topbar";


export const PatientHistory = () => {
    return (
        <>
            <div className="flex">
                <PatientSidebar />
                <div className="w-full">
                    <Topbar title="History" />
                <div className="p-7">
                    <div className="grid 4k-screen:grid-cols-3 laptop-screen:grid-cols-2 mobile-large-screen:grid-cols-1">
                        <div className="p-4">
                            <HistoryCard scanName="Blood Test" dateTime= "29-10-2022 at 9:30AM" hospital="Lab, New Age Hospital" description="Platelets count is comparatively less, can be a symptom of chronic disease " doctorName="Techn. James Matthew"/>
                        </div>
                        <div className="p-4">
                            <HistoryCard scanName="X-Ray" dateTime= "10-08-2022 at 10:30PM" hospital="Casualty, New Age Hospital" description="Patient arrived with a critical injury in the scapula, and some bleeding, Report indicates the scapular region has a minor ligament tear." doctorName="Dr. Robin Scherbatsky"/>
                        </div>
                        <div className="p-4">
                            <HistoryCard scanName="Sugar level" dateTime= "19-05-2022 at 7:30AM" hospital="Lab, New Age Hospital" description="Triglyceride is indicated too high for an accurate LDL cholestrol estimation." doctorName="Techn. James Matthew"/>
                        </div>
                        <div className="p-4">
                            <HistoryCard scanName="X-Ray" dateTime= "10-08-2022 at 10:30PM" hospital="Casualty, New Age Hospital" description="Patient arrived with a critical injury in the scapula, and some bleeding, Report indicates the scapular region has a minor ligament tear." doctorName="Dr. Robin Scherbatsky"/>
                        </div>
                        <div className="p-4">
                            <HistoryCard scanName="Sugar level" dateTime= "19-05-2022 at 7:30AM" hospital="Lab, New Age Hospital" description="Triglyceride is indicated too high for an accurate LDL cholestrol estimation." doctorName="Techn. James Matthew"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}