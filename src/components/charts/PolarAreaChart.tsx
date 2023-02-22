import * as React from 'react';

import { PolarArea } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

function PolarAreaChart(props:any) {

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
        }
      },
      scales: {
        r: {
          angleLines: {
            color: "#3D3C41",
          },
          grid: {
            color: "#3D3C41",
          }
        },
        y: {
          display: false,
        },
        
      }
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
              'rgba(135, 55, 148, .6)',
              'rgba(51, 49, 91, .6)',
              'rgba(136, 110, 234, .6)'
            ],
            borderWidth: 0
          }
        ]
      };

    return ( 
        <PolarArea options={optionsNew} data={dataNew} />
     )
}

export default PolarAreaChart