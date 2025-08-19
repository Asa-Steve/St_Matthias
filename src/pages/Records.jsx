import FadeInOnScroll from "@/components/FadeInOnScroll";
import FormSwitch from "@/components/FormSwitch";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import { useState } from "react";
import styled, { css } from "styled-components";

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
    margin-block: 180px 0;

    h2 {
      font-size: var(--f-xlg);
    }
    p {
      font-size: var(--f-md);
    }
  }
`;

const RecordType = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  strong {
    display: block;
  }

  @media ${device.tablet} {
    flex-direction: row;

    li {
      border: 1px solid var(--color-grey-200);
      padding: 1rem;
    }
  }
  @media ${device.desktop} {
    li {
      font-size: var(--f-md);
    }
  }
`;

const RecordsWrap = styled.div`
  min-height: 400px;
  padding: 2rem;
  margin-block: 0px 100px;

  @media ${device.desktop} {
    max-width: 80%;
    margin-inline: auto;
    h5 {
      font-size: var(--f-sm);
    }
  }
`;

const TopSectionBtn = styled.div`
  min-height: 60px;
  padding: 1rem 0;

  @media ${device.desktop} {
    display: flex;
  }
`;

const Left = styled.div`
  @media ${device.desktop} {
    flex: 0 1 30%;
  }
`;

const LeftBtnWrap = styled.div`
  border: 1px solid var(--color-grey-200);
  padding: 0.3rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    border: 1px solid var(--color-grey-300);
    height: 30px;
    width: 50%;
    max-width: 200px;

    ${(props) =>
      props.activetype === "baptism"
        ? css`
            &:nth-of-type(2) {
              background-color: var(--color-secondary);
              color: var(--color-grey-0);
            }
          `
        : props.activetype === "marriage"
        ? css`
            &:nth-of-type(1) {
              background-color: var(--color-secondary);
              color: var(--color-grey-0);
            }
          `
        : null}
  }

  @media ${device.tablet} {
    justify-content: start;
  }
`;

const Right = styled.div`
  h5 {
    width: 100%;
  }

  @media ${device.desktop} {
    flex: 0 1 70%;
    max-width: 500px;
    margin-left: auto;
  }
`;

const RightBtnWrap = styled.div`
  border: 1px solid var(--color-grey-200);
  padding: 0.3rem;
  display: flex;
  gap: 0.5rem;

  button {
    border: 1px solid var(--color-grey-300);
    width: 100%;
    max-width: 200px;
    height: 30px;
    padding-inline: 1rem;

    ${(props) =>
      props.searchby === "id"
        ? css`
            &:nth-of-type(1) {
              background-color: var(--color-primary);
              color: var(--color-grey-0);
            }
          `
        : props.searchby === "name"
        ? css`
            &:nth-of-type(2) {
              background-color: var(--color-primary);
              color: var(--color-grey-0);
            }
          `
        : props.searchby === "date"
        ? css`
            &:nth-of-type(3) {
              background-color: var(--color-primary);
              color: var(--color-grey-0);
            }
          `
        : null}
  }

  @media ${device.desktop} {
    button {
      width: 150px;
    }
  }
`;

const Records = () => {
  const [recordType, setRecordType] = useState("baptism");
  const [searchBy, setSearchBy] = useState("id");

  return (
    <>
      <TopInfo text="Records" />
      <FadeInOnScroll>
        <WriteUp style={{ marginTop: "100px" }}>
          <h2>Parish Archive Records Search</h2>
          <p>
            Welcome to the St. Matthias Parish Archive, where you can search for
            official records of baptisms and marriages celebrated in our parish.
            If you or a loved one received the sacrament of Baptism or were
            married at St. Matthias, you can retrieve the record by providing
            the necessary details in the form below.
          </p>
          <p style={{ marginTop: "1rem" }}>
            These records serve as proof of sacraments received and may be
            required for religious or legal purposes.
          </p>
        </WriteUp>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <WriteUp>
          <h2>Available Records</h2>
          <RecordType>
            <li>
              <strong>Baptism Records</strong> Proof of initiation into the
              Catholic Church.
            </li>
            <li>
              <strong>Marriage Records</strong>Official documentation of
              Catholic marriages conducted in our parish.
            </li>
          </RecordType>
        </WriteUp>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <RecordsWrap>
          <TopSectionBtn>
            <Left>
              <h5>Record Type:</h5>
              <LeftBtnWrap activetype={recordType}>
                <button onClick={() => setRecordType("marriage")}>
                  Marriage
                </button>
                <button onClick={() => setRecordType("baptism")}>
                  Baptism
                </button>
              </LeftBtnWrap>
            </Left>
            <Right>
              <h5>Search By:</h5>
              <RightBtnWrap searchby={searchBy}>
                <button onClick={() => setSearchBy("id")}>ID</button>
                <button onClick={() => setSearchBy("name")}>Name </button>
                <button onClick={() => setSearchBy("date")}>Date </button>
              </RightBtnWrap>
            </Right>
          </TopSectionBtn>

          {recordType === "baptism" && (
            <FormSwitch formType={searchBy} recordType={"baptism"} />
          )}
          {recordType === "marriage" && (
            <FormSwitch formType={searchBy} recordType={"marriage"} />
          )}
        </RecordsWrap>
      </FadeInOnScroll>
    </>
  );
};

export default Records;
