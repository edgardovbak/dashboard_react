import React, { useState } from 'react'

import GridItem from "./components/GridItem"
import Header from './components/Header'

import './App.css'

const App = () => {

  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const handleSelection = ( order: number) => {
    if (!isSelected) {
      setIsSelected(current => !current)
    }
    if (activeItem === order && activeItem ) {
      setIsSelected(current => !current)
      setActiveItem(null)
    } else {
      setActiveItem(order)
    }
  }
  
  return (
    <div className=''>
      <Header/>
      <div className={`layout ${isSelected ? `hasSelected hasSelected-${activeItem}` : ''}`}>
        <GridItem title='box1' order={1} active={activeItem === 1 ? true : false} handleSelection={handleSelection} className="element1"/>
        <GridItem title='box2' order={2} active={activeItem === 2 ? true : false} handleSelection={handleSelection} className="element2"/>
        <GridItem title='box3' order={3} active={activeItem === 3 ? true : false} handleSelection={handleSelection} className="element3"/>
        <GridItem title='box4' order={4} active={activeItem === 4 ? true : false} handleSelection={handleSelection} className="element4"/>
      </div>
    </div>
  )
}

export default App
