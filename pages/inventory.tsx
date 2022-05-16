import type { NextPage } from "next";
import { InventoryPage as InventoryPageComponent } from "~/components/inventory/inventoryPage/InventoryPage";
import { WithLayout } from "~/types/withLayout";
import { FullPageLayout } from "~/components/layouts/FullPageLayout";

const InventoryPage: NextPage & WithLayout = () => {
  return <InventoryPageComponent />;
};

InventoryPage.getLayout = (page) => {
  return <FullPageLayout>{page}</FullPageLayout>;
};

export default InventoryPage;
