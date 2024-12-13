import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import lord from "../axios";
import img from '../assets/shtrixCode.png'

const FooterChart = () => {
    const [competenceData, setCompetenceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        lord.get("/competence")
            .then((response) => {
                const data = response.data || [];
                console.log(response.data);
                setCompetenceData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching competence data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-[1312px] mx-auto my-8">
            <h2 className='text-4xl font-bold flex gap-2.5'><p className='w-3 h-10 bg-blue-800'></p>Компетенцияларнинг намоён булиши</h2>
            <div className="flex items-center">
                <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {competenceData.length > 0 ? (
                        competenceData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center space-y-2"
                            >
                                <Chart
                                    options={{
                                        chart: {
                                            type: "radialBar",
                                            height: 200,
                                        },
                                        plotOptions: {
                                            radialBar: {
                                                hollow: {
                                                    size: "60%",
                                                },
                                                dataLabels: {
                                                    showOn: "value", // Faqat qiymatni ko'rsatadi
                                                    name: {
                                                        show: false, // Chart ichidagi so'zni yashiradi
                                                    },
                                                    value: {
                                                        fontSize: "16px",
                                                        color: "#000",
                                                        fontWeight: "bold",
                                                    },
                                                },
                                            },
                                        },
                                        colors: [item.color || "#007bff"],
                                    }}
                                    series={[item.percentage]}
                                    type="radialBar"
                                    height={150}
                                />
                                <span className="text-center text-sm font-medium">
                                    {item.label}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-3 text-center">malumot mavjud emas!</p>
                    )}
                </div>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default FooterChart;

