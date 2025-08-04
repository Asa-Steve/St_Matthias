import ContactForm from "@/components/ContactForm";
import FAQs from "@/components/FAQs";
import TopInfo from "@/components/TopInfo";
import styled from "styled-components";

const StyledAbout = styled.div`
  /* border: 1px solid; */
`;

const MissionStatement = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column-reverse;
`;
const Left = styled.div`
  padding: 1rem 0.5rem;
`;
const Statement = styled.div`
  display: flex;
  margin-block: 0.5rem;
  border: 1px solid var(--color-grey-300);
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
`;

const Right = styled.div`
  /* border: 1px solid; */
  padding: 0.5rem;
  height: 300px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const WriteUp = styled.div`
  margin-block: 60px;
  text-align: center;
  padding-inline: 1rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

const FaqSection = styled.div`
  /* border: 1px solid; */
  /* padding: 1rem; */
`;

const LeftFaqSect = styled.div`
  background-color: var(--color-secondary);
  color: var(--color-grey-0);
`;
const RightFaqSect = styled.div``;
const FaqWriteUp = styled(WriteUp)``;

const mission = [
  {
    title: "Our Mission",
    desc: "At St. Matthias Catholic Church, we are a community of faith, rooted in the Eucharist and guided by the Gospel. Our mission is to spread God’s love through worship, service, and fellowship.",
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
        <WriteUp>
          <h2>We love God. We believe in God.</h2>
          <p>
            At St. Matthias Catholic Church, we are a community of faith, rooted
            in the Eucharist and guided by the Gospel. Our mission is to spread
            God’s love through worship, service, and fellowship.
          </p>
        </WriteUp>

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
        <FaqWriteUp>
          <h3>Questions about the church</h3>
          <p>
            Have any questions or need assistance? Reach out to us via email, or
            visit the parish office.
          </p>
        </FaqWriteUp>
        <FaqSection>
          <LeftFaqSect>
            <FAQs />
          </LeftFaqSect>
          <RightFaqSect>
            <ContactForm />
          </RightFaqSect>
        </FaqSection>
      </StyledAbout>
    </>
  );
};

export default About;
