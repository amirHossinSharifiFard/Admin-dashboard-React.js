import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";
import { useTheme } from "@mui/material";

const LineChart = ({ isDahsboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
      data={data}
      theme={{
        // add
        axis: {
          domain: {
            line: {
              stork: colors.grey[100]
            }
          }
        },
        legend: {
          text: {
            fill: colors.grey[100]
          }
        },
        ticks: {
          line: {
            storke: colors.grey[100],
            storkeWidth: 1
          },
          text: {
            fill: colors.grey[100]
          }
        }
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      xFormat=' >-'
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false
      }}
      yFormat=' >-.2f'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDahsboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDahsboard ? undefined :"count",
        legendOffset: -40,
        legendPosition: "middle"
      }}
      enableGridX={false}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

export default LineChart;
