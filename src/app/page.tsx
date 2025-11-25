import OrganizerCard from "@/components/organizer";
import { db } from "@/server/db";

export default async function Home() {
  const organizers = await db.query.organizer.findMany();

  return (
    <main className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {organizers.map((organizer) => (
          // @ts-expect-error literally doesnt make sense
          <OrganizerCard key={organizer.id} organizer={organizer} />
        ))}
      </div>
    </main>
  );
}
