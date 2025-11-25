import { relations } from "drizzle-orm";
import { int, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";

export const organizer = mysqlTable("organizer", (t) => ({
  id: t.int().primaryKey().autoincrement(),
  name: t.varchar({ length: 256 }).notNull(),
  icon: t.varchar({ length: 512 }).notNull(),
  logo: t.varchar({ length: 512 }),
  web: t.varchar({ length: 512 }).notNull(),
  type: t
    .varchar({
      enum: ["oz", "no", "sro", "as", "statna", "skola", "other"],
      length: 16,
    })
    .notNull()
    .default("other"),
  info: t.text().default(""),
  color: t.varchar({ length: 7 }),
  country: t
    .varchar({ length: 16, enum: ["sk", "cz"] })
    .notNull()
    .default("sk"),
}));
export type Organizer = typeof organizer.$inferSelect;

export const organizerRelations = relations(organizer, ({ many }) => ({
  organizersToEvents: many(organizersToEvents),
}));

export const organizersToEvents = mysqlTable(
  "organizers_to_events",
  {
    organizerId: int("organizer_id")
      .notNull()
      .references(() => organizer.id),
    eventId: int("event_id")
      .notNull()
      .references(() => event.id),
  },
  (t) => [primaryKey({ columns: [t.organizerId, t.eventId] })],
);
export type OrganizersToEvents = typeof organizersToEvents.$inferSelect;

export const event = mysqlTable("event", (t) => ({
  id: t.int().primaryKey().autoincrement(),
  name: t.varchar({ length: 256 }).notNull(),
  sciences: t.json().notNull(),
  type: t
    .varchar({
      enum: [
        "sutaz",
        "seminar",
        "sustredenie",
        "vikendovka",
        "tabor",
        "olympiada",
        "prednasky",
        "other",
      ],
      length: 16,
    })
    .notNull(),
  date: t.json().notNull(),
  link: t.varchar({ length: 512 }),
  places: t.json(),
  contestants: t.json().notNull(),
  info: t.text(),
  color: t.varchar({ length: 7 }),
  volatile: t.boolean().notNull().default(false),
  cancelled: t.boolean().notNull().default(false),
  notifications: t.json(),
}));
export type Event = typeof event.$inferSelect;

export const organizersToEventsRelations = relations(
  organizersToEvents,
  ({ one }) => ({
    organizer: one(organizer, {
      fields: [organizersToEvents.organizerId],
      references: [organizer.id],
    }),
    event: one(event, {
      fields: [organizersToEvents.eventId],
      references: [event.id],
    }),
  }),
);
