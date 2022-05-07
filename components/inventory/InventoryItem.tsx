import styled from "styled-components";
import Image from "next/image";

type Props = {
  itemImage?: string | HTMLImageElement;
};

export const InventoryItem = ({ itemImage }: Props) => {
  return (
    <InventoryContainer>
      {itemImage ? (
        <ImageContainer>
          <Image
            src={itemImage}
            alt="sword"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      ) : (
        <span>empty</span>
      )}
    </InventoryContainer>
  );
};

const InventoryContainer = styled.div`
  height: 100%;
  width: 100%;

  padding: 5px;
  border: 2px solid ${({ theme }) => theme.colors.black};
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
