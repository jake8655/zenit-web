import Events from "@/components/akcie";
import Filter from "@/components/filter";

export default function Akcie() {
  return (
    <div className="flex">
      <Filter />
      <Events />
    </div>
  );
}
