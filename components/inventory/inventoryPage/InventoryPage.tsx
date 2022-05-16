import styled from "styled-components";
import { InventoryTabs } from "~/components/inventory/inventoryPage/InventoryTabs";

export const InventoryPage = () => {
  return (
    <Container>
      <InventoryTabs />
    </Container>
  );
};

const Container = styled.div``;
