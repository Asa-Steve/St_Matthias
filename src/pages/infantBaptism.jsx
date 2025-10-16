import FadeInOnScroll from "@/components/FadeInOnScroll";
import InfantBaptismForm from "@/components/InfantBaptismForm";
import Modal from "@/components/Modal";
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

  @media ${device.desktop} {
    h2 {
      font-size: var(--f-xlg);
    }

    p {
      font-size: var(--f-md);
    }
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
  p {
    max-width: 700px;
  }

  @media ${device.desktop} {
    p {
      text-align: start;
    }
    width: 100%;
    font-size: var(--f-sm);
  }
`;

const FormSection = styled.div`
  @media ${device.tablet} {
    padding: 1rem;
    display: flex;
    height: 120vh;
  }

  @media ${device.desktop} {
    margin-bottom: 100px;
    padding: 1rem 2rem;
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

  @media ${device.tablet} {
    border: none;
    overflow-y: auto;
  }

  @media ${device.desktop} {
    padding-inline: 3rem;
  }
`;

const InfantBaptism = () => {
  return (
    <>
      <TopInfo text="Infant Baptism Registration" />
      <FadeInOnScroll>
        <WriteUp>
          <h2>Infant baptism registration</h2>
          <p>
            Baptism is the first sacrament of initiation into the Catholic
            Church. Through this sacred rite, your child is welcomed into the
            Christian community and receives the grace of new life in Christ. We
            are honored to assist you in preparing for your child's baptism.
            Please fill out the form below with the required details.
          </p>
        </WriteUp>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <WriteUp>
          <h2>Baptism fee</h2>
          <p>
            A standard contribution of{" "}
            <span style={{ color: "rgb(255, 0, 102)" }}>₦1,500</span> is
            required to help cover administrative and liturgical expenses. If
            you have any financial concerns, please contact the parish office.
          </p>
        </WriteUp>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Disclaimer>
          <IoWarningOutline />
          <p>
            {" "}
            The baptismal fee is not a charge for the sacrament but a
            contribution to support the parish's preparation and materials. No
            child will be denied baptism due to financial difficulties.
          </p>
        </Disclaimer>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <WriteUp>
          <h2>Infant baptism registration form</h2>
        </WriteUp>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <FormSection>
          <ImgSection>
            <img src="/images/baptism-2.jpg" />
          </ImgSection>
          <FormWrap>
            <Modal>
              <InfantBaptismForm />
            </Modal>
          </FormWrap>
        </FormSection>{" "}
      </FadeInOnScroll>
    </>
  );
};

export default InfantBaptism;
