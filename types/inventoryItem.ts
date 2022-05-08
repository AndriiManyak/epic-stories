import { InventoryItemTypes } from "~/types/inventoryItemTypes";

export type InventoryItemCharacteristics = {
  damage?: number;
  defence?: number;
  weight_reduction?: number;
  distant?: number;
};

export type InventoryItem = {
  image: string | HTMLImageElement;
  type: InventoryItemTypes;
  cost: 100;
  weight: number;
  name: string;
  description: string;
  characteristics: InventoryItemCharacteristics;
};
