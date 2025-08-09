import ContactForm from "@/components/ContactForm";
import FaceCardList from "@/components/FaceCardList";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import FAQs from "@/components/FAQs";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import styled from "styled-components";

const StyledAbout = styled.div`
  padding: 0 0.5rem;

  @media ${device.tablet} {
    padding: 0 2rem;
  }
`;

const MissionStatement = styled.div`
  margin-block: 100px 0;

  display: flex;
  flex-direction: column-reverse;

  @media ${device.desktop} {
    margin-block: 180px 0;
    flex-direction: row;
    height: 500px;
    align-items: center;
  }
`;
const Left = styled.div`
  padding: 1rem 0.5rem;

  @media ${device.desktop} {
    flex: 1 1 400px;
  }
`;
const Statement = styled.div`
  display: flex;
  margin-block: 0.5rem;
  border: 1px solid var(--color-grey-200);
  padding: 0.1rem;
  span {
    flex: 0 0 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: var(--f-lg);
    background-color: var(--color-secondary);
    color: var(--color-grey-0);
  }

  div {
    padding-left: 0.5rem;
    position: relative;
    flex: 1 1 350px;

    p {
      font-size: var(--f-xsm);
    }

    &::before {
      content: "";
      position: absolute;
      width: 1px;
      inset: 0;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    color: var(--color-grey-0);
  }
  &:hover div::before {
    width: 100%;
    background-color: var(--color-secondary);
    z-index: -1;
  }

  @media ${device.tablet} {
    height: 100px;
    span {
      flex: 0 0 100px;
    }
  }
`;

const Right = styled.div`
  padding: 0.5rem;
  height: 300px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: -5px 5px 10px 0px var(--color-grey-500);
  }

  @media ${device.tablet} {
    height: 400px;
  }

  @media ${device.desktop} {
    flex: 1 1 300px;
    height: 100%;
  }
`;

const WriteUp = styled.div`
  margin-block: 100px 0;

  text-align: center;
  padding-inline: 1rem;

  h2 {
    margin-bottom: 1rem;
  }
  p {
    max-width: 700px;
    margin: auto;
  }

  @media ${device.desktop} {
    h2 {
      font-size: var(--f-xlg);
    }

    p {
      font-size: var(--f-md);
    }
  }
`;

const FaqSection = styled.div`
  margin-block: 40px 0;

  @media ${device.desktop} {
    display: flex;
    height: 500px;
  }
`;

const LeftFaqSect = styled.div`
  background-color: var(--color-secondary);
  color: var(--color-grey-0);

  @media ${device.tablet} {
    flex: 0 0 60%;
    padding: 2rem;
  }
`;
const RightFaqSect = styled.div`
  @media ${device.tablet} {
    flex: 0 0 40%;
    padding: 2rem 0;
    background-color: var(--color-grey-0);
  }
`;
const FaqWriteUp = styled(WriteUp)`
  margin-block: 100px 0;
  @media ${device.desktop} {
    margin-block: 180px 0;
  }
`;

const TeamCards = styled.div`
  margin-block: 100px 80px;
  @media ${device.desktop} {
    margin-block-start: 180px;
  }
`;

const mission = [
  {
    title: "Our Mission",
    desc: "We are called to invite all people into a deeper relationship with Christ through the sacraments and active participation in the Church.",
  },
  {
    title: "Our Vision",
    desc: "As part of God’s Kingdom, we seek to nurture faith,encourage service, and support one another in our spiritual journey.",
  },
  {
    title: "Our Values",
    desc: " We embrace the Gospel of Christ, foster community, and live by the virtues of faith, hope, and charity. ",
  },
  {
    title: "Our Faith",
    desc: " All people are precious in God’s eyes. We are committed to evangelization and sharing the love of Christ with the world. ",
  },
];

const About = () => {
  return (
    <>
      <TopInfo text="About St. Matthias Catholic Church" />

      <StyledAbout>
        <FadeInOnScroll>
          <WriteUp>
            <h2>We love God. We believe in God.</h2>
            <p>
              At St. Matthias Catholic Church, we are a community of faith,
              rooted in the Eucharist and guided by the Gospel. Our mission is
              to spread God’s love through worship, service, and fellowship.
            </p>
          </WriteUp>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <MissionStatement>
            <Left>
              {mission?.map((item, idx) => (
                <Statement key={`${item?.title}_${idx}`}>
                  <span>{idx + 1}</span>
                  <div>
                    <h3>{item?.title}</h3>
                    <p>{item?.desc}</p>
                  </div>
                </Statement>
              ))}
            </Left>
            <Right>
              <img src="/images/about-us.webp" alt="" />
            </Right>
          </MissionStatement>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <FaqWriteUp>
            <h2>Questions about the church</h2>
            <p>
              Have any questions or need assistance? Reach out to us via email,
              or visit the parish office.
            </p>
          </FaqWriteUp>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <FaqSection>
            <LeftFaqSect>
              <FAQs />
            </LeftFaqSect>
            <RightFaqSect>
              <ContactForm />
            </RightFaqSect>
          </FaqSection>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <TeamCards>
            <WriteUp>
              <h2>Meet Our Priests & Religious</h2>
              <p>
                Our dedicated clergy and religious serve with faith and
                commitment, guiding our parish community in worship, pastoral
                care, and spiritual growth.
              </p>
            </WriteUp>
            <FaceCardList />
          </TeamCards>
        </FadeInOnScroll>
      </StyledAbout>
    </>
  );
};

export default About;
