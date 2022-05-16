import styled from "styled-components";

type Props = {
  isActive: boolean;
  title: string;
  onClick: () => void;
};

export const InventoryTab = ({ title, isActive, onClick }: Props) => {
  return (
    <Container isActive={isActive} onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div<{ isActive: boolean }>`
  display: flex;

  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`;

const Title = styled.p``;
