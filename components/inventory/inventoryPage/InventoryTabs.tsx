import styled from "styled-components";
import { InventoryTab } from "~/components/inventory/inventoryPage/InventoryTab";
import { GearComponent } from "~/components/inventory/gear/GearComponent";

const tabs: { icon: string; title: string }[] = [
  {
    title: "Gear",
    icon: "Gear",
  },
  {
    title: "Backpack",
    icon: "Backpack",
  },
];

export const InventoryTabs = () => {
  return (
    <Container>
      <TabsList>
        {tabs.map((tab, index) => (
          <InventoryTab key={index} icon={tab.icon} title={tab.title} />
        ))}
      </TabsList>

      <TabContent>
        <GearComponent />
      </TabContent>
    </Container>
  );
};

const Container = styled.div``;

const TabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-bottom: 20px;
`;

const TabContent = styled.div`
  display: flex;
  justify-content: center;
`;
