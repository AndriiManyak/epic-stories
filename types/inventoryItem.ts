import { InventoryItemTypes } from "~/types/inventoryItemTypes";

export type InventoryItem = {
  image: string | HTMLImageElement;
  type: InventoryItemTypes;
  weight: number;
  name: string;
  description: string;
  characteristics: object;
};
