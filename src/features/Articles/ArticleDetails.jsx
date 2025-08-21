import TopInfo from "@/components/TopInfo";
import { useParams } from "react-router-dom";
import { cardData } from "@/helpers/helpers";
import styled from "styled-components";
import RelatedArticles from "@/components/RelatedArticles";
import SearchArticle from "@/components/SearchArticle";
import { useIsMobile } from "@/helpers/useResize";
import { device } from "@/helpers/mediaQueries";
import Tag from "@/components/Tag";

const StyledArticleDetails = styled.div`
  min-height: 100vh;
`;

const DetailsWrap = styled.div`
  margin-block: 0px 60px;
  position: relative;
  p {
    line-height: 1.5;
    white-space: pre-wrap;
  }
`;

const MainContent = styled.div`
  display: flex;
`;

const ImgWrap = styled.div`
  height: 300px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media ${device.desktop} {
    height: 500px;
  }
`;

const InfoWrap = styled.div`
  padding: 2rem 1rem;

  h2 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  p {
    margin-top: 0.5rem;
  }

  @media ${device.desktop} {
    flex: 1 0 500px;
    h2 {
      font-size: var(--f-xlg);
    }
    p {
      font-size: var(--f-md);
    }
  }
`;
const Aside = styled.aside`
  height: fit-content;
  display: none;

  @media ${device.desktop} {
    display: initial;
    padding: 2rem 1rem;
    width: 420px;
    position: sticky;
    top: 4rem;

    h3 {
      font-size: var(--f-md);
    }
  }
`;

const RelatedWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const RelatedWrapMobile = styled(RelatedWrap)`
  max-width: 600px;
  margin-bottom: 80px;
  @media ${device.desktop} {
    display: none;
  }
`;

const ArticleDetails = () => {
  const { articleId } = useParams();
  const article = cardData.find((el) => el.id === +articleId);

  return (
    <>
      <StyledArticleDetails>
        <TopInfo text={article?.title} />

        <DetailsWrap>
          <ImgWrap>
            <img src={article?.img} alt="" />
          </ImgWrap>
          <MainContent>
            <InfoWrap>
              <h2>Article {article?.title}</h2>
              <Tag category={article?.category} />
              <p>{article?.description}</p>
            </InfoWrap>

            <Aside>
              <RelatedWrap>
                <h3>Related Articles</h3>
                <SearchArticle />

                <RelatedArticles id={+articleId} />
              </RelatedWrap>
            </Aside>
          </MainContent>
        </DetailsWrap>
      </StyledArticleDetails>

      <RelatedWrapMobile>
        <h3>Related Articles</h3>
        <SearchArticle />

        <RelatedArticles id={+articleId} />
      </RelatedWrapMobile>
    </>
  );
};

export default ArticleDetails;
