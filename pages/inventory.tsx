import type { NextPage } from "next";
import { InventoryPage } from "~/components/inventory/inventoryPage/InventoryPage";
import { WithLayout } from "~/types/withLayout";
import { FullPageLayout } from "~/components/layouts/FullPageLayout";

const Inventory: NextPage & WithLayout = () => {
  return <InventoryPage />;
};

Inventory.getLayout = (page) => {
  return <FullPageLayout>{page}</FullPageLayout>;
};

export default Inventory;
