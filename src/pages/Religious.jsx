import FaceCardList from "@/components/FaceCardList";
import TagLine from "@/components/TagLine";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const ReligiousInfo = styled.div`
  padding-top: 3rem;
  @media ${device.desktop} {
    display: flex;
    padding: 3rem 1rem;
    align-items: center;
    margin-bottom: 60px;
  }
`;

const ImgWrap = styled.div`
  height: 300px;
  width: 100%;
  margin-inline: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  @media ${device.tablet} {
    height: 400px;
    img {
      object-fit: contain;
    }
  }
  @media ${device.desktop} {
    height: 450px;
    flex: 1 0 300px;
    align-self: center;
  }
`;
const Bio = styled.div`
  min-height: 400px;
  padding: 3rem 0.5rem;

  h3 {
    color: var(--color-primary);
    text-align: center;
  }

  @media ${device.tablet} {
    width: 80%;
    margin-inline: auto;
  }

  @media ${device.desktop} {
    height: 450px;
    flex: 1 1 600px;

    overflow-y: auto;
    padding: 1rem 1rem 0;

    h3 {
      font-size: var(--f-md);
      text-align: start;
    }
  }
`;
const BioRow = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  margin-block: 1rem;
  padding: 0.5rem;
  background-color: var(--color-grey-100);
  font-size: var(--f-xsm);

  h4 {
    margin-bottom: 0.5rem;
  }

  ul {
    li::before {
      content: "- ";
      font-weight: bold;
    }
  }
  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  @media ${device.desktop} {
    font-size: var(--f-sm);
    border: none;
  }
`;
const OtherReligious = styled.div`
  text-align: center;
  padding-block: 2rem;

  h3 {
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
`;

const Religious = () => {
  const params = useParams();
  const { religiousId } = params;

  return (
    <>
      <TopInfo />
      <ReligiousInfo>
        <ImgWrap>
          <img src="/images/pastor3.jpg" alt="" />
        </ImgWrap>
        <Bio>
          <h3>Personal Bio</h3>
          <BioRow>
            <p>
              <strong>Born:</strong> August 11, 1978, in Bayelsa, Nigeria
            </p>
            <p>
              <strong>Ordained:</strong> July 22, 2007, for the Archdiocese of
              Lagos
            </p>
          </BioRow>
          <BioRow>
            <h4>Education</h4>
            <ul>
              <li>
                Bachelor of Arts in Philosophy, St. Joseph's Seminary (2002)
              </li>
              <li>
                Master of Divinity, Pontifical Urban University, Rome (2007)
              </li>
            </ul>
          </BioRow>
          <BioRow>
            <h4>Ministry</h4>
            <p>
              Fr. Bruno is renowned for his inspiring homilies, compassionate
              pastoral care, and dedication to education. He has established
              several educational programs for underprivileged children and has
              been involved in various community development initiatives.{" "}
            </p>
          </BioRow>
          <BioRow>
            <h4>Bio</h4>
            <p>
              Fr. Bruno enjoys reading, playing chess, and listening to
              classical music. He is a passionate fan of soccer and supports the
              Nigerian national team. He is the second of five siblings and has
              nine nieces and nephews who fondly call him "Uncle Bruno".
            </p>
          </BioRow>
          <BioRow>
            <h4>Assingment</h4>
            <ol>
              <li>Parochial Vicar, St. Mary's Parish, Lagos (2007-2012)</li>
              <li>Pastor, St.Augustine's Parish, Ibadan (2012-2017)</li>
              <li>
                Pastor, St. Patrick's Parish, Yenagoa, Bayelsa State
                (2017-present)
              </li>
            </ol>
          </BioRow>
        </Bio>
      </ReligiousInfo>
      <OtherReligious>
        <h3>Other Religious</h3>
        <FaceCardList />
      </OtherReligious>
    </>
  );
};

export default Religious;
