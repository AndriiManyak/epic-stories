import styled from "styled-components";
import { InventoryItemComponent } from "~/components/inventory/InventoryItemComponent";
import { hero } from "~/API/test-data/hero";

type Props = {
  size: number;
};

export const Inventory = ({ size }: Props) => {
  return (
    <InventoryContainer>
      {Array(size)
        .fill(1)
        .map((_, index) => (
          <InventoryItemComponent key={index} item={hero.gear.head} />
        ))}
    </InventoryContainer>
  );
};

const InventoryContainer = styled.div`
  display: grid;
  grid-template: repeat(5, 80px) / repeat(5, 80px);
`;
