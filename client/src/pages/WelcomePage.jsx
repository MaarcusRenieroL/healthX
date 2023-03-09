import React from "react";

export const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to the Healthchain!</h1>
            <p className="text-xl">This is a demo application for the Healthchain project.</p>
            <p className="text-xl">Please sign up or sign in to continue.</p>
            
            <div className="flex items-center justify-center m-4">
                <button className="p-4 bg-red-500 m-3 rounded-lg text-white">
                    <a className="decoration-none" href="/signin">
                        Sign In
                    </a>
                </button>
                <button className="p-4 bg-red-500 m-3 rounded-lg text-white">
                    <a className="decoration-none" href="/signup">
                        Sign Up
                    </a>
                </button>
                <button className="p-4 bg-red-500 m-3 rounded-lg text-white">
                    <a className="decoration-none" href="/patient">
                        Patient Page
                    </a>
                </button>
                <button className="p-4 bg-red-500 m-3 rounded-lg text-white">
                    <a className="decoration-none" href="/doctor">
                        Doctors Page
                    </a>
                </button>
                <button className="p-4 bg-red-500 m-3 rounded-lg text-white">
                    <a className="decoration-none" href="/admin">
                        Admin Page
                    </a>
                </button>
                <button className="p-4 bg-red-500 m-3 rounded-lg text-white">
                    <a className="decoration-none" href="/technician">
                        Technician Page
                    </a>
                </button>
            </div>
        </div>
    )
}