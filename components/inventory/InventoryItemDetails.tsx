import { InventoryItem } from "~/types/inventoryItem";
import styled from "styled-components";
import Image from "next/image";
import { ItemCharacteristics } from "~/components/inventory/ItemCharacteristics";

type Props = {
  item: InventoryItem;
};

export const InventoryItemDetails = ({ item }: Props) => {
  return (
    <Container>
      <ItemMainDetails>
        <ItemImageWrapper>
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="cover"
          />
        </ItemImageWrapper>

        <ItemInfoWrapper>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
        </ItemInfoWrapper>
      </ItemMainDetails>

      <ItemCharacteristics characteristics={item.characteristics} />
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primaryBorder};
`;

const ItemMainDetails = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const ItemImageWrapper = styled.div`
  margin-right: 10px;
  height: 80px;
  width: 80px;
  min-width: 80px;

  position: relative;
`;

const ItemInfoWrapper = styled.div``;

const ItemName = styled.p``;

const ItemDescription = styled.p``;
