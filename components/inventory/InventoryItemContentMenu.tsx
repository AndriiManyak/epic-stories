import styled from "styled-components";

type Props = {
  isVisible: boolean;
};

export const InventoryItemContentMenu = ({ isVisible }: Props) => {
  return (
    <Container isVisible={isVisible}>
      <Menu>
        <Option>Take off</Option>
        <Option>Throw</Option>
      </Menu>
    </Container>
  );
};

const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  background: white;
  color: black;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
`;

const Menu = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;

  padding: 5px 0;
`;

const Option = styled.div`
  padding: 5px 10px;

  &:hover {
    border-left: 4px solid ${({ theme }) => theme.colors.darkBackground};
    background: ${({ theme }) => theme.colors.lightBackground};
  }
`;
