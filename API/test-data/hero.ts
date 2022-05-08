import { InventoryItemTypes } from "~/types/inventoryItemTypes";
import { Hero } from "~/types/hero";

import shield from "~/public/test/shield-icon.svg";
import sword from "~/public/test/sword-icon.svg";
import backpack from "~/public/test/backpack-icon.svg";
import crossbow from "~/public/test/crossbow-icon.svg";

export const hero: Hero = {
  gear: {
    melee: {
      type: InventoryItemTypes.MELEE,
      image: sword,
      name: "Test sword",
      weight: 20,
      cost: 100,
      description: `test item description test item description test item description test item description test item description test item description `,
      characteristics: {
        damage: 25,
      },
    },
    shield: {
      type: InventoryItemTypes.SHIELD,
      image: shield,
      name: "Shield",
      weight: 20,
      cost: 100,
      description: "test item description",
      characteristics: {
        defence: 60,
      },
    },
    backpack: {
      type: InventoryItemTypes.BACKPACK,
      image: backpack,
      name: "Test backpack",
      weight: 20,
      cost: 100,
      description: "test item description",
      characteristics: {
        weight_reduction: 60,
      },
    },
    ranged: {
      type: InventoryItemTypes.RANGED,
      image: crossbow,
      name: "ranged",
      weight: 20,
      cost: 100,
      description: "test item description",
      characteristics: {
        distant: 60,
        damage: 40,
      },
    },
  },
};
