import Events from "@/components/akcie";
import Filter from "@/components/filter";

export const dynamic = "force-dynamic";

export default function Akcie() {
  return (
    <div className="flex">
      <Filter />
      <Events />
    </div>
  );
}
