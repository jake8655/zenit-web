export const SCHOOL_YEARS = [
  "ZŠ 1",
  "ZŠ 2",
  "ZŠ 3",
  "ZŠ 4",
  "ZŠ 5",
  "ZŠ 6",
  "ZŠ 7",
  "ZŠ 8",
  "ZŠ 9",
  "SŠ 1",
  "SŠ 2",
  "SŠ 3",
  "SŠ 4",
];

export type Event = {
  name: string;
  sciences: Array<"mat" | "fyz" | "inf" | "bio" | "chem" | "other" | "any">;
  type:
    | "sutaz"
    | "seminar"
    | "sustredenie"
    | "vikendovka"
    | "tabor"
    | "olympiada"
    | "prednasky"
    | "other";
  date: {
    start: string;
    end?: string;
    text?: string;
  };
  organizers: string[];
  link?: string;
  places?: string[];
  contestants: {
    min: string | null;
    max: string | null;
  };
  info?: string;
  color?:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | `#${string}`;
  volatile?: boolean;
  cancelled?: boolean;
  notifications?: {
    remind_days_before: number[];
  };
};
