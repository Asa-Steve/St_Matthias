import styled from "styled-components";
import FAQ from "./FAQ";
import { useState } from "react";

const StyledFAQs = styled.div`
  padding-block: 1rem;
  height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
`;

const faqs = [
  {
    question: "How can i become a member",
    answer:
      "Becoming a member of St. Matthias Catholic Church means joining a welcoming faith community. Contact us or visit the parish office to register and participate in parish activities.",
  },
  {
    question: "Why St. Matthias ? ",
    answer:
      "St. Matthias Catholic Church is a place of worship, community, and spiritual growth, where faith is nurtured, and lives are transformed in Christ.",
  },
  {
    question: "What Time are Sunday Masses ? ",
    answer:
      "3 masses are celebrated on Sunday which are : 6:30Am ,8:45Am and 10:45Am respectively",
  },
  {
    question: "How can I Register for infant Baptism ? ",
    answer:
      "To register your child for baptism, kindly visit the parish office or contact us online for requirements and available dates.",
  },
];

const FAQs = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  return (
    <StyledFAQs>
      {faqs?.map((faq, idx) => (
        <FAQ
          data={faq}
          isActive={activeFaqIndex === idx}
          key={`${faq?.question}_${idx}`}
          id={idx}
          setActiveFaqIndex={setActiveFaqIndex}
        />
      ))}
    </StyledFAQs>
  );
};

export default FAQs;
