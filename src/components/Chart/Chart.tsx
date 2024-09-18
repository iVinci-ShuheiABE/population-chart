import { useRef, useContext } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartDataContext } from "../../contexts/chartDataContext";

export const Chart = () => {
  const { dataList } = useContext(ChartDataContext);
  const yearDataList = [
    "1960",
    "1965",
    "1970",
    "1975",
    "1980",
    "1985",
    "1990",
    "1995",
    "2000",
    "2005",
    "2010",
    "2015",
    "2020",
  ];

  const options: Highcharts.Options = {
    title: {
      text: "人口構成",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: yearDataList,
      allowDecimals: false,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series: dataList,
  };
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};
