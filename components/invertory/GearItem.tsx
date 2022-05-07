import styled from "styled-components";
import { GearTypes } from "~/types/gearTypes";
import Image from "next/image";
import sword from "~/public/test/sword-icon.svg";

type Props = {
  gearType: GearTypes;
};

export const GearItem = ({ gearType }: Props) => {
  return (
    <GearItemContainer>
      <GearItemName>{gearType}</GearItemName>
      <GearItemWrapper>
        <Image src={sword} alt="sword" />
      </GearItemWrapper>
    </GearItemContainer>
  );
};

const GearItemContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px;

  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const GearItemName = styled.p`
  text-transform: uppercase;
`;

const GearItemWrapper = styled.div`
  height: 50px;
  width: 50px;
`;
