import type { NextPage } from "next";
import { Inventory } from "~/components/invertory/Inventory";
import { GearComponent } from "~/components/invertory/GearComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Inventory size={25} />
      <GearComponent />
    </div>
  );
};

export default Home;
