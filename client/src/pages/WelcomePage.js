import React from "react";

export const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to the Healthchain!</h1>
            <p className="text-xl">This is a demo application for the Healthchain project.</p>
            <p className="text-xl">Please sign up or sign in to continue.</p>
        </div>
    )
}