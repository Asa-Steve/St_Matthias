import styled from "styled-components";

const StyledFAQ = styled.div`
  border: 1px solid var(--color-grey-600);
  height: fit-content;
  width: 90%;
  margin-inline: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

const FaqQuestion = styled.div`
  height: fit-content;
  padding: 0.3rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    font-size: var(--f-md);
    font-weight: bold;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const FaqAnswer = styled.div`
  height: 120px;
  overflow: auto;
  scrollbar-width: none;
  width: 95%;
  margin-inline: auto;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--backdrop-color);
  margin-bottom: 1rem;
`;
const FAQ = ({ data, isActive, setActiveFaqIndex, id }) => {
  return (
    <StyledFAQ isactive={isActive}>
      <FaqQuestion onClick={() => setActiveFaqIndex(id)}>
        {data?.question}
        <span>{isActive === "true" ? "-" : "+"}</span>
      </FaqQuestion>

      {isActive && <FaqAnswer>{data?.answer}</FaqAnswer>}
    </StyledFAQ>
  );
};

export default FAQ;
