import ContactForm from "@/components/ContactForm";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WriteUp = styled.div`
  margin-block: 100px 0px;
  text-align: center;
  padding-inline: 1rem;

  h2 {
    margin-bottom: 1rem;
  }
  p {
    max-width: 700px;
    margin: auto;
    margin-block: 1rem;
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

const FormSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-block: 100px 0;

  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    margin-block: 180px 0;
    padding: 0 3rem;
  }
`;
const Right = styled.div`
  padding: 2rem 1rem;
  text-align: center;

  @media ${device.tablet} {
    flex: 1 0 30%;
    text-align: start;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h4 {
      font-size: var(--f-md);
    }
  }
`;
const Left = styled.div`
  @media ${device.tablet} {
    flex: 1 0 45%;

    form {
      padding-inline: 3rem 6rem;
      box-shadow: 3px 1px 5px 1px var(--color-grey-500);
    }
  }
`;
const Chunk = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;

  p {
    max-width: 80%;
    margin-inline: auto;
  }
  a {
    display: block;
  }

  @media ${device.tablet} {
    margin-bottom: 0rem;

    p {
      margin: 0;
    }
  }
`;

const MapSection = styled.div`
  border: 2px solid;
  height: 40vh;
  padding: 1rem;
  margin-block: 100px 80px;

  @media ${device.tablet} {
    height: 70vh;
  }
  @media ${device.desktop} {
    margin-block: 180px 100px;
    height: 85vh;
    width: 80%;
    margin-inline: auto;
  }
`;
const Map = styled.div`
  border: 2px solid red;
  height: 100%;
  place-content: center;
  place-items: center;
`;

const Contact = () => {
  return (
    <>
      <TopInfo text="contact Us" />
      <FadeInOnScroll>
        <WriteUp>
          <h2>Call us or fill the form </h2>
          <p>
            Fill out the contact form below, and we will get back to you as soon
            as possible. We look forward to hearing from you and welcoming you
            into our parish community!
          </p>
          <p>
            We are here to assist you with any inquiries, spiritual needs, or
            sacramental requests. Feel free to reach out through any of the
            following means:
          </p>
        </WriteUp>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <FormSection>
          <Left>
            <ContactForm />
          </Left>
          <Right>
            <Chunk>
              <h4>Address </h4>
              <p>
                St. Matthias Catholic Church,Amarata, Yenagoa Bayelsa State.
              </p>
            </Chunk>
            <Chunk>
              <h4>Email </h4>
              <Link>contact@example.com</Link>
              <Link>support@example.com</Link>
            </Chunk>
            <Chunk>
              <h4>Phone </h4>
              <p>mobile +07 554 332 322</p>
              <p>fax: +06 444 646 442</p>
            </Chunk>
          </Right>
        </FormSection>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <MapSection>
          <Map>
            <h1>Map Container</h1>
          </Map>
        </MapSection>
      </FadeInOnScroll>
    </>
  );
};

export default Contact;
