import React from 'react'

interface IProps {
    className?: string,
    title?: string
}


const GridItem = (props: IProps) =>  {

    const {
        className = "",
        title = "",
    } = props

    return (  
        <div className={`grid-item ${className}`}>
            <div className="grid-item__title">
                <div title={title}>{title}</div>
            </div>
            hello
        </div>
    )
}

export default GridItem