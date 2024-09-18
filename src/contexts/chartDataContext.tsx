import { SeriesOptionsType } from "highcharts";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ChartDataContextType = {
  dataList: Array<SeriesOptionsType>;
  setDataList: Dispatch<SetStateAction<Array<SeriesOptionsType>>>;
};

type ChartDataProviderProps = {
  children: ReactNode;
};

export const ChartDataContext = createContext<ChartDataContextType>(undefined);

export const ChartDataProvider = ({ children }: ChartDataProviderProps) => {
  const [dataList, setDataList] = useState<Array<SeriesOptionsType>>([]);

  return (
    <ChartDataContext.Provider value={{ dataList, setDataList }}>
      {children}
    </ChartDataContext.Provider>
  );
};
