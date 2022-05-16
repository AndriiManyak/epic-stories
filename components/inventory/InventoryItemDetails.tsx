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
        <ItemCharacteristics characteristics={item.characteristics} />
      </ItemDetails>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;

const ItemName = styled.p`
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkBackground};
`;

const ItemDetails = styled.div`
  margin-bottom: 20px;

  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 10px;
`;

const ItemInfoWrapper = styled.div`
  margin-bottom: 10px;
`;

const ItemDescription = styled.p``;
