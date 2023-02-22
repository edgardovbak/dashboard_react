import React from 'react'

const RandomData = () => {
    const [number, setNumber] = React.useState(0)
    
    // add side effect to component
    React.useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => setNumber(Math.floor(Math.random() * 100 + 1)),
        5000
      )
  
      // clean up interval on unmount
      return () => {
        clearInterval(interval)
      };
    }, [])
  
    return <p>{number}</p>
  }

  export default RandomData