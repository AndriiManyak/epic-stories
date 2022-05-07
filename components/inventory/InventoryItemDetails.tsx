import { InventoryItem } from "~/types/inventoryItem";
import styled from "styled-components";
import Image from "next/image";

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

      <ItemCharacteristics></ItemCharacteristics>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;

  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const ItemMainDetails = styled.div`
  display: flex;
`;

const ItemImageWrapper = styled.div`
  margin-right: 10px;
  height: 80px;
  width: 80px;

  position: relative;
`;

const ItemInfoWrapper = styled.div``;

const ItemName = styled.p``;

const ItemDescription = styled.p``;

const ItemCharacteristics = styled.div``;
