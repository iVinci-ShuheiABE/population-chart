import { useState } from "react";
import { API_URL } from "../../config/env";
import { PopulationData } from "../../types/api";

type CheckBoxProps = {
  prefecture: {
    prefCode: number;
    prefName: string;
  };
};

export const CheckBox = (checkBoxProps: CheckBoxProps) => {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const { prefName, prefCode } = checkBoxProps.prefecture;

  const handleCheckboxChange = async (prefCode: number) => {
    try {
      await fetch(
        `${API_URL}/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPopulationData(data.result);
        });
    } catch (error) {
      console.error("Error fetching population data:", error);
    }

    // TODO:コンソール確認削除
    console.log(populationData);
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
