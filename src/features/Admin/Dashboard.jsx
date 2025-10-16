import AddPost from "@/components/AddPost";
import Modal from "@/components/Modal";
import { cardData } from "@/helpers/helpers";
import { device } from "@/helpers/mediaQueries";
import { useIsMobile } from "@/helpers/useResize";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDashboard = styled.div`
  height: 100%;
`;

const OverViewCards = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;

  overflow-x: auto;
  scrollbar-width: none;
  gap: 1rem;
`;

const Card = styled.div`
  border: 1px solid var(--color-grey-200);
  height: 90%;
  margin-block: auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--color-blue-100);

  min-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1.8rem;
    font-weight: bold;
  }

  &:nth-of-type(2) {
    background-color: var(--color-green-100);
  }
  &:nth-of-type(3) {
    background-color: var(--color-yellow-100);
  }

  @media ${device.tablet} {
    min-width: 40%;
  }
  @media ${device.desktop} {
    min-width: 32%;

    p {
      font-size: 2rem;
    }
  }
`;

const QuickActions = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--color-grey-100);
`;

const Actions = styled.div`
  min-height: 40px;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  background: #fff;
  border-radius: 8px;
`;

const Action = styled.div`
  width: fit-content;
  height: 40px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-inline: 1rem;
  border-radius: 8px;
  background-color: var(--color-blue-700);
  color: var(--color-grey-0);
  cursor: pointer;
  transition: all 0.3s;
  font-size: 13px;

  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: var(--color-blue-100);
    color: initial;
  }

  &:nth-of-type(2) {
    background-color: var(--color-green-700);
    &:hover {
      background-color: var(--color-green-100);
    }
  }

  @media ${device.desktop} {
    font-size: var(--f-sm);
  }
`;

const RecentPosts = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--color-grey-100);
`;

const Posts = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
  background: #fff;
  border-radius: 8px;
  gap: 0.5rem;

  @media ${device.desktop} {
    gap: 0.2rem;
  }
`;

const Post = styled.div`
  background-color: var(--color-grey-100);
  padding: 0.4rem;
  border: 1px solid transparent;
  border-radius: 8px;
  position: relative;
  height: 40px;
  color: var(--color-grey-700);
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 1rem;

  &:hover {
    border: 1px solid var(--color-grey-300);
  }

  a {
    transition: all 0.3s;
    &:hover {
      color: var(--color-green-700);
    }
  }
`;

const Category = styled.div`
  position: absolute;
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
  right: 2%;
  top: 50%;
  transform: translate(0%, -50%);
  font-size: 13px;
  background-color: var(--color-blue-100);
  display: flex;
  gap: 0.2rem;
  align-items: center;

  svg {
    font-size: 15px;
  }

  @media ${device.desktop} {
    padding: 0.3 1rem;
  }
`;

const posts = cardData;

const Dashboard = () => {
  const isMobile = useIsMobile();

  const sliceNum = isMobile ? 25 : 50;
  return (
    <StyledDashboard>
      {/*Overview Cards */}
      <OverViewCards>
        <Card>
          <h4>Total Income</h4>
          <p>N8.92M</p>
        </Card>
        <Card>
          <h4>Mass Requests</h4>
          <p>1.5K</p>
        </Card>
        <Card>
          <h4>Infant Registrations</h4>
          <p>150</p>
        </Card>
      </OverViewCards>
      {/* Quick Actions */}
      <QuickActions>
        <h3>Quick Actions</h3>
        <Actions>
          <Modal>
            <Modal.Open opens="add_post">
              <Action>
                <Icon icon={"streamline-sharp:story-post"}></Icon> Add Post
              </Action>
            </Modal.Open>
            <Modal.Open opens="add_record">
              <Action>
                <Icon icon={"material-symbols-light:post-add-rounded"}></Icon>{" "}
                Add Record
              </Action>
            </Modal.Open>
            <Modal.Window name="add_post">
              <AddPost />
            </Modal.Window>
            <Modal.Window name="add_record">i am for add record</Modal.Window>
          </Modal>
        </Actions>
      </QuickActions>

      {/* Recent Posts */}
      <RecentPosts>
        <h3>Recent Posts</h3>
        <Posts>
          {posts?.length < 1 ? (
            <p style={{ fontStyle: "italic" }}>No recent post at the moment</p>
          ) : (
            posts?.map((post, idx) => (
              <Post key={idx}>
                <Link>
                  {post?.title?.length > sliceNum
                    ? post?.title?.slice(0, sliceNum - 3) + "..."
                    : post?.title}
                </Link>
                <Category>
                  <Icon icon={"mdi-light:tag"}></Icon> {post?.category}
                </Category>
              </Post>
            ))
          )}
        </Posts>
      </RecentPosts>
    </StyledDashboard>
  );
};

export default Dashboard;
