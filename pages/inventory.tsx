import type { NextPage } from "next";
import { InventoryPage as InventoryPageComponent } from "~/components/inventory/inventoryPage/InventoryPage";
import { WithLayout } from "~/types/withLayout";
import { GameContainerLayout } from "~/components/layouts/GameContainerLayout";

const InventoryPage: NextPage & WithLayout = () => {
  return <InventoryPageComponent />;
};

InventoryPage.getLayout = (page) => {
  return <GameContainerLayout>{page}</GameContainerLayout>;
};

export default InventoryPage;
