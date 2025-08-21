import CardLists from "@/components/CardLists";
import styled from "styled-components";
const StyledArticles = styled.div`
  border: 1px solid;
  min-height: 50vh;
`;
const AllArticles = () => {
  return (
    <>
      <StyledArticles>
        <CardLists />
      </StyledArticles>
    </>
  );
};

export default AllArticles;
