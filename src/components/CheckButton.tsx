import { useEffect } from "react";
import { API_URL } from "../config/env";

type NameType = "data" | "pref";

export const CheckButton: React.FC = () => {
  useEffect(() => {
    const checkButtons = document.querySelectorAll('input[type="checkbox"]');
    checkButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    return () => {
      checkButtons.forEach((button) => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div>
      <input id="checkButtonData" type="checkbox" name="data" value="ok" />
      人口
      <input id="checkButtonPref" type="checkbox" name="pref" value="東京" />
      都道府県
    </div>
  );
};

async function handleClick(event: Event) {
  const target = event.target as HTMLInputElement;
  const name = target.name as NameType;

  try {
    let response;
    switch (name) {
      case "data":
        response = await fetch(
          `${API_URL}population/sum/perYear?prefCode=11&cityCode=-`
        );
        break;
      case "pref":
        response = await fetch(`${API_URL}api/v1/prefectures`);
        break;
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
