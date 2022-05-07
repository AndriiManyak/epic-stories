import type { NextPage } from "next";
import { Inventory } from "~/components/inventory/Inventory";
import { GearComponent } from "~/components/inventory/gear/GearComponent";
import { InventoryItemDetails } from "~/components/inventory/InventoryItemDetails";
import { hero } from "~/API/test-data/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Inventory size={25} />
      <GearComponent />
      <InventoryItemDetails item={hero.gear.melee} />
    </div>
  );
};

export default Home;
