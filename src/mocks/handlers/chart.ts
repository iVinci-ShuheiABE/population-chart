import { http, HttpResponse } from "msw";

export const chartHandlers = [
  http.get("*/api/v1/prefectures", async () => {
    return HttpResponse.json({
      message: "msw response",
      result: [
        {
          prefCode: 1,
          prefName: "北海道",
        },
        {
          prefCode: 2,
          prefName: "青森県",
        },
        {
          prefCode: 3,
          prefName: "岩手県",
        },
        {
          prefCode: 4,
          prefName: "宮城県",
        },
        {
          prefCode: 5,
          prefName: "秋田県",
        },
        {
          prefCode: 6,
          prefName: "山形県",
        },
        {
          prefCode: 7,
          prefName: "福島県",
        },
        {
          prefCode: 8,
          prefName: "茨城県",
        },
        {
          prefCode: 9,
          prefName: "栃木県",
        },
        {
          prefCode: 10,
          prefName: "群馬県",
        },
        {
          prefCode: 11,
          prefName: "埼玉県",
        },
        {
          prefCode: 12,
          prefName: "千葉県",
        },
        {
          prefCode: 13,
          prefName: "東京都",
        },
        {
          prefCode: 14,
          prefName: "神奈川県",
        },
        {
          prefCode: 15,
          prefName: "新潟県",
        },
        {
          prefCode: 16,
          prefName: "富山県",
        },
        {
          prefCode: 17,
          prefName: "石川県",
        },
        {
          prefCode: 18,
          prefName: "福井県",
        },
        {
          prefCode: 19,
          prefName: "山梨県",
        },
        {
          prefCode: 20,
          prefName: "長野県",
        },
        {
          prefCode: 21,
          prefName: "岐阜県",
        },
        {
          prefCode: 22,
          prefName: "静岡県",
        },
        {
          prefCode: 23,
          prefName: "愛知県",
        },
        {
          prefCode: 24,
          prefName: "三重県",
        },
        {
          prefCode: 25,
          prefName: "滋賀県",
        },
        {
          prefCode: 26,
          prefName: "京都府",
        },
        {
          prefCode: 27,
          prefName: "大阪府",
        },
        {
          prefCode: 28,
          prefName: "兵庫県",
        },
        {
          prefCode: 29,
          prefName: "奈良県",
        },
        {
          prefCode: 30,
          prefName: "和歌山県",
        },
        {
          prefCode: 31,
          prefName: "鳥取県",
        },
        {
          prefCode: 32,
          prefName: "島根県",
        },
        {
          prefCode: 33,
          prefName: "岡山県",
        },
        {
          prefCode: 34,
          prefName: "広島県",
        },
        {
          prefCode: 35,
          prefName: "山口県",
        },
        {
          prefCode: 36,
          prefName: "徳島県",
        },
        {
          prefCode: 37,
          prefName: "香川県",
        },
        {
          prefCode: 38,
          prefName: "愛媛県",
        },
        {
          prefCode: 39,
          prefName: "高知県",
        },
        {
          prefCode: 40,
          prefName: "福岡県",
        },
        {
          prefCode: 41,
          prefName: "佐賀県",
        },
        {
          prefCode: 42,
          prefName: "長崎県",
        },
        {
          prefCode: 43,
          prefName: "熊本県",
        },
        {
          prefCode: 44,
          prefName: "大分県",
        },
        {
          prefCode: 45,
          prefName: "宮崎県",
        },
        {
          prefCode: 46,
          prefName: "鹿児島県",
        },
        {
          prefCode: 47,
          prefName: "沖縄県",
        },
      ],
    });
  }),

  http.get(
    "*/api/v1/population/sum/perYear?prefCode=11&cityCode=-",
    async () => {
      return HttpResponse.json({
        message: "msw response",
        result: {
          line: {
            boundaryYear: 2020,
            data: [
              {
                year: 1965,
                value: 24.03,
              },
              {
                year: 1970,
                value: 28.24,
              },
              {
                year: 1975,
                value: 24.7,
              },
              {
                year: 1980,
                value: 12.43,
              },
              {
                year: 1985,
                value: 8.18,
              },
              {
                year: 1990,
                value: 9.24,
              },
              {
                year: 1995,
                value: 5.53,
              },
              {
                year: 2000,
                value: 2.64,
              },
              {
                year: 2005,
                value: 1.68,
              },
              {
                year: 2010,
                value: 1.99,
              },
              {
                year: 2015,
                value: 1,
              },
              {
                year: 2020,
                value: 1.08,
              },
              {
                year: 2025,
                value: -1.92,
              },
              {
                year: 2030,
                value: -1.75,
              },
              {
                year: 2035,
                value: -2.35,
              },
              {
                year: 2040,
                value: -2.71,
              },
              {
                year: 2045,
                value: -2.92,
              },
            ],
          },
          bar: {
            data: [
              {
                year: 1965,
                sum: 24.03,
                class: [
                  {
                    label: "老年人口",
                    value: 18.55,
                  },
                  {
                    label: "生産年齢人口",
                    value: 33.67,
                  },
                  {
                    label: "年少人口",
                    value: 5.18,
                  },
                ],
              },
              {
                year: 1970,
                sum: 28.24,
                class: [
                  {
                    label: "老年人口",
                    value: 25.94,
                  },
                  {
                    label: "生産年齢人口",
                    value: 28.97,
                  },
                  {
                    label: "年少人口",
                    value: 26.79,
                  },
                ],
              },
              {
                year: 1975,
                sum: 24.7,
                class: [
                  {
                    label: "老年人口",
                    value: 28.92,
                  },
                  {
                    label: "生産年齢人口",
                    value: 20.94,
                  },
                  {
                    label: "年少人口",
                    value: 33.63,
                  },
                ],
              },
              {
                year: 1980,
                sum: 12.43,
                class: [
                  {
                    label: "老年人口",
                    value: 30.41,
                  },
                  {
                    label: "生産年齢人口",
                    value: 12.45,
                  },
                  {
                    label: "年少人口",
                    value: 8.83,
                  },
                ],
              },
              {
                year: 1985,
                sum: 8.18,
                class: [
                  {
                    label: "老年人口",
                    value: 25.83,
                  },
                  {
                    label: "生産年齢人口",
                    value: 12.03,
                  },
                  {
                    label: "年少人口",
                    value: -5.35,
                  },
                ],
              },
              {
                year: 1990,
                sum: 9.24,
                class: [
                  {
                    label: "老年人口",
                    value: 26.29,
                  },
                  {
                    label: "生産年齢人口",
                    value: 14.77,
                  },
                  {
                    label: "年少人口",
                    value: -13.27,
                  },
                ],
              },
              {
                year: 1995,
                sum: 5.53,
                class: [
                  {
                    label: "老年人口",
                    value: 28.39,
                  },
                  {
                    label: "生産年齢人口",
                    value: 6.8,
                  },
                  {
                    label: "年少人口",
                    value: -8.89,
                  },
                ],
              },
              {
                year: 2000,
                sum: 2.64,
                class: [
                  {
                    label: "老年人口",
                    value: 30.55,
                  },
                  {
                    label: "生産年齢人口",
                    value: 0.69,
                  },
                  {
                    label: "年少人口",
                    value: -6.01,
                  },
                ],
              },
              {
                year: 2005,
                sum: 1.68,
                class: [
                  {
                    label: "老年人口",
                    value: 30.11,
                  },
                  {
                    label: "生産年齢人口",
                    value: -2.36,
                  },
                  {
                    label: "年少人口",
                    value: -3.74,
                  },
                ],
              },
              {
                year: 2010,
                sum: 1.99,
                class: [
                  {
                    label: "老年人口",
                    value: 26.61,
                  },
                  {
                    label: "生産年齢人口",
                    value: -2.92,
                  },
                  {
                    label: "年少人口",
                    value: -3.3,
                  },
                ],
              },
              {
                year: 2015,
                sum: 1,
                class: [
                  {
                    label: "老年人口",
                    value: 22.11,
                  },
                  {
                    label: "生産年齢人口",
                    value: -5.08,
                  },
                  {
                    label: "年少人口",
                    value: -4.48,
                  },
                ],
              },
              {
                year: 2020,
                sum: 1.08,
                class: [
                  {
                    label: "老年人口",
                    value: 8.18,
                  },
                  {
                    label: "生産年齢人口",
                    value: -3.81,
                  },
                  {
                    label: "年少人口",
                    value: -5.75,
                  },
                ],
              },
              {
                year: 2025,
                sum: -1.92,
                class: [
                  {
                    label: "老年人口",
                    value: 5.09,
                  },
                  {
                    label: "生産年齢人口",
                    value: 0.35,
                  },
                  {
                    label: "年少人口",
                    value: -4.56,
                  },
                ],
              },
              {
                year: 2030,
                sum: -1.75,
                class: [
                  {
                    label: "老年人口",
                    value: 2.27,
                  },
                  {
                    label: "生産年齢人口",
                    value: -3.04,
                  },
                  {
                    label: "年少人口",
                    value: -4.93,
                  },
                ],
              },
              {
                year: 2035,
                sum: -2.35,
                class: [
                  {
                    label: "老年人口",
                    value: 3.99,
                  },
                  {
                    label: "生産年齢人口",
                    value: -5.1,
                  },
                  {
                    label: "年少人口",
                    value: -4.43,
                  },
                ],
              },
              {
                year: 2040,
                sum: -2.71,
                class: [
                  {
                    label: "老年人口",
                    value: 6.23,
                  },
                  {
                    label: "生産年齢人口",
                    value: -7.53,
                  },
                  {
                    label: "年少人口",
                    value: -2.78,
                  },
                ],
              },
              {
                year: 2045,
                sum: -2.92,
                class: [
                  {
                    label: "老年人口",
                    value: 1.62,
                  },
                  {
                    label: "生産年齢人口",
                    value: -5.64,
                  },
                  {
                    label: "年少人口",
                    value: -3.43,
                  },
                ],
              },
            ],
          },
        },
      });
    }
  ),
];
