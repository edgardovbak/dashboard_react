import * as React from 'react';

import { Radar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

function RadarChart(props:any) {

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
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 })
            ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'My Second Dataset',
            data: [
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 }),
                faker.datatype.number({ min: 0, max: 300 })
            ],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };

    return ( 
        <Radar options={optionsNew} data={dataNew} />
     )
}

export default RadarChart