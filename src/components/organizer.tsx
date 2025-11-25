import Image from "next/image";
import { type Organizer, OrganizerTypesToLabels } from "@/schemas/organizer";

export default function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return (
    <div
      className="flex flex-col border border-brand-blue justify-center items-center p-4 rounded-lg gap-4"
      style={
        organizer.color && {
          borderColor: organizer.color,
        }
      }
    >
      <Image
        src={`/images/${organizer.icon}`}
        alt={organizer.name}
        width={50}
        height={50}
      />

      {/* Main info */}
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-center">
          {organizer.name}
          {organizer.country && `, ${organizer.country.toUpperCase()}`}
        </h3>

        {/* Website link */}
        <div className="flex items-center text-sm">
          <Image
            src="/images/icons/mdi--link-variant.svg"
            width={24}
            height={24}
            alt="Link"
          />
          {organizer.web}
        </div>

        {organizer.type && (
          <p className="text-sm">{OrganizerTypesToLabels[organizer.type]}</p>
        )}
      </div>

      {/* Additional info */}
      {organizer.info && (
        <p className="text-center text-sm mb-4">{organizer.info}</p>
      )}
    </div>
  );
}
