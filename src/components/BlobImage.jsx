import { device } from "@/helpers/mediaQueries";
import { useIsMobile } from "@/helpers/useResize";
import styled from "styled-components";

const BlobContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1; /* keeps it square */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSVG = styled.svg`
  width: 90%;
  height: 100%;
  display: block;

  @media ${device.desktop} {
    width: 95%;
  }
`;

export default function BlobImage({ src, color }) {
  const isMobile = useIsMobile();

  return (
    <BlobContainer>
      <StyledSVG
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="blobClip" clipPathUnits="userSpaceOnUse">
            <path
              d="M60.6,-46.5C73.4,-32.2,75.2,-7.3,69.3,14.7C63.4,36.7,49.7,55.8,33.2,60.5C16.8,65.1,-2.6,55.3,-24.5,46.5C-46.5,37.6,-71.1,29.7,-78.3,13.5C-85.5,-2.7,-75.2,-27.2,-59.2,-42.2C-43.2,-57.2,-21.6,-62.6,1.1,-63.5C23.9,-64.4,47.8,-60.8,60.6,-46.5Z"
              transform="translate(100 100)"
            />
          </clipPath>
        </defs>

        <path
          fill="none"
          stroke={color || "white"}
          strokeWidth="4"
          d="M60.6,-46.5C73.4,-32.2,75.2,-7.3,69.3,14.7C63.4,36.7,49.7,55.8,33.2,60.5C16.8,65.1,-2.6,55.3,-24.5,46.5C-46.5,37.6,-71.1,29.7,-78.3,13.5C-85.5,-2.7,-75.2,-27.2,-59.2,-42.2C-43.2,-57.2,-21.6,-62.6,1.1,-63.5C23.9,-64.4,47.8,-60.8,60.6,-46.5Z"
          transform="translate(100 100)"
        />

        <image
          href={src}
          width="100%"
          height="100%"
          aria-label="program cover image"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#blobClip)"
          style={{
            opacity: isMobile ? 0.9 : 1,
            filter: "brightness(0.95) saturate(1.2)",
          }}
        />
      </StyledSVG>
    </BlobContainer>
  );
}
