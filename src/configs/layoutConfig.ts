type TLayoutItem = {
  w: number,
  h: number,
  x: number,
  y: number,
  i: string
}

type TLayout = {
  lg: TLayoutItem[],
  md: TLayoutItem[],
  sm: TLayoutItem[],
  xs: TLayoutItem[]
}
 
const layouts = {
    lg: [
      {
        w: 1,
        h: 2,
        x: 0,
        y: 0,
        i: "graph1"
      },
      {
        w: 3,
        h: 1,
        x: 1,
        y: 0,
        i: "graph2"
      },
      {
        w: 1,
        h: 2,
        x: 4,
        y: 0,
        i: "graph3"
      },
      {
        w: 3,
        h: 2,
        x: 5,
        y: 0,
        i: "graph4"
      },
      {
        w: 4,
        h: 2,
        x: 9,
        y: 2,
        i: "graph5"
      },
      {
        w: 3,
        h: 2,
        x: 3,
        y: 2,
        i: "graph6"
      },
      {
        w: 3,
        h: 2,
        x: 0,
        y: 2,
        i: "graph7"
      }
    ],
    md: [
      {
        w: 6,
        h: 2,
        x: 0,
        y: 0,
        i: "graph1"
      },
      {
        w: 4,
        h: 2,
        x: 6,
        y: 0,
        i: "graph2"
      },
      {
        w: 3,
        h: 2,
        x: 0,
        y: 0,
        i: "graph3"
      },
      {
        w: 3,
        h: 2,
        x: 3,
        y: 0,
        i: "graph4"
      },
      {
        w: 4,
        h: 2,
        x: 6,
        y: 2,
        i: "graph5"
      },
      {
        w: 3,
        h: 2,
        x: 3,
        y: 2,
        i: "graph6"
      },
      {
        w: 3,
        h: 2,
        x: 0,
        y: 2,
        i: "graph7"
      }
    ],
    sm: [
      {
        w: 6,
        h: 2,
        x: 0,
        y: 0,
        i: "graph1"
      },
      {
        w: 3,
        h: 2,
        x: 0,
        y: 0,
        i: "graph2"
      },
      {
        w: 3,
        h: 2,
        x: 3,
        y: 0,
        i: "graph3"
      },
      {
        w: 3,
        h: 2,
        x: 0,
        y: 0,
        i: "graph4"
      },
      {
        w: 3,
        h: 2,
        x: 3,
        y: 2,
        i: "graph5"
      },
      {
        w: 3,
        h: 2,
        x: 0,
        y: 2,
        i: "graph6"
      },
      {
        w: 3,
        h: 2,
        x: 3,
        y: 2,
        i: "graph7"
      }
    ],
    xs: [
      {
        w: 4,
        h: 2,
        x: 0,
        y: 0,
        i: "graph1"
      },
      {
        w: 4,
        h: 2,
        x: 0,
        y: 0,
        i: "graph2"
      },
      {
        w: 4,
        h: 2,
        x: 0,
        y: 0,
        i: "graph3"
      },
      {
        w: 4,
        h: 2,
        x: 0,
        y: 0,
        i: "graph4"
      },
      {
        w: 4,
        h: 2,
        x: 0,
        y: 2,
        i: "graph5"
      },
      {
        w: 4,
        h: 2,
        x: 0,
        y: 2,
        i: "graph6"
      },
      {
        w: 4,
        h: 2,
        x: 0,
        y: 2,
        i: "graph7"
      }
    ]
  }

  export default layouts as TLayout