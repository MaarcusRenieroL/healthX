import {useState} from "react";
import {Link} from "react-router-dom";

export const PatientSidebar = () => {
    const [open, setOpen] = useState(false);
    const Menus = [
        {title: "Dashboard", src: "dashboard", path: "/patient"},
        {title: "Family", src: "family", path: "/patient/family"},
        {title: "Documents", src: "documents", path: "/patient/documents"},
        {title: "History ", src: "history", path: "/patient/history"},
        {title: "Task", src: "task", path: "/patient/tasks"},
        {title: "FAQ", src: "faq", path: "/patient/faq"},
        {title: "Insurance ", src: "insurance", path: "/patient/insurance"},
        {title: "Shop", src: "shop", path: "/patient/shop", gap: true},
    ];
    
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "} bg-[#121826] h-screen p-5  pt-8 relative duration-300`}>
                <img
                    src="/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                    alt="control"/>
                <div className="flex gap-x-4 items-center">
                    <img
                        src="/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                        alt="logo"/>
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
                    >
                        HealthX
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <Link to={Menu.path}>
                            <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"}`}
                            >
                                <img src={`/assets/${Menu.src}.png`} className="h-5 w-5" alt="icons"/>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
                            </li>
                        </Link>))}
                </ul>
            </div>
        
        </div>
    );
};