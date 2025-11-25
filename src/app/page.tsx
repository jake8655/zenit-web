import fs from "node:fs/promises";
import OrganizerCard from "@/components/organizer";
import type { Organizer } from "@/schemas/organizer";

export default async function Home() {
  const organizers = await fs.readFile("data/organizers.json", "utf-8");
  const parsed = JSON.parse(organizers) as Record<string, Organizer>;

  return (
    <main className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {Object.entries(parsed).map(([key, organizer]) => (
          <OrganizerCard key={key} organizer={organizer} />
        ))}
      </div>
    </main>
  );
}
