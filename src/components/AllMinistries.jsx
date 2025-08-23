import { ministries } from "@/helpers/helpers";
import { device } from "@/helpers/mediaQueries";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FadeInOnScroll from "./FadeInOnScroll";

const WriteUp = styled.div`
  margin-block: 100px 0px;
  text-align: center;
  padding-inline: 1rem;

  &:last-of-type {
    margin-bottom: 80px;
  }

  h2 {
    margin-bottom: 1rem;
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

    &:last-of-type {
      margin-bottom: 100px;
    }
  }
`;

const MansoryWrap = styled.div`
  column-count: 1;
  column-gap: 0.5rem;
  padding: 1rem;
  margin-bottom: 100px;

  margin-block: 100px 0;

  @media ${device.tablet} {
    column-count: 2;
    padding: 2;
  }
  @media ${device.desktop} {
    column-count: 3;
    padding: 3rem;
  }
`;

const Ministry = styled.div`
  position: relative;
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(var(--color-primary), var(--color-secondary));
  cursor: pointer;
  padding: 1rem;

  ul {
    list-style-type: circle;
    list-style-position: inside;
    margin-top: 1rem;

    li {
      font-size: var(--f-xsm);
    }
  }

  p,
  ul,
  h3 {
    color: var(--color-grey-0);
  }
  &:hover {
    p,
    ul,
    h3,
    h5 {
      position: relative;
      text-shadow: 2px 2px 4px var(--text-shadow);
    }
    .overlay-text {
      display: none;
    }
  }
`;

const MinistryHeading = styled.h3`
  font-size: var(--f-md);
`;

const SubHeading = styled.h5`
  color: var(--color-primary);
  text-transform: capitalize;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: #000000a4;
  backdrop-filter: blur(20px);
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
`;

const AllMinistries = () => {
  return (
    <>
      <FadeInOnScroll>
        <WriteUp>
          <h2>Our Ministries</h2>
          <p>
            At St. Matthias, our ministries are the heart of our community,
            where faith comes alive through service, fellowship, and spiritual
            growth. Each ministry is a unique expression of our commitment to
            living out the teachings of Christ and serving one another in love.
            Whether you are drawn to worship, education, outreach, or
            fellowship, there is a place for you to contribute your gifts and
            talents. Join us in these vibrant ministries as we work together to
            build a stronger, more compassionate community rooted in faith and
            service.
          </p>
        </WriteUp>{" "}
      </FadeInOnScroll>

      <MansoryWrap>
        {ministries.map((ministry, index) => (
          <FadeInOnScroll>
            <Ministry key={index}>
              <Overlay>
                <h3 className="overlay-text">{ministry.name}</h3>
              </Overlay>
              <MinistryHeading>{ministry.name}</MinistryHeading>
              <SubHeading>{ministry.subHeading}</SubHeading>
              <p>{ministry.description}</p>
              <ul>
                <li>Meeting Days: {ministry.details.meetingDays}</li>
                <li>Time: {ministry.details.time}</li>
                <li>Location: {ministry.details.location}</li>
              </ul>
            </Ministry>
          </FadeInOnScroll>
        ))}
      </MansoryWrap>
      <FadeInOnScroll>
        <WriteUp>
          <h2>More Ways to Serve & Get Involved</h2>
          <p>
            The ministries and societies listed above are just a few of the many
            groups that serve our church. There are several other ministries
            that provide opportunities for faith, service, and fellowship.
          </p>
          <p>
            If you are interested in a specific society that is not listed here,
            or if you would like to learn more about how to get involved, please
            feel free to contact the pastoral office. We will be happy to assist
            you in finding a ministry that aligns with your gifts and interests.
          </p>
          <p>
            Your presence and participation make our church stronger—join us in
            serving Christ and our community!
          </p>
          <Link to={"/contact"}>Contact Support</Link>
        </WriteUp>{" "}
      </FadeInOnScroll>
    </>
  );
};

export default AllMinistries;
