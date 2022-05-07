import { GearTypes } from "~/types/gearTypes";

export type Gear = {
  image: string | HTMLImageElement;
  type: GearTypes;
  weight: number;
  name: string;
  description: string;
  characteristics: object;
};
