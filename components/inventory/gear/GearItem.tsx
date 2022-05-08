import styled from "styled-components";
import { InventoryItemTypes } from "~/types/inventoryItemTypes";
import { InventoryItemComponent as InventoryItemComponent } from "~/components/inventory/InventoryItemComponent";
import { InventoryItem } from "~/types/inventoryItem";

type Props = {
  gearType: InventoryItemTypes;
  gearItem: InventoryItem;
};

export const GearItem = ({ gearType, gearItem }: Props) => {
  return (
    <GearItemContainer>
      <GearItemName>{gearType}</GearItemName>
      <GearItemBlock>
        <InventoryItemComponent item={gearItem} />
      </GearItemBlock>
    </GearItemContainer>
  );
};

const GearItemContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 0;

  cursor: pointer;
`;

const GearItemName = styled.p`
  border-right: 2px solid black;
  text-transform: uppercase;
`;

const GearItemBlock = styled.div`
  width: 80px;
  height: 80px;

  border: none;
`;
