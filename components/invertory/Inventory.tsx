import styled from "styled-components";
import { InventoryItem } from "~/components/invertory/InventoryItem";

type Props = {
  size: number;
};

export const Inventory = ({ size }: Props) => {
  return (
    <InventoryContainer>
      {Array(size)
        .fill(1)
        .map((_, index) => (
          <InventoryItem key={index} />
        ))}
    </InventoryContainer>
  );
};

const InventoryContainer = styled.div`
  display: grid;
  grid-template: repeat(5, 50px) / repeat(5, 50px);
`;
