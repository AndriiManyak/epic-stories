import styled from "styled-components";

type Props = {
  characteristic: [string, number];
};

const parseCharacteristicsLabel = (label: string): string =>
  label.split("_").join(" ");

export const ItemCharacteristic = ({ characteristic }: Props) => {
  return (
    <Container>
      <CharacteristicLabel>
        {parseCharacteristicsLabel(characteristic[0])}
      </CharacteristicLabel>
      <CharacteristicValue max={100} value={characteristic[1]} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CharacteristicLabel = styled.p`
  margin-right: 10px;
`;

const CharacteristicValue = styled.progress`
  border: none;
  height: 10px;
`;
