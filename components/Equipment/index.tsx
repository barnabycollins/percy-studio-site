import Image from "next/image";
import { EquipmentProps } from "../../types/props/Equipment";

export function Equipment({ title, items }: EquipmentProps) {
  return (
    <div className="equipment">
      <h2>{title}</h2>
      {items.map((i) => (
        <div key={i.title}>
          <Image src={i.image} alt={`Photo of a ${i.title} (${i.subtitle})`} />
          <h3>{i.title}</h3>
          <h4>{i.subtitle}</h4>
          <p>{i.blurb}</p>
        </div>
      ))}
    </div>
  );
}
