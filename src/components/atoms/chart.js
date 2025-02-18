'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
    
const ChartComp = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function Chart() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    const [series, setSeries] = useState([
        {
            data: [
                {
                    x: 'Jan',
                    y: [50, 500],
                },
                {
                    x: 'Feb',
                    y: [50, 1000]
                },
                {
                    x: 'Apr',
                    y: [50, 500]
                },
                {
                    x: 'May',
                    y: [50, 500]
                },
                {
                    x: 'Jun',
                    y: [50, 500]
                },
                {
                    x: 'Jul',
                    y: [50, 500]
                },
                {
                    x: 'Aug',
                    y: [50, 500]
                },
                {
                    x: 'Sep',
                    y: [50, 500]
                },
                {
                    x: 'Oct',
                    y: [50, 500]
                },
                {
                    x: 'Nov',
                    y: [50, 500]
                },
                {
                    x: 'Dec',
                    y: [50, 500]
                }
            ]
        }
    ])

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
                enabled: false
            },
            toolbar:{
                show:false
            }
        },
        
        plotOptions: {
            bar: {
                isDumbbell: false,
                columnWidth: 3,
                dumbbellColors: [['#0063F9', '#148A01']]
                
            },
        },
        legend: {
            show: false,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            customLegendItems: ['Product A', 'Product B']
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                gradientToColors: ['#0063F9', '#148A01'],
                inverseColors: true,
                stops: [0, 2500]
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: false,
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            tickPlacement: 'on',
            labels: {
                show: true,
                style: {
                    colors: '#929292',
                    fontSize: '10px',
                    cssClass: 'apexcharts-xaxis-label',
                },
              },
        },
        yaxis: {
            // tickPlacement: 'on',
            labels: {
                show: true,
                style: {
                    colors: '#929292',
                    fontSize: '10px',
                    cssClass: 'apexcharts-xaxis-label',
                },
              },
        }
    })

    return (
        <div id="chart">
            {isClient && <ChartComp options={options} series={series} type="rangeBar" height={170} />}
        </div>
    )
}
