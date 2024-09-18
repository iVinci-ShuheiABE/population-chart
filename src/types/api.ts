export type PrefectureData = {
  prefCode: number;
  prefName: string;
};

export type PrefectureDataDto = {
  message: string;
  result: Array<PrefectureData>;
};

export type PopulationData = {
  year: number;
  value: number;
  rate?: number;
};

export type PopulationDataDto = {
  boundaryYear: number;
  data: {
    label: PopulationType;
    data: Array<PopulationData>;
  };
};

export enum PopulationType {
  ALL = "総人口",
  YOUTH = "年少人口",
  WORKING = "生産年齢人口",
  ELDERLY = "老年人口",
}
