import { useEffect } from "react";

import { usePrefectures } from "../hooks/usePrefectures";
import { CheckBox } from "../../../components/CheckBox";

export const PrefecturesList = () => {
  const { prefectures, getPrefectures } = usePrefectures();
  useEffect(() => {
    setTimeout(() => {
      getPrefectures();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {prefectures.map((prefecture) => (
        <CheckBox prefecture={prefecture} key={prefecture.prefCode} />
      ))}
    </div>
  );
};
