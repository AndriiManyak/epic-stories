import styled from "styled-components";
import sword from "../../public/test/sword-icon.svg";
import Image from "next/image";

const InventoryContainer = styled.div`
	height: 50px;
	width: 50px;
	
	padding: 5px;
	border: 2px solid black;
`

export const InventoryBlock = () => {
  return <InventoryContainer><Image src={sword} alt="sword"/></InventoryContainer>
}
