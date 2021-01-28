import React, { useState } from "react"
import { ResponsivePie } from "@nivo/pie"
import PlaceHolder from "../PlaceHolder/PlaceHolder"
import classes from "./Visualization.module.scss"

function Visualization({ size }) {
  const [formData, setFormData] = useState(localStorage.getItem("data") || null)
  let data = []
  if (formData) {
    const mbp = Object.values(JSON.parse(formData)).filter((i) => {
      return i === "mbp"
    })
    const pmbp = Object.values(JSON.parse(formData)).filter((i) => {
      return i === "pmbp"
    })
    const nmbp = Object.values(JSON.parse(formData)).filter((i) => {
      return i === "nmbp"
    })

    data = [
      {
        id: "meet BP",
        label: "meet BP",
        value: mbp.length,
        color: "hsl(54, 70%, 50%)",
      },
      {
        id: "partially meet",
        label: "partially meet",
        value: pmbp.length,
        color: "hsl(145, 70%, 50%)",
      },
      {
        id: "not meeting BP",
        label: "not meeting BP",
        value: nmbp.length,
        color: "hsl(125, 70%, 50%)",
      },
    ]
  } else {
    return <PlaceHolder />
  }

  return (
    <div
      className={size === "small" ? classes.sm_container : classes.container}
    >
      <ResponsivePie
        data={data}
        margin={
          size === "small"
            ? { top: 90, right: 80, bottom: 90, left: 80 }
            : { top: 150, right: 80, bottom: 90, left: 80 }
        }
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={10}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#000000"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#000000"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#ffffff",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}

export default Visualization
