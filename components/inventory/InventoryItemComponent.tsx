import styled from "styled-components";
import Image from "next/image";
import { InventoryItem } from "~/types/inventoryItem";
import { InventoryItemDetails } from "~/components/inventory/InventoryItemDetails";
import { useState } from "react";

type Props = {
  item?: InventoryItem;
};

export const InventoryItemComponent = ({ item }: Props) => {
  const [isItemDetailsVisible, setIsItemDetailsVisible] = useState(false);

  const showItemDetails = () => {
    setIsItemDetailsVisible(true);
  };

  const hideItemDetails = () => {
    setIsItemDetailsVisible(false);
  };

  return (
    <Container>
      {item ? (
        <ItemContainer
          onMouseEnter={showItemDetails}
          onMouseLeave={hideItemDetails}
        >
          <ItemDetailsWrapper isVisible={isItemDetailsVisible}>
            <InventoryItemDetails item={item} />
          </ItemDetailsWrapper>
          <ImageContainer>
            <Image
              src={item.image}
              alt="sword"
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
        </ItemContainer>
      ) : (
        <EmptyLabel>empty</EmptyLabel>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.black};
`;

const ItemContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  padding: 5px;
`;

const ItemDetailsWrapper = styled.div<{ isVisible: boolean }>`
  min-width: 400px;
  position: absolute;
  top: 90%;
  left: 90%;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  z-index: 1;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const EmptyLabel = styled.p`
  margin: auto;
`;
