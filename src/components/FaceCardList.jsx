import styled from "styled-components";
import FaceCard from "./FaceCard";
import { priests } from "@/helpers/priests";
import { device } from "@/helpers/mediaQueries";

const StyledFaceCardList = styled.div`
  padding: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

const FaceCardList = () => {
  return (
    <StyledFaceCardList>
      {priests?.map((priest, idx) => (
        <FaceCard
          key={`${idx}_${priest?.id}`}
          name={priest?.name}
          title={priest?.title}
          imgUrl={priest?.imgUrl}
        />
      ))}
    </StyledFaceCardList>
  );
};

export default FaceCardList;
