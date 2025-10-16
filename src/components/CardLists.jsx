import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { cardData } from "@/helpers/helpers";
import { device } from "@/helpers/mediaQueries";

const StyledCardLists = styled.div`
  padding: 25px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  column-gap: 0.5rem;
  justify-items: center;
  row-gap: 1rem;

  a {
    width: fit-content;
    height: fit-content;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const CardLists = () => {
  return (
    <>
      <StyledCardLists>
        {cardData?.map((data) => (
          <Link to={`/articles/${data?.id}`} key={data?.id}>
            <Card data={data} />
          </Link>
        ))}
      </StyledCardLists>
    </>
  );
};

export default CardLists;
