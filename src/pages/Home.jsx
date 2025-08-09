import AnimatedSlider from "@/components/AnimatedSlider";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import styled from "styled-components";
import Services from "@/components/Services";
import MinistrySlider from "@/components/MinistrySlider";
import FaceCardList from "@/components/FaceCardList";
import TagLine from "@/components/TagLine";
import { Link } from "react-router-dom";
import FAQs from "@/components/FAQs";
import { device } from "@/helpers/mediaQueries";

const Section = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  margin-block: 60px;
`;

const ReligiousSection = styled(Section)`
  margin-block: 100px 0;
  @media ${device.desktop} {
    margin-block: 180px 0;
  }
`;

const StyledMinistrySlider = styled(Section)`
  margin-block: 100px 0;
  background: url("/waves.svg") no-repeat center bottom / cover;
  @media ${device.desktop} {
    margin-block: 180px 0;
  }
`;

const StyledFaqSection = styled(Section)`
  background-color: var(--color-secondary);
  color: var(--color-grey-0);
  padding: 3rem 0;
  border-bottom: 1px solid var(--color-grey-600);
  margin-block: 100px 0;

  @media ${device.tablet} {
    padding: 3rem;
  }
  @media ${device.desktop} {
    margin-block: 180px 0;
  }
`;

const WriteUp = styled.div`
  text-align: center;

  @media ${device.desktop} {
    h2 {
      font-size: var(--f-xlg);
    }
  }
`;

const FAQSection = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex-wrap: wrap;
    flex-direction: row;
    margin-block: 2rem;
    align-items: center;
    height: 70vh;
  }
`;

const Left = styled.div`
  flex: 1 1 400px;
  height: 450px;

  @media ${device.tablet} {
    height: 450px;
  }
`;
const Right = styled.div`
  padding: 1rem 1rem 1rem;
  text-align: center;
  height: fit-content;
  margin-top: 0rem;

  p {
    margin-block: 1rem 3rem;
  }

  a {
    padding: 0.6rem 2rem;
    border-radius: 5px;
    background-color: var(--color-primary);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-secondary);
      outline: 2px solid var(--color-grey-0);
      outline-offset: 2px;
    }
  }

  @media ${device.tablet} {
    flex: 1 0 300px;
    align-self: center;
    border-left: 1px solid var(--color-grey-700);
    margin-top: -2.5rem;
    height: 300px;
    padding: 1rem 1rem 2rem;
    text-align: unset;

    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      width: fit-content;
    }
  }
`;

const ServicesWrap = styled.div`
  margin-block: 50px 0;
  @media ${device.desktop} {
    margin-block: 80px 0;
  }
`;
const Home = () => {
  return (
    <>
      <AnimatedSlider />
      <FadeInOnScroll>
        <ServicesWrap>
          <Services />
        </ServicesWrap>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <StyledMinistrySlider>
          <MinistrySlider />
        </StyledMinistrySlider>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <ReligiousSection>
          <WriteUp>
            <TagLine>Meet The Team</TagLine>
            <h2>Our Priests and Religious</h2>
          </WriteUp>
          <FaceCardList />
        </ReligiousSection>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <StyledFaqSection>
          <WriteUp>
            <TagLine>Most Asked</TagLine>
            <h2>Frequently Asked</h2>
          </WriteUp>

          <FAQSection>
            <Left>
              <FAQs />
            </Left>

            <Right>
              <h3>Have Any Questions ? </h3>
              <p>
                We’re here to guide you! Whether it’s about receiving the
                sacraments, joining the parish, or participating in ministries,
                feel free to reach out.
              </p>
              <Link>Contact Us</Link>
            </Right>
          </FAQSection>
        </StyledFaqSection>
      </FadeInOnScroll>
    </>
  );
};

export default Home;
