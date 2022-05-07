import { InventoryItem } from "~/types/inventoryItem";

export type Hero = {
  gear: {
    melee: InventoryItem;
    backpack: InventoryItem;
  };
};
