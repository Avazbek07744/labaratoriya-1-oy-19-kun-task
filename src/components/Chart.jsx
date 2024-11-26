import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import lord from '../axios';

const Chart = () => {
    useEffect(()=>{
        lord('knowlodge')
            .then(res=>{
                if (res.status ==200) {
                    res.json()
                }
                console.log(res);
                
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    useEffect(() => {
        const charts = [
            {
                id: 'chart1',
                value: 33,
                label: 'Конституциявий-хукукий саводхонлик1',
                color: '#FF4560',
            },
            {
                id: 'chart2',
                value: 79,
                label: 'Ахборот-коммуникация технологиялари2',
                color: '#00E396',
            },
            {
                id: 'chart3',
                value: 78,
                label: 'Турли сохадаги ислохотлардан хабардорлик',
                color: '#00E396',
            },
            {
                id: 'chart4',
                value: 48,
                label: 'Узбек тили ва адабиёти',
                color: '#FEB019',
            },
            {
                id: 'chart5',
                value: 100,
                label: 'Узбекистон тарихи ва маданияти',
                color: '#008FFB',
            },
            {
                id: 'chart6',
                value: 55,
                label: 'Ақлий саводхонлик ва мантиқий фикрлаш',
                color: '#FEB019',
            },
        ];

        charts.forEach((chart) => {
            const options = {
                chart: {
                    type: 'radialBar',
                    height: 200,
                },
                series: [chart.value],
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: '#E0E0E0',
                            strokeWidth: '97%',
                        },
                        dataLabels: {
                            value: {
                                fontSize: '20px',
                                fontWeight: 'bold',
                                offsetY: -10,
                                color: chart.color,
                            },
                            name: {
                                offsetY: 40,
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: '#333',
                                show: true,
                                style: {
                                    width: '30px'
                                }
                            },
                        },
                    },
                },
                fill: {
                    colors: [chart.color],
                },
                labels: [chart.label],
            };
            

            const apexChart = new ApexCharts(document.querySelector(`#${chart.id}`), options);
            apexChart.render();
        });

        return () => {
            charts.forEach((chart) => {
                const element = document.querySelector(`#${chart.id}`);
                if (element) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                }
            });
        };
    }, []);

    return (
        <div className="grid grid-cols-3 gap-5 p-5 justify-center items-center max-w-6xl mx-auto">
            <div id="chart1" className="w-full max-w-[300px]"></div>
            <div id="chart2" className="w-full max-w-[300px]"></div>
            <div id="chart3" className="w-full max-w-[300px]"></div>
            <div id="chart4" className="w-full max-w-[300px]"></div>
            <div id="chart5" className="w-full max-w-[300px]"></div>
            <div id="chart6" className="w-full max-w-[300px]"></div>
        </div>
    );
};

export default Chart;
