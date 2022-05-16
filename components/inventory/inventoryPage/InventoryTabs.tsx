import styled from "styled-components";
import { InventoryTab } from "~/components/inventory/inventoryPage/InventoryTab";
import { GearComponent } from "~/components/inventory/gear/GearComponent";
import { ReactNode, useState } from "react";
import { Inventory } from "~/components/inventory/Inventory";

const tabs: { icon: string; title: string; content: ReactNode }[] = [
  {
    title: "Gear",
    icon: "Gear",
    content: <GearComponent />,
  },
  {
    title: "Backpack",
    icon: "Backpack",
    content: <Inventory size={20} />,
  },
];

export const InventoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const selectTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Container>
      <TabsList>
        {tabs.map((tab, index) => (
          <InventoryTab
            key={index}
            icon={tab.icon}
            title={tab.title}
            isActive={index === activeTab}
            onClick={() => selectTab(index)}
          />
        ))}
      </TabsList>

      <TabContent>
        {tabs.map((tab, index) => (
          <ContentWrapper key={index} isShown={index === activeTab}>
            {tab.content}
          </ContentWrapper>
        ))}
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

const ContentWrapper = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? "block" : "none")};
`;
