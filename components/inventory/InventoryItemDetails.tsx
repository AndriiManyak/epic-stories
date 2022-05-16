import { InventoryItem } from "~/types/inventoryItem";
import styled from "styled-components";
import { ItemCharacteristics } from "~/components/inventory/ItemCharacteristics";

type Props = {
  item: InventoryItem;
};

export const InventoryItemDetails = ({ item }: Props) => {
  return (
    <Container>
      <ItemName>{item.name}</ItemName>

      <ItemDetails>
        <ItemInfoWrapper>
          <ItemDescription>{item.description}</ItemDescription>
        </ItemInfoWrapper>
      </ItemDetails>

      <ItemCharacteristics characteristics={item.characteristics} />
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primaryBorder};
`;

const ItemName = styled.p`
  padding: 5px 10px;
`;

const ItemDetails = styled.div`
  margin-bottom: 20px;
  display: flex;

  padding: 10px;
`;

const ItemInfoWrapper = styled.div``;

const ItemDescription = styled.p``;
