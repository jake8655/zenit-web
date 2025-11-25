"use client";

import { useState } from "react";
import { SCHOOL_YEARS } from "@/schemas/event";
import { DualRangeSlider } from "./ui/slider";
import { Switch } from "./ui/switch";

export default function Filter() {
  return (
    <div className="flex flex-col w-[30%] mt-12 bg-sidepanel-bg px-8 space-y-8">
      <YearFilter />
      <ScienceFilter />
    </div>
  );
}

function YearFilter() {
  const [values, setValues] = useState([0, 12]);

  return (
    <div className="flex flex-col gap-12">
      <p>ROČNÍK</p>
      <DualRangeSlider
        min={0}
        max={12}
        step={1}
        value={values}
        onValueChange={setValues}
        label={(value) => (
          <div className="bg-brand-blue text-white p-1 w-fit text-nowrap text-sm rounded-sm">
            {SCHOOL_YEARS[value as number]}
          </div>
        )}
        className="max-w-64"
      />
    </div>
  );
}

function ScienceFilter() {
  return (
    <div className="flex flex-col gap-4">
      <p>VEDA</p>
      {["Matematika", "Fyzika", "Informatika", "Biológia", "Chémia", "Iné"].map(
        (science) => (
          <div>
            <Switch key={science} />
            {science}
          </div>
        ),
      )}
    </div>
  );
}
