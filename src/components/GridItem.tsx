import React, { FormEvent } from 'react'
import { ChartType } from 'chart.js'

import GraphBlock from './GraphBlock'

import chart from '../assets/chart.svg'
import plus from '../assets/plus.svg'

interface IProps {
    className?: string,
    title?: string,
    order: number,
    active: boolean,
    handleSelection: ( value: number) => void
}


const GridItem = (props: IProps) =>  {

    const {
        className = "",
        title = "",
        handleSelection,
        order,
        active = false
    } = props

    const [chartType, setChartType] = React.useState<ChartType>("line")

    const chooseGriidItem = () => {
        handleSelection(order)
    }

    const handleChartType = (e: FormEvent<HTMLSelectElement>) => {
        setChartType(e.currentTarget.value as ChartType)
    }

    return (  
        <div className={`grid-item ${className} ${active ? 'active' : ''}`}>
            <div className='flex justify-start gap-4 font-bold mb-5' title={title}>
                <img src={chart} alt={title} />
                {title}
            </div>
            <div className='grid-item__body p-4 rounded-[8px]'>
                <div className="grid-item__title">
                    <div>
                        <select className='text-black' name="chartType" id="chartType" defaultValue="Select your option" onChange={handleChartType}>
                            <option value="line">Line</option>
                            <option value="bar">Bar</option>
                            <option value="pie">Pie</option>
                            <option value="bubble">Bubble</option>
                            <option value="doughnut">Doughnut</option>
                            <option value="polarArea">Polar Area</option>
                            <option value="radar">Radar</option>
                            <option value="progress">Progress</option>
                        </select>
                    </div>
                    <button className='grid-item__active_chart bg-gray-600 p-2 rounded' onClick={chooseGriidItem}>
                        <img src={plus} alt="" />
                    </button>
                    
                </div>
                <div className='grid-item__content'>
                    <GraphBlock type={chartType}/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GridItem)