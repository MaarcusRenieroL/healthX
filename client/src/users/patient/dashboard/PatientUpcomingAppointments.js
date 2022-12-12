import { Card } from "flowbite-react"
import {PatientDoctorCard} from "./PatientDoctorCard"

export const PatientUpcomingAppointments = () => {
    return (
        <div>
            <Card className="bg-[#121826] text-white">
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none">
                        Upcoming Appointments
                    </h5>
                    
                    <a
                        href="/patient/history"
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        View all
                    </a>
                </div>
                <PatientDoctorCard imgSrc="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Dr Michel" deptName="Orthopaedician" dateTime="04/11/2022 10:00AM"/>
                <PatientDoctorCard imgSrc="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Dr Brad Smith" deptName="Cardiology" dateTime="06/11/2022 12:00PM"/>
                <PatientDoctorCard imgSrc="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" name="Dr Will Hardy" deptName="Dental" dateTime="28/11/2022 02:00PM"/>
                <PatientDoctorCard imgSrc="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Dr Michel" deptName="Orthopaedician" dateTime="04/11/2022 10:00AM"/>
                <PatientDoctorCard imgSrc="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Dr Brad Smith" deptName="Cardiology" dateTime="06/11/2022 12:00PM"/>
                <PatientDoctorCard imgSrc="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" name="Dr Will Hardy" deptName="Dental" dateTime="28/11/2022 02:00PM"/>
                <PatientDoctorCard imgSrc="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Dr Brad Smith" deptName="Cardiology" dateTime="06/11/2022 12:00PM"/>
            </Card>
        </div>
    )
}

