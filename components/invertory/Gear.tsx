import { GearItem } from "~/components/invertory/GearItem";
import { GearTypes } from "~/types/gearTypes";

export const Gear = () => {
  return (
    <div>
      <GearItem gearType={GearTypes.MELEE} />
    </div>
  );
};
