export const OrganizerTypesToLabels = {
  oz: "Občianske združenie",
  no: "Nezisková organizácia",
  sro: "Spoločnosť s ručením obmedzeným",
  as: "Akciová spoločnosť",
  statna: "Štátna inštitúcia",
  skola: "Škola / Vysoká škola",
  other: "Iné",
};

export type Organizer = {
  name: string;
  icon: string;
  logo?: string;
  web: string;
  type?: "oz" | "no" | "sro" | "as" | "statna" | "skola" | "other";
  info?: string;
  color?:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "black"
    | `#${string}`;
  country?: "sk" | "cz";
};

export const EventTypesToLabels = {
  sutaz: "súťaž",
  seminar: "seminár",
  sustredenie: "sústredenie",
  vikendovka: "víkendovka",
  tabor: "tábor",
  olympiada: "olympiáda",
  prednasky: "prednáška",
  other: "iné",
};
