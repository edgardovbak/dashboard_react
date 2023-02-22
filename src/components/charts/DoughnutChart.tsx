import * as React from 'react';

import { Doughnut } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

function DoughnutChart(props:any) {

    const {
        options,
        data
    } = props

    const optionsNew =  {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: 'Chart.js Polar Area Chart'
        },
        datalabels: {
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
            datalabels: {
              labels: {
                value: {
                  color: 'green'
                }
              }
            }
          }
        ]
      };

    return ( 
        <Doughnut options={optionsNew} data={dataNew} />
     )
}

export default DoughnutChart