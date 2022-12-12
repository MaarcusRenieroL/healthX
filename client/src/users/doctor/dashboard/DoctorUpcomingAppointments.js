import {Card} from "flowbite-react"
import {PatientCard} from "./PatientCard"

export const DoctorUpcomingAppointments = () => {
    return (<div>
            <Card>
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Upcoming Appointments
                    </h5>
                    
                    <a
                        href="/doctor/appointments"
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        View all
                    </a>
                </div>
                <PatientCard imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" name="Neil Sims"
                             deptName="" dateTime="04/11/2022 10:00AM"/>
                <PatientCard
                    imgSrc="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    name="Steve Smith" deptName="" dateTime="04/11/2022 12:00PM"/>
                <PatientCard
                    imgSrc="https://plus.unsplash.com/premium_photo-1665461700517-951fecc5c287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    name="Wil Wheaton" deptName="" dateTime="04/11/2022 02:00PM"/>
                <PatientCard
                    imgSrc="https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    name="Amy Fenderson" deptName="" dateTime="04/11/2022 4:30PM"/>
                <PatientCard
                    imgSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    name="Rhea Hemsworth" deptName="" dateTime="06/11/2022 12:00PM"/>
                <PatientCard
                    imgSrc="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    name="Ronald Regan" deptName="" dateTime="06/11/2022 2:45PM"/>
                <PatientCard
                    imgSrc="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    name="Megan Michael" deptName="" dateTime="06/11/2022 5:00PM"/>
            </Card>
        </div>)
}

