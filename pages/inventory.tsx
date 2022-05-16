import type { NextPage } from "next";
import { InventoryPage as InventoryPageComponent } from "~/components/inventory/inventoryPage/InventoryPage";
import { WithLayout } from "~/types/withLayout";
import { FullPageLayout } from "~/components/layouts/FullPageLayout";
import styled from "styled-components";

const InventoryPage: NextPage & WithLayout = () => {
  return <InventoryPageComponent />;
};

const PageLayout = styled(FullPageLayout)`
  background: black;
`;

InventoryPage.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default InventoryPage;
