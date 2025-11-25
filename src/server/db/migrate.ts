import fs from "node:fs/promises";
import { eq } from "drizzle-orm";
import { db } from ".";
import { event, organizer, organizersToEvents } from "./schema";

const events1 = await fs.readFile("data/2019_20.json", "utf-8");
const events2 = await fs.readFile("data/2020_21.json", "utf-8");
const events3 = await fs.readFile("data/2021_22.json", "utf-8");
const events4 = await fs.readFile("data/2022_23.json", "utf-8");
const events5 = await fs.readFile("data/2023_24.json", "utf-8");
const events6 = await fs.readFile("data/2024_25.json", "utf-8");
const events7 = await fs.readFile("data/2025_26.json", "utf-8");

const allEvents = [
  ...JSON.parse(events1),
  ...JSON.parse(events2),
  ...JSON.parse(events3),
  ...JSON.parse(events4),
  ...JSON.parse(events5),
  ...JSON.parse(events6),
  ...JSON.parse(events7),
];

let i = 0;
for (const eventData of allEvents) {
  i++;
  const organizers = eventData.organizers;
  const organizerIds = [];
  for (const organizerName of organizers) {
    const organizerDB = await db
      .select()
      .from(organizer)
      .where(eq(organizer.icon, `logos/${organizerName}.svg`))
      .limit(1);
    organizerIds.push(organizerDB[0]!.id);
  }

  if (organizerIds.length === 0) {
    console.log(`Skipping event ${eventData.name} with no organizers`);
    continue;
  }

  const insertedEvent = await db
    .select()
    .from(event)
    .where(eq(event.id, i))
    .limit(1);

  await db.insert(organizersToEvents).values({
    eventId: insertedEvent[0]!.id,
    organizerId: organizerIds[0]!,
  });
}

