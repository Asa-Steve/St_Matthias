import FadeInOnScroll from "@/components/FadeInOnScroll";
import MassRequestForm from "@/components/MassRequestForm";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import { IoWarningOutline } from "react-icons/io5";
import styled from "styled-components";

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

  ul,
  ol {
    li {
      padding: 0.5rem;
      margin: 0.5rem auto;
      background-color: var(--color-secondary);
      color: var(--color-grey-0);
      border-radius: 30px;
      font-size: var(--f-xsm);
    }
  }
  ul {
    margin-top: 2rem;
  }
  ol {
    text-align: start;
    padding-left: 0.5rem;
    li {
      border-bottom: 1px solid var(--color-grey-800);
      border-radius: 0;
      list-style-type: decimal;
      list-style-position: inside;
    }
  }

  @media ${device.desktop} {
    padding-inline: 2rem;
    h2 {
      font-size: var(--f-xlg);
    }
    ul,
    ol {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      li {
        font-size: var(--f-md);
        border: 1px solid var(--color-grey-300);
        flex: 1 0 350px;
        max-width: 550px;

        padding: 0.5rem 1rem;

        &:hover {
          color: var(--color-grey-0);
          background-color: var(--color-secondary);
        }
      }
    }

    ol {
      align-items: center;
      justify-content: center;
      align-content: center;
      padding-bottom: 2rem;

      li {
        list-style-type: none;
        border-color: var(--color-grey-600);
        flex: 1 0 450px;
        max-width: fit-content;
        margin: 0;
      }
    }
    p {
      font-size: var(--f-md);
    }
  }
`;
const WriteUpHowTo = styled(WriteUp)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  color: var(--color-grey-0);
  height: 50vh;

  @media ${device.desktop} {
    height: 80vh;
    margin: 180px 0;
  }
`;

const Disclaimer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--color-red-700);
  color: var(--color-grey-0);
  font-size: var(--f-xsm);
  text-align: center;
  margin: 100px 0;
  svg {
    font-size: var(--f-lg);
    width: 100px;
  }

  @media ${device.desktop} {
    width: 100%;
    font-size: var(--f-sm);
  }
`;

const FormSection = styled.div`
  height: fit-content;

  @media ${device.tablet} {
    padding: 1rem;
    display: flex;
    height: 120vh;
  }

  @media ${device.desktop} {
    margin-bottom: 100px;
    padding: 2rem;
  }
`;
const ImgSection = styled.div`
  border: 1px solid var(--color-grey-300);
  padding: 0.2rem;
  height: 300px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media ${device.tablet} {
    flex: 1 1 400px;
    overflow-y: hidden;
    height: 100%;
  }
`;
const FormWrap = styled.div`
  background-color: var(--color-secondary);
  flex: 1 1 600px;
  color: var(--color-grey-0);
  padding: 2rem 1rem;
  border: 2px solid;

  form input,
  textarea {
    color: var(--color-grey-0);
  }

  @media ${device.tablet} {
    border: none;
    overflow-y: auto;
  }

  @media ${device.desktop} {
    padding-inline: 3rem;
  }
`;

const MassRequest = () => {
  return (
    <>
      <TopInfo text="Mass Request" />
      <FadeInOnScroll>
        <WriteUp>
          <h2>Request A mass Intention</h2>
          <p>
            The Holy Sacrifice of the Mass is the highest form of prayer and a
            powerful way to intercede for loved ones, whether living or
            deceased. At St. Matthias Catholic Church, you can request a Mass to
            be offered for your special intentions, including:
          </p>
          <ul>
            <li>For the repose of the soul of a loved one</li>
            <li>For healing and thanksgiving</li>
            <li>For personal or family intentions</li>
            <li>For special blessings (birthdays, anniversaries, etc.)</li>
          </ul>
        </WriteUp>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <WriteUpHowTo>
          <h2>How to Request a Mass</h2>
          <ol>
            <li>Fill out the request form below with the necessary details.</li>
            <li>Specify the name(s) and intention for the Mass. </li>
            <li>Choose a preferred date (if applicable). </li>
            <li>
              Submit your request and allow the parish office to process it.
            </li>
          </ol>
        </WriteUpHowTo>{" "}
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Disclaimer>
          <IoWarningOutline />
          If you have any questions or need further assistance, please contact
          the parish office.
        </Disclaimer>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <WriteUp>
          <h2>Mass request form</h2>
        </WriteUp>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <FormSection>
          <ImgSection>
            <img src="/images/praying.jpg" />
          </ImgSection>
          <FormWrap>
            <MassRequestForm />
          </FormWrap>
        </FormSection>{" "}
      </FadeInOnScroll>
    </>
  );
};

export default MassRequest;
