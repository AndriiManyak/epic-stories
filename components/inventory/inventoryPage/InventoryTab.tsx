import styled from "styled-components";

type Props = {
  icon: string;
  title: string;
};

export const InventoryTab = ({ icon, title }: Props) => {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const IconWrapper = styled.div``;

const Title = styled.p``;
