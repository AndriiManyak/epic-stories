import type { NextPage } from "next";
import { Inventory } from "~/components/inventory/Inventory";
import { GearComponent } from "~/components/inventory/gear/GearComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Inventory size={25} />
      <GearComponent />
    </div>
  );
};

export default Home;
