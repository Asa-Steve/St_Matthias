import styled from "styled-components";

const StyledOverLay = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  inset: 0;
  z-index: 500;
  pointer-events: auto;
  transition: all 0.3s;
`;
const Overlay = () => {
  return <StyledOverLay></StyledOverLay>;
};

export default Overlay;
