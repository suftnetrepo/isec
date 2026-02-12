import { ServiceCard } from "./serviceCard";
// CUSTOM DATA
import { services } from "@/data/demo-12";

export function Services() {
  return (
    <div className="row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17">
      {services.map(({ id, Icon, ...item }) => (
        <ServiceCard {...item} key={id} linkUrl="#" Icon={Icon} />
      ))}
    </div>
  );
}
