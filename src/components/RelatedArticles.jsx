import { cardData } from "@/helpers/helpers";
import { useIsMobile } from "@/helpers/useResize";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ArticleCard = styled(Link)`
  display: flex;
  align-items: center;
  height: 80px;
  border-block: 1px solid var(--color-grey-200);

  img {
    height: 100%;
    width: 60px;
    object-fit: cover;
  }
  h5,
  img {
    transition: all 0.3s ease-in-out;
  }

  div {
    padding-left: 0.5rem;
    p {
      font-size: var(--f-xsm);
      hyphens: auto;
    }
  }

  &:hover {
    h5 {
      color: var(--color-primary);
    }

    img {
      filter: grayscale();
    }
  }
`;

const RelatedArticles = ({ id }) => {
  const isMobile = useIsMobile();

  return (
    <>
      {cardData
        .filter((el) => el.id !== id)
        ?.map((article) => (
          <ArticleCard key={`${article?.id}`} to={`/articles/${article?.id}`}>
            <img src={article?.img} alt={`${article?.title}_${article?.id}`} />
            <div>
              <h5>
                {article?.title.length <= 30 && article?.title.slice(0, 30)}{" "}
                {article?.title.length > 30
                  ? isMobile
                    ? article?.title.slice(0, 40) + " ..."
                    : article?.title.slice(0, 44) + " ..."
                  : null}
              </h5>
              <p>
                {article?.description.length <= 30 &&
                  article?.description.slice(0, 30)}
                {article?.description.length > 30
                  ? isMobile
                    ? article?.description.slice(0, 85) + " ..."
                    : article?.description.slice(0, 50) + " ..."
                  : null}
              </p>
            </div>
          </ArticleCard>
        ))}
    </>
  );
};

export default RelatedArticles;
