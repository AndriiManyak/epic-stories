import { InventoryItemTypes } from "~/types/inventoryItemTypes";
import sword from "~/public/test/sword-icon.svg";
import backpack from "~/public/test/backpack-icon.svg";

export const hero = {
  gear: {
    melee: {
      type: InventoryItemTypes.MELEE,
      image: sword,
      name: "Test sword",
      weight: 20,
      description: "test item description",
      characteristics: {},
    },
    backpack: {
      type: InventoryItemTypes.BACKPACK,
      image: backpack,
      name: "Test backpack",
      weight: 20,
      description: "test item description",
      characteristics: {},
    },
  },
};
