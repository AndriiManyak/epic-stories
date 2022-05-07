import { GearItem } from "~/components/invertory/GearItem";
import { GearTypes } from "~/types/gearTypes";

import sword from "~/public/test/sword-icon.svg";
import backpack from "~/public/test/backpack-icon.svg";
import { Gear } from "~/types/gearItem";

export const GearComponent = () => {
  const items: Gear[] = [
    {
      type: GearTypes.MELEE,
      image: sword,
    },
    {
      type: GearTypes.BACKPACK,
      image: backpack,
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <GearItem key={index} gearType={GearTypes.MELEE} gearItem={item} />
      ))}
    </div>
  );
};
