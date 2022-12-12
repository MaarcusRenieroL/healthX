export const DoctorNotificationCard = ({name, avatar, message}) => {
    return (
        <>
            <div className="mt-5 flex w-full overflow-hidden bg-[#FDFFF5] rounded-lg shadow-md">
                
                <div className="flex items-center px-2 py-3">
                    <img className="object-cover w-10 h-10 rounded-full" alt="User avatar"
                         src={avatar} />
                    
                    <div className="mx-3">
                        <p className="text-black">{name}</p>
                        <p className="text-[#121826]">{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}