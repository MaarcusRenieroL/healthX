import {DoctorNotificationCard} from "./DoctorNotificationCard"

export const DoctorNotifications = () => {
    return (
        <>
            <div className="p-4 overflow-y-auto">
                <h1 className="text-2xl font-bold">Alerts</h1>
                <DoctorNotificationCard
                    name="Sara"
                    avatar="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                    message="Requested report review"
                />
                <DoctorNotificationCard
                    name="Dinesh"
                    avatar="https://i.pinimg.com/originals/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg"
                    message="Requested second opinion"
                />
                <DoctorNotificationCard
                    name="Smith"
                    avatar="https://t4.ftcdn.net/jpg/01/25/68/37/360_F_125683702_KzYgSIAUqhI6wmxNL49pgG6XafE3E5pO.jpg"
                    message="Booked an appointment"
                />
                <DoctorNotificationCard
                    name="Leah"
                    avatar="https://m.media-amazon.com/images/I/719sQqh6R-L._UL1500_.jpg"
                    message="Cancelled an appointment"
                />
            
            </div>
        </>
    )
}