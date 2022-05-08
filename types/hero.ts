import { InventoryItem } from "~/types/inventoryItem";

type Gear = {
  ranged?: InventoryItem;
  melee?: InventoryItem;
  backpack?: InventoryItem;
  shield?: InventoryItem;
  head?: InventoryItem;
  chest?: InventoryItem;
  hands?: InventoryItem;
  legs?: InventoryItem;
  boots?: InventoryItem;
};

export type Hero = {
  gear: Gear;
};
