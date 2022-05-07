import { GearItem } from "~/components/inventory/gear/GearItem";
import { GearTypes } from "~/types/gearTypes";
import { hero } from "~/API/test-data/hero";
import humanSilhouette from "~/public/inventory/standing-human-body-silhouette.svg";
import styled from "styled-components";
import Image from "next/image";

export const GearComponent = () => {
  return (
    <GearContainer>
      <GearBlock>
        <GearLine>
          <GearItem gearType={GearTypes.MELEE} gearItem={hero.gear.melee} />
          <GearItem gearType={GearTypes.RANGED} gearItem={hero.gear.backpack} />
        </GearLine>

        <GearLine>
          {" "}
          <GearItem
            gearType={GearTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
        </GearLine>

        <GearLine>
          <GearItem
            gearType={GearTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
          <GearItem
            gearType={GearTypes.BACKPACK}
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
          <GearItem gearType={GearTypes.MELEE} gearItem={hero.gear.melee} />
          <GearItem
            gearType={GearTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
        </GearLine>

        <GearLine>
          {" "}
          <GearItem
            gearType={GearTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
        </GearLine>

        <GearLine>
          <GearItem
            gearType={GearTypes.BACKPACK}
            gearItem={hero.gear.backpack}
          />
          <GearItem
            gearType={GearTypes.BACKPACK}
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
