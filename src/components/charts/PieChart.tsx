import * as React from 'react';

import { Pie } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

function PieChart(props:any) {

    const {
        options,
        data
    } = props

    const optionsNew =  {
      responsive: true,
      datalabels: {
        display: true,
        color: "white",
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: 'Chart.js Polar Area Chart'
        },
        datalabels: {
          color: 'blue',
          labels: {
            title: {
              color: 'blue'
            }
          }
        }
      },
      scales: {
        y: {
          display: false,
        },
        
      },
    }

    const dataNew = {
        labels: ['Red', 'Orange', 'Yellow'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 })
            ],
            backgroundColor: [
                '#873794',
                '#44204A',
                '#886EEA'
            ],
            border: "#886EEA",
            borderWidth: 1,
          }
        ]
      };

    return ( 
        <Pie options={optionsNew} data={dataNew} />
     )
}

export default PieChart