import FadeInOnScroll from "@/components/FadeInOnScroll";
import Timeline from "@/components/Timeline";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import styled from "styled-components";

const WriteUp = styled.div`
  margin-block: 100px 0px;
  text-align: center;
  padding-inline: 1rem;

  h2 {
    margin-bottom: 1rem;
    max-width: 900px;
    margin-inline: auto;
  }
  p {
    max-width: 700px;
    margin: auto;
    margin-block: 1rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 150px;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-secondary);
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  }

  &:last-of-type {
    margin-bottom: 80px;
  }

  @media ${device.desktop} {
    h2 {
      font-size: var(--f-xlg);
    }

    p {
      font-size: var(--f-md);
    }

    a {
      height: 40px;
      width: 200px;
    }
  }
`;

const Activities = () => {
  return (
    <>
      <TopInfo text="Weekly Programs" />
      <FadeInOnScroll>
        <WriteUp>
          <h2>
            Welcome to St. Matthias Catholic Church, Amarata Yenagoa, Bayelsa
            State.
          </h2>
          <p>
            Our parish is a vibrant faith community committed to worship,
            service, and spiritual growth. We offer a variety of activities to
            help members deepen their faith, build strong relationships, and
            actively participate in the life of the Church.
          </p>
          <p>
            Below, you will find details about our scheduled Masses, prayer
            gatherings, and other church events. We encourage all parishioners
            to take part in these activities as we journey together in faith.
          </p>
        </WriteUp>
      </FadeInOnScroll>
      <Timeline />
      <FadeInOnScroll>
        <WriteUp>
          <h2>For any enquiry ? </h2>
          <p>
            Kindly note that the above is subject to changes. Contact
            the parish office
          </p>
          <a>Contact Support</a>
        </WriteUp>
      </FadeInOnScroll>
    </>
  );
};

export default Activities;
