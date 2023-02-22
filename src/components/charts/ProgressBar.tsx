import * as React from 'react'

interface IProps {
    min?: number,
    max?: number,
    value?: number
}

function ProgressBar(props: IProps) {

    const {
        min = 0,
        max = 100,
        value = 50
    } = props

    const [rangeValeu, setRangeValue] = React.useState<number>(value)

    const handleRangeCange = (e: React.FormEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
        setRangeValue(Number(e.currentTarget.value))
    }

    return ( 
        <div className='progress-bar'>
            <div className='flex flex-col text-right justify-end'>
                <div className='text-6xl font-bold min-w-[100px]'>{rangeValeu}</div>
                <div className='text-sm font-normal'>m/s</div>
            </div>
            
            <div className='proggress'>
                <input 
                    type="range"  
                    min={min}  
                    max={max}
                    onChange={handleRangeCange}
                />
                <div className='scale'>
                    <span className='scale-line text-sm justify-start'>{max}</span>
                    <span className='scale-line'></span>
                    <span className='scale-line'></span>
                    <span className='scale-line'></span>
                    <span className='scale-line text-sm justify-start'>{max/2}</span>
                    <span className='scale-line'></span>
                    <span className='scale-line'></span>
                    <span className='scale-line'></span>
                    <span className='scale-line text-sm justify-start'>{min}</span>
                </div>
            </div>
        </div>
     )
}

export default ProgressBar