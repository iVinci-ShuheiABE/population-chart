import "./App.css";
import { PrefecturesList } from "../features/prefectures/components/PrefecturesList";
import { Chart } from "../components";
import { ChartDataProvider } from "../contexts/chartDataContext";

function App() {
  return (
    <ChartDataProvider>
      <h1>人口構成遷移グラフ</h1>
      <PrefecturesList />
      <Chart />
    </ChartDataProvider>
  );
}

export default App;
