import { GearItem } from "~/components/inventory/gear/GearItem";
import { InventoryItemTypes } from "~/types/inventoryItemTypes";
import { hero } from "~/API/test-data/hero";
import humanSilhouette from "~/public/inventory/standing-human-body-silhouette.svg";
import styled from "styled-components";
import Image from "next/image";

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
            gearType={InventoryItemTypes.RANGED}
            gearItem={hero.gear.backpack}
          />
        </GearLine>

        <GearLine>
          {" "}
          <GearItem
            gearType={InventoryItemTypes.BACKPACK}
            gearItem={hero.gear.backpack}
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
        <Image
          src={humanSilhouette}
          alt="hero image"
          objectFit="contain"
          // layout="fill"
        />
      </GearHeroImage>

      <GearBlock>
        <GearLine>
          <GearItem
            gearType={InventoryItemTypes.MELEE}
            gearItem={hero.gear.melee}
          />
          <GearItem
            gearType={InventoryItemTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
        </GearLine>

        <GearLine>
          {" "}
          <GearItem
            gearType={InventoryItemTypes.BACKPACK}
            gearItem={hero.gear.backpack}
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
    </GearContainer>
  );
};

const GearContainer = styled.div`
  display: flex;
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
  justify-self: stretch;
`;
