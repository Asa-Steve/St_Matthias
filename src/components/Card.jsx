import styled from "styled-components";
import { useIsMobile } from "@/hooks/useResize";
import { device } from "@/helpers/mediaQueries";
import { HiOutlineTag } from "react-icons/hi2";
import Tag from "./Tag";

const StyledCard = styled.div`
  border: 2px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  border-radius: 5px;
  height: fit-content;
  width: 100%;
  max-width: 400px;
  padding: 0.2rem;
  cursor: pointer;

  &:hover {
    /* border-color: red; */
    box-shadow: var(--shadow-md);

    img {
      filter: grayscale();
    }
  }
`;

const CardImg = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 150px;
  margin-bottom: 0.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: filter 0.3s ease-in-out;
  }

  @media ${device.desktop} {
    height: 200px;
  }
`;
const CardBody = styled.div`
  border-radius: 5px;
  height: fit-content;
  max-height: 200px;
  padding: 0.5rem;

  h4 {
    color: var(--color-primary);
    text-shadow: 2px 2px 4px var(--color-grey-200);
    margin-bottom: 0.3rem;
  }
  p {
    font-size: var(--f-xsm);
  }
`;

const Card = ({ data }) => {
  const isMobile = useIsMobile();

  return (
    <StyledCard>
      <CardImg>
        <img src={data?.img} alt={`${data?.title}_${data?.id}`} />
      </CardImg>
      <CardBody>
        <h4>
          {data?.title.length <= 20 && data?.title.slice(0, 20)}{" "}
          {data?.title.length > 20
            ? isMobile
              ? data?.title.slice(0, 18) + " ..."
              : data?.title.slice(0, 44) + " ..."
            : null}
        </h4>
        <Tag category={data?.category}> </Tag>
        <p>
          {data?.description.length <= 20 && data?.description.slice(0, 20)}
          {data?.description.length > 20
            ? isMobile
              ? data?.description.slice(0, 44) + " ..."
              : data?.description.slice(0, 150) + " ..."
            : null}
        </p>
      </CardBody>
    </StyledCard>
  );
};

export default Card;
