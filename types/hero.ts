import { InventoryItem } from "~/types/inventoryItem";

type Gear = {
  melee: InventoryItem;
  backpack: InventoryItem;
  shield: InventoryItem;
};

export type Hero = {
  gear: Gear;
};
