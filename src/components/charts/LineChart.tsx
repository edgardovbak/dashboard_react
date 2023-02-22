import * as React from 'react';

import { Line } from 'react-chartjs-2';

function LineChart(props:any) {

    const {
        options,
        data
    } = props

    return ( 
        <Line options={options} data={data} />
     )
}

export default LineChart