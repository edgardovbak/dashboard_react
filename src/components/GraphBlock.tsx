import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker'
import { Chart, registerables, ChartType } from 'chart.js'

import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import BubbleChart from './charts/BubbleChart'
import DoughnutChart from './charts/DoughnutChart'
import PolarAreaChart from './charts/PolarAreaChart'
import RadarChart from './charts/RadarChart'
import ProgressBar from './charts/ProgressBar'

Chart.register(...registerables)

interface IProps {
    type: ChartType | "progress"
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const GraphBlock = (props: IProps) => {

    const {
        type
    } = props

    // data fot charts line, bar, ...
    const [fakeData, setFakeData] = React.useState({
        labels: [] as string[],
        datasets: [
            {
                label: 'Dataset 1',
                data: [] as number[],
                borderColor: '#886EEA',
                backgroundColor: '#886EEA',
                borderWidth: 1.5,
            },
            {
                label: 'Dataset 2',
                data: [] as number[],
                borderColor: '#504F54',
                backgroundColor: '#504F54',
                borderWidth: 1.5,
            },
        ],
    })

    // general chart configuration
    const options = {
        responsive: true,
        bezierCurve : true,
        maintainAspectRatio: true,
          plugins: {
            legend: {
                display: false,
            },
            title: {
              display: false,
              text: 'Chart.js Line Chart',
            },
        },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
              min: 0,
              max: 10000,
              grid: {
                color: "#3D3C41"
              }
            },
            x: {
                grid: {
                    display: false,
                    color: "#3D3C41"
                }
            }
        }
      }

      // its just used to create fake data per interval
    React.useEffect(() => {
        // create interval
        const interval = setInterval(() => {
            const today = new Date();
            
            let hour = today.getHours()
            let minits = today.getMinutes()
            let sec = today.getSeconds()

            if (sec < 10) sec = parseInt('0' + sec)
            if (hour < 10) hour = parseInt('0' + hour)
            if (minits < 10) minits = parseInt('0' + minits)
            const formattedToday = hour + ':' + minits + ':' + sec

            const fake = {...fakeData}

            if (fake.labels.length > 7) {
                fake.labels.shift()
            } 

            fake.labels.push(formattedToday)
            
            fake.datasets.map((item) => {
                if (fake.labels.length > 7) {
                    item.data.shift()
                } 
                item.data.push(faker.datatype.number({
                    'min': 0,
                    'max': 10000
                }))
            })
            
            setFakeData(fake)
        }, 1000)
    
        // clean up interval on unmount
        return () => {
            clearInterval(interval)
        }
    }, [])

    switch (type) {
        case "line":
            return <LineChart options={options} data={fakeData} />
        case "bar":
            return <BarChart options={options} data={fakeData} />
        case "pie":
            return <PieChart options={options} data={fakeData} />
        case "bubble":
            return <BubbleChart options={options} data={fakeData} />
        case "doughnut":
            return <DoughnutChart options={options} data={fakeData} />
        case "polarArea":
            return <PolarAreaChart options={options} data={fakeData} />
        case "radar":
            return <RadarChart options={options} data={fakeData} />
        case "progress":
            return <ProgressBar/>
        default:
            return null
    }

    // return <Chart type={type} data={fakeData} options={options} />
}

export default GraphBlock