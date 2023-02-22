import * as React from 'react'

import { faker } from '@faker-js/faker'
import { Bar } from 'react-chartjs-2'

const DANGER_LEVEL = 7000

const dangerlevel = ( value: number) => {
    if (value > DANGER_LEVEL) {
        return "#DD514D"
    } else {
        return "#886EEA"
    }
}

function BarChart(props:any) {

    const {
        options,
        data
    } = props

    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dataValues = [] as number[]
    const backgroundColor = [] as string[]

    labels.forEach( () => {
        const itemValue = faker.datatype.number({ min: 0, max: 10000 })
        dataValues.push(itemValue)
        backgroundColor.push(dangerlevel(itemValue))
    })

    const dataNew = {
        labels: labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: dataValues,
            borderWidth: 0,
            backgroundColor: backgroundColor,
          }
        ]
      }

    return ( 
        <Bar options={options} data={dataNew} />
     )
}

export default BarChart