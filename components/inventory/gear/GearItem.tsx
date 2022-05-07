import styled from "styled-components";
import { GearTypes } from "~/types/gearTypes";
import { InventoryItem } from "~/components/inventory/InventoryItem";
import { Gear } from "~/types/gearItem";

type Props = {
  gearType: GearTypes;
  gearItem: Gear;
};

export const GearItem = ({ gearType, gearItem }: Props) => {
  return (
    <GearItemContainer>
      <GearItemName>{gearType}</GearItemName>
      <GearItemBlock>
        <InventoryItem itemImage={gearItem?.image} />
      </GearItemBlock>
    </GearItemContainer>
  );
};

const GearItemContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 0;
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
