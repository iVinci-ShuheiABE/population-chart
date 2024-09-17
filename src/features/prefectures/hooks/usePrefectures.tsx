import { useState } from "react";
import type { PrefectureData } from "@/types/api";
import { API_URL } from "../../../config/env";

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<PrefectureData[]>([]);

  async function getPrefectures() {
    try {
      await fetch(`${API_URL}/prefectures`)
        .then((response) => response.json())
        .then((data) => {
          setPrefectures(data.result);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return { prefectures, getPrefectures };
};
