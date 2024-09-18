import { useContext } from "react";
import { API_URL, X_API_KEY } from "../../config/env";
import { ChartDataContext } from "../../contexts/chartDataContext";

type CheckBoxProps = {
  prefecture: {
    prefCode: number;
    prefName: string;
  };
};

export const CheckBox = (checkBoxProps: CheckBoxProps) => {
  const { dataList, setDataList } = useContext(ChartDataContext);
  const { prefName, prefCode } = checkBoxProps.prefecture;

  const handleCheckboxChange = async (prefCode: number) => {
    const populationDataList = [];
    let newDataList;

    if (dataList.some((item) => item.name === prefName)) {
      setDataList(dataList.filter((item) => item.name !== prefName));
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
        {
          headers: {
            "X-API-KEY": X_API_KEY,
          },
        }
      );
      const responseData = await response.json();

      responseData.result.data.forEach((item) => {
        if (item.label !== "総人口") return;

        for (const innerData of item.data) {
          populationDataList.push(innerData.value);
          if (innerData.year === responseData.result.boundaryYear) {
            break;
          }
        }
      });

      newDataList = [...dataList, { name: prefName, data: populationDataList }];
      setDataList(newDataList);
    } catch (error) {
      console.error("Error fetching population data:", error);
    }
  };

  return (
    <label htmlFor={prefName}>
      <input
        type="checkbox"
        id={prefName}
        name="prefectureName"
        value={prefName}
        onChange={() => handleCheckboxChange(prefCode)}
      />
      <span>{prefName}</span>
    </label>
  );
};
