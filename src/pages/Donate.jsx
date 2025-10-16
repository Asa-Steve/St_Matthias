import DonationForm from "@/components/DonationForm";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import styled from "styled-components";

const WriteUp = styled.div`
  margin-block: 100px 0px;
  text-align: center;

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

const Chunk = styled.div`
  margin-block: 1rem;
  padding: 1rem 0.7rem;
  text-align: center;
  h2 {
    margin-block-end: 1rem;
  }

  li {
    padding: 0.5rem;
    max-width: 700px;
    margin: 0.5rem auto;

    strong {
      display: block;
    }
  }

  span {
    display: block;
    margin-block: 0.5rem;
  }

  @media ${device.desktop} {
    padding-inline: 2rem;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      li {
        font-size: var(--f-md);
        border: 1px solid var(--color-grey-300);
        flex: 1 0 350px;
        padding: 1rem;

        &:hover {
          color: var(--color-grey-0);
          background-color: var(--color-secondary);
        }
      }
    }
  }
`;

const WhyChunk = styled(Chunk)`
  background-color: var(--color-secondary);
  color: var(--color-grey-0);
  padding-block: 3rem;
  margin-block: 100px 0;
  li {
    border: 1px solid var(--color-grey-800) !important;

    &:hover {
      background-color: var(--color-primary) !important;
      text-shadow: 2px 2px 4px var(--text-shadow);
    }

    flex: 1 0 450px;
    min-width: 100%;
  }

  @media ${device.desktop} {
    margin-block: 180px 0;
    padding: 5rem 2rem;

    li {
      min-width: 300px;
    }
  }
`;

const WayChunk = styled(Chunk)`
  margin-block: 100px 0;
  @media ${device.desktop} {
    margin-block: 180px 0;
  }
`;

const AccountDeitals = styled.div`
  border: 1px solid var(--color-grey-300);
  margin-bottom: 0.5rem;
`;

const FormSection = styled.div`
  margin-block: 50px 0;
  h2 {
    margin-bottom: 1rem;
  }
  p {
    max-width: 700px;
    margin: auto;
    margin-block: 1rem;
  }

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    padding: 3rem 1rem;
    background-color: var(--color-grey-0);
  }

  @media ${device.desktop} {
    padding-inline: 2rem;
margin-bottom: 100px;
    h2 {
      font-size: var(--f-xlg);
    }

    p {
      font-size: var(--f-md);
    }
  }
`;

const FormSectionChunk = styled(Chunk)`
  background-color: var(--color-secondary);
  color: var(--color-grey-0);

  div {
    border-color: var(--color-grey-800);
  }

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    column-gap: 1rem;
    padding-inline: 2rem;
    flex: 1 0 500px;

    p {
      max-width: 70%;
    }

    div {
      flex: 1 1 45%;
      border-color: var(--color-grey-800);
    }
  }
`;

const DonationFormWrap = styled.div`
  flex: 1 0 300px;
  margin-bottom: 60px;

  @media ${device.tablet} {
    margin-bottom: 0rem;
  }
`;

const Donate = () => {
  return (
    <>
      <TopInfo text="Donate" />
      <>
        <WriteUp>
          <FadeInOnScroll>
            <Chunk>
              <h2>Support St. Matthias Catholic Church</h2>
              <p>
                Your generosity helps sustain the mission of St. Matthias
                Catholic Church, enabling us to continue spreading the Gospel,
                supporting parish ministries, and serving those in need. Every
                contribution, no matter the size, makes a meaningful impact.
              </p>
            </Chunk>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <WhyChunk>
              <h2>Why Donate?</h2>
              <ul>
                <li>
                  <strong>Support Parish Activities</strong>Help fund liturgical
                  celebrations, pastoral programs, and community outreach.
                </li>

                <li>
                  <strong>Assist the Less Privileged </strong> Your donations
                  help provide aid to those in need within our community.
                </li>
                <li>
                  <strong>Maintain Our Church</strong>Contribute to the upkeep
                  of our place of worship and facilities.
                </li>
                <li>
                  <strong>Church Building Project</strong>Be a part of the
                  growth of our parish by contributing to the construction and
                  improvement of our church facilities. Your donation helps
                  create a sacred space for worship, prayer, and community
                  gatherings.
                </li>
              </ul>
            </WhyChunk>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <WayChunk>
              <div>
                <h2>Ways to Give</h2>
                <ul>
                  <li>
                    <strong>Online Giving</strong>Use the secure form on this
                    page to make a one-time donation.
                  </li>
                  <li>
                    <strong>Visit the Parish Office</strong>Stop by the church
                    office to make your donation in person.
                  </li>
                </ul>
              </div>
            </WayChunk>
          </FadeInOnScroll>
        </WriteUp>
        <FadeInOnScroll>
          <FormSection>
            <FormSectionChunk>
              <p>
                You can make direct bank transfers to either of these account
                numbers
              </p>
              <AccountDeitals>
                <span>
                  <strong>Bank Name :</strong> Access Bank
                </span>
                <span>
                  <strong>Account Name : </strong>Charity
                </span>
                <span>
                  <strong>Account Number : </strong>9167670473
                </span>
              </AccountDeitals>
              <AccountDeitals>
                <span>
                  <strong>Bank Name :</strong> GTCO Bank
                </span>
                <span>
                  <strong>Account Name : </strong>Church project
                </span>
                <span>
                  <strong>Account Number : </strong>7032846083
                </span>
              </AccountDeitals>
            </FormSectionChunk>
            <DonationFormWrap>
              <DonationForm />
            </DonationFormWrap>
          </FormSection>
        </FadeInOnScroll>
      </>
    </>
  );
};

export default Donate;
