import React from 'react'
import { Responsive, WidthProvider } from "react-grid-layout"

import GridItem from "./components/GridItem"
import layouts from './configs/layoutConfig'

import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import './App.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

const App = () => {

  const onBreakpointChange = (newBreakpoint: any, newCols: any) => {
    console.log(
      `Breakpoint nuevo: ${newBreakpoint}, cantidad de columnas: ${newCols}`
    )
  }

  const onLayoutChange = (layout: any, layouts: any) => {
    console.log(
      `layout: ${layout}, layouts: ${layouts}`
    )
  }

  console.log("layouts.lg: ", layouts.lg)
  
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      // measureBeforeMount={false}
      // useCSSTransforms={false}
      isDraggable
      isResizable
      draggableHandle=".grid-item__title"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onBreakpointChange={onBreakpointChange}
      onLayoutChange={onLayoutChange}
      >
          <div key="graph1"> hi</div>
      </ResponsiveGridLayout>
  )
}

export default App
