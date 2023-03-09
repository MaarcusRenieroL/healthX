import React from "react";

export const InsuranceCard = ({title, imgSrc, link}) => {
    return (
        <>
            <div className="p-5">
                <a href={link} target="_blank">
                    <button className="bg-sky-700 items-center flex flex-col justify-center p-5 h-full w-full rounded-lg text-2xl font-bold">
                        <img src={imgSrc}
                             className="h-20 w-20 rounded-full"
                             alt=""
                        />
                        <h4 className="mt-10">{title}</h4>
                    </button>
                </a>
            </div>
        </>
    )
}