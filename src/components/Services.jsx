import styled from "styled-components";
import FadeInOnScroll from "./FadeInOnScroll";
import Blob from "./Blob";
import { device } from "@/helpers/mediaQueries";

const StyledServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  position: relative;
  height: fit-content;
  margin-block: 40px;

  & > div {
    padding: 1rem;
    text-align: center;

    p {
      max-width: 500px;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    margin-block: 60px;
  }
`;

const Events = [
  {
    title: "Worship God",
    description: "Encounter Christ in the Holy Mass and sacraments.",
    icon: "icons/Icon-Dome.svg",
  },
  {
    title: "Pray for others",
    description: "Lift up your intentions in prayer and intercession.",
    icon: "icons/Icon-Church.svg",
  },
  {
    title: "Hear His words",
    description: "Grow in faith through Scripture and Church teachings.",
    icon: "icons/Icon-Bible.svg",
  },
];

const Services = () => {
  return (
    <StyledServices>
      {Events.map((event, index) => (
        <FadeInOnScroll key={index}>
          {({ isInView }) => (
            <Blob
              heading={event.title}
              text={event.description}
              image={event.icon}
              isInView={isInView}
            />
          )}
        </FadeInOnScroll>
      ))}
    </StyledServices>
  );
};

export default Services;
