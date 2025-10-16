import { device } from "@/helpers/mediaQueries";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledFaceCard = styled(NavLink)`
  display: block;
  border: 1px solid var(--color-grey-200);
  width: 100%;
  padding: 0.5rem 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 10px var(--color-secondary),
      2px 2px 1px var(--color-primary);

    img {
      scale: 1.1;
    }
  }

  @media ${device.tablet} {
    width: 250px;
  }
`;
const CardPhoto = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  margin-bottom: 0.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.7s ease;
  }
`;
const CardHeading = styled.h4`
  text-align: center;
`;
const CardDesc = styled.p`
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: var(--f-xxsm);
`;

const FaceCard = ({ name, title, imgUrl }) => {
  return (
    <StyledFaceCard>
      <CardPhoto>
        <img src={`/images/${imgUrl}.jpg`} alt={`A photo of ${name}`} />
      </CardPhoto>
      <CardHeading>{name}</CardHeading>
      <CardDesc>{title}</CardDesc>
    </StyledFaceCard>
  );
};

export default FaceCard;
