import type { NextPage } from "next";
import { Inventory } from "~/components/invertory/Inventory";
import { Gear } from "~/components/invertory/Gear";

const Home: NextPage = () => {
  return (
    <div>
      <Inventory size={25} />
      <Gear />
    </div>
  );
};

export default Home;
