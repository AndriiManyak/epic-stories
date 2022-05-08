import styled from "styled-components";
import { InventoryItemCharacteristics } from "~/types/inventoryItem";
import { ItemCharacteristic } from "~/components/inventory/ItemCharacteristic";

type Props = {
  characteristics: InventoryItemCharacteristics;
};

export const ItemCharacteristics = ({ characteristics }: Props) => {
  return (
    <Container>
      {Object.entries(characteristics).map((characteristic, index) => (
        <ItemCharacteristic key={index} characteristic={characteristic} />
      ))}
    </Container>
  );
};

const Container = styled.div``;
