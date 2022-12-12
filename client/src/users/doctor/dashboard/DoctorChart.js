import React from "react";
import { Bar } from 'react-chartjs-2'

export const DoctorChart = () => {
    
    const options = {
        scales: {
            y:
                {
                    min: 0,
                    max: 50,
                    ticks: {
                        stepSize: 10
                    }
                },
        },
        
    };
    
    const dataset = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
            {
                label: "Total No of Patients Treated",
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [10, 25, 20, 25, 27, 13, 17]
            }
        ]
    };
    
    return (
        <div>
            <Bar
                data={dataset}
                width="100%"
                height="70%"
                options={options}
            />
            <h1 className="text-center text-2xl font-bold">Total No of Patients Treated</h1>
        </div>
    )
}
