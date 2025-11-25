import { eq } from "drizzle-orm";
import Image from "next/image";
import { EventTypesToLabels } from "@/schemas/organizer";
import { db } from "@/server/db";
import {
  type Event,
  event,
  type Organizer,
  type OrganizersToEvents,
  organizer,
  organizersToEvents,
} from "@/server/db/schema";

export default async function Events() {
  const data = await db
    .select()
    .from(organizersToEvents)
    .leftJoin(organizer, eq(organizersToEvents.organizerId, organizer.id))
    .leftJoin(event, eq(organizersToEvents.eventId, event.id))
    .limit(100);

  return (
    <div className="w-[70%]">
      {data.map((eventData) => (
        <EventCard
          key={eventData.event!.id}
          data={{
            organizers_to_events: eventData.organizers_to_events,
            organizer: eventData.organizer!,
            event: eventData.event!,
          }}
        />
      ))}
    </div>
  );
}

function EventCard({
  data,
}: {
  data: {
    organizers_to_events: OrganizersToEvents;
    organizer: Organizer;
    event: Event & { sciences: string };
  };
}) {
  return (
    <div className="flex items-center gap-4 border-t border-neutral-300 p-4">
      <div
        className="size-5 rounded-full shrink-0"
        style={{
          backgroundColor: data.organizer.color || "#cccccc",
        }}
      />
      <div>
        {/* Date */}
        <div>
          {JSON.parse(data.event.date as string).start}
          {JSON.parse(data.event.date as string).end &&
            ` - ${JSON.parse(data.event.date as string).end}`}
        </div>

        <h3 className="font-bold text-2xl">{data.event.name}</h3>
        <p>{data.event.info}</p>

        {/* Misc info */}
        <div className="flex items-center text-neutral-700 gap-4">
          {JSON.parse(data.event.sciences).map((science: string) => (
            <div
              key={science}
              className="text-neutral-800 text-sm px-2 py-1 rounded-full flex items-center gap-1"
            >
              <Image
                src="/images/icons/mdi--book-open-blank-variant.svg"
                width={14}
                height={14}
                alt={science}
                className=""
              />
              {science.toUpperCase()}
            </div>
          ))}

          <div className="flex items-center gap-1">
            <Image
              src="/images/icons/mdi--information.svg"
              width={14}
              height={14}
              alt="Informácia"
            />
            <span>{EventTypesToLabels[data.event.type]}</span>
          </div>

          {data.event.link && (
            <a
              href={data.event.link}
              rel="noopener noreferrer"
              target="_blank"
              className="flex gap-1 text-brand-blue"
            >
              <Image
                src="/images/icons/mdi--link-variant.svg"
                width={14}
                height={14}
                alt="Link"
              />
              Webová stránka
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
