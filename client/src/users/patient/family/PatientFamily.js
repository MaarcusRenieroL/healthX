import {PatientSidebar} from "../../../components/PatientSidebar";
import {Footer} from "../../../components/Footer";
import React from "react";
import {FamilyMember} from "./FamilyMember";
import {Topbar} from "../../../components/Topbar";

export const PatientFamily = () => {
    return (<>
        <div className="flex">
            <PatientSidebar/>
            <div className="w-full">
                <Topbar title="My Family"/>
                <div className="p-7">
                    
                    <div className="grid 4k-screen:grid-cols-5 laptop-large-screen:grid-cols-4 laptop-screen:grid-cols-3 tablet-screen:grid-cols-1 mobile-large-screen:grid-cols-1 mobile-medium-screen:grid-cols-1 mobile-small-screen:grid-cols-1">
                        <FamilyMember relation="Wife"
                                      image="https://d3nn873nee648n.cloudfront.net/900x600/10007/20-SM270061.jpg"
                                      name="Reena" description="last visit: 17/10/2022" location="Chennai" email="-"
                                      phoneNo="+91 9500234351"/>
                        <FamilyMember relation="Son"
                                      image="https://media.istockphoto.com/photos/handsome-indian-man-picture-id938849022?b=1&k=20&m=938849022&s=170667a&w=0&h=X7yFNSdQ7a3SqLkGvSJgkbzZP0_nxV1IYIZbRL6Lt3U="
                                      name="Magesh" description="last visit: 17/10/2022" location="Chennai"
                                      email="magesh97@gmail.com" phoneNo="+91 7200064331"/>
                        <FamilyMember relation="Daughter"
                                      image="https://d3nn873nee648n.cloudfront.net/900x600/19048/1-SM891531.jpg"
                                      name="Saveetha" description="last visit: 10/10/2022" location="Madurai"
                                      email="saveetha07@gmail.com" phoneNo="+91 9533065533"/>
                        <FamilyMember relation="Daughter-in-Law"
                                      image="https://d3nn873nee648n.cloudfront.net/900x600/15717/20-SM643420.jpg"
                                      name="Sita" description="last visit: 01/05/2022" location="Chennai"
                                      email="sitaMagesh00@gmail.com" phoneNo="+91 9842264331"/>
                        <FamilyMember relation="Family Doctor"
                                      image="https://d3nn873nee648n.cloudfront.net/900x600/19046/1-SM891296.jpg"
                                      name="Rhiya" description="last checkup: 17/10/2022" location="- Reena"
                                      email="rhiya@gmail.com" phoneNo="+91 98665143648"/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}