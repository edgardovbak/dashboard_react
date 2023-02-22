import * as React from 'react'

import { Bubble } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

function BubbleChart(props:any) {

    const {
        options,
        data
    } = props

    const dataNew = {
        datasets: [
          {
            label: 'Red dataset',
            data: Array.from({ length: 20 }, () => ({
              x: faker.datatype.number({ min: 0, max: 10000 }),
              y: faker.datatype.number({ min: 0, max: 10000 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: '#44204A',
            borderColor: "#873794",
            borderWidth: 1
          },
          {
            label: 'Blue dataset',
            data: Array.from({ length: 20 }, () => ({
              x: faker.datatype.number({ min: 0, max: 10000 }),
              y: faker.datatype.number({ min: 0, max: 10000 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: '#33315B',
            borderColor: "#886EEA",
            borderWidth: 1
          },
        ],
      };

    return ( 
        <Bubble options={options} data={dataNew} />
     )
}

export default BubbleChart