import { device } from "@/helpers/mediaQueries";
import React from "react";
import { HiOutlineTag } from "react-icons/hi2";
import styled from "styled-components";

const StyledTag = styled.div`
  display: inline-flex;
  place-items: center;
  gap: 0.3rem;
  width: fit-content;
  padding: 0.6rem 1rem 0.6rem 0.5rem;
  height: 15px;
  background: var(--color-green-0);
  color: #00796b;
  font-size: 0.9rem;
  border-radius: 9999px; /* makes it pill shaped */
  margin-bottom: 0.5rem;
  text-transform: capitalize;

  @media ${device.desktop} {
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
  }
`;
const Tag = ({ category }) => {
  return (
    <StyledTag>
      <HiOutlineTag />
      {category ?? "Uncategorised"}
    </StyledTag>
  );
};

export default Tag;
