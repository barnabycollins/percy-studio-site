import Image from "next/image";
import { EquipmentProps } from "../../types/props/Equipment";

export function Equipment({ title, categories }: EquipmentProps) {
  return (
    <div className="equipment">
      <h2>{title}</h2>
      {categories.map((c) => (
        <div key={c.title} style={{ marginTop: 100, marginBottom: 100 }}>
          <h3>{c.title}</h3>
          {c.items.map((i) => (
            <div key={i.title}>
              <h4>{i.title}</h4>
              <h5>
                {i.subtitle}; released {i.release}
              </h5>
              <Image
                src={i.image}
                alt={`Photo of a ${i.title} (${i.subtitle})`}
              />
              <p>{i.blurb}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
