import { GearItem } from "~/components/inventory/gear/GearItem";
import { InventoryItemTypes } from "~/types/inventoryItemTypes";
import { hero } from "~/API/test-data/hero";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Model from "~/Model";

export const GearComponent = () => {
  return (
    <GearContainer>
      <GearBlock>
        <GearLine>
          <GearItem
            gearType={InventoryItemTypes.MELEE}
            gearItem={hero.gear.melee}
          />
          <GearItem
            gearType={InventoryItemTypes.SHIELD}
            gearItem={hero.gear.shield}
          />
        </GearLine>

        <GearLine>
          <GearItem
            gearType={InventoryItemTypes.RANGED}
            gearItem={hero.gear.ranged}
          />
        </GearLine>

        <GearLine>
          <GearItem
            gearType={InventoryItemTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
          <GearItem
            gearType={InventoryItemTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
        </GearLine>
      </GearBlock>

      <GearHeroImage>
        {/*<Image src={humanSilhouette} alt="hero image" objectFit="contain" />*/}
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
            backgroundColor: "#111a21",
            width: "400px",
            height: "500px",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Model position={[0.025, -0.9, 0]} />
        </Canvas>
      </GearHeroImage>

      <GearBlock>
        <GearLine>
          <GearItem
            gearType={InventoryItemTypes.HEAD}
            gearItem={hero.gear.head}
          />
        </GearLine>

        <GearLine>
          <GearItem
            gearType={InventoryItemTypes.CHEST}
            gearItem={hero.gear.chest}
          />
          <GearItem
            gearType={InventoryItemTypes.HANDS}
            gearItem={hero.gear.hands}
          />
        </GearLine>

        <GearLine>
          <GearItem
            gearType={InventoryItemTypes.LEGS}
            gearItem={hero.gear.legs}
          />
          <GearItem
            gearType={InventoryItemTypes.BOOTS}
            gearItem={hero.gear.boots}
          />
        </GearLine>
      </GearBlock>
    </GearContainer>
  );
};

const GearContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

const GearBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GearLine = styled.div`
  display: flex;
  gap: 30px;
`;

const GearHeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
`;
