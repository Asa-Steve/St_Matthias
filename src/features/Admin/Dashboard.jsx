import { cardData } from "@/helpers/helpers";
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
`;

const Card = styled.div`
  border: 1px solid var(--color-grey-200);
  height: 90%;
  width: 32%;
  margin-block: auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--color-blue-100);
  p {
    font-size: 2.5rem;
    font-weight: bold;
  }

  &:nth-of-type(2) {
    background-color: var(--color-green-100);
  }
  &:nth-of-type(3) {
    background-color: var(--color-yellow-100);
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
  gap: 0.2rem;
  padding: 1rem;
  margin-top: 1rem;
  background: #fff;
  border-radius: 8px;
`;

const Post = styled.div`
  background-color: var(--color-grey-100);
  padding: 0.4rem;
  border-radius: 8px;
  position: relative;
  height: 40px;
  color: var(--color-grey-700);
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const Category = styled.div`
  position: absolute;
  padding: 0.3rem 1rem;
  border-radius: 10px;
  right: 2%;
  top: 50%;
  transform: translate(0%, -50%);
  font-size: 13px;
  background-color: var(--color-blue-100);
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    font-size: 15px;
  }
`;

const posts = cardData;

const Dashboard = () => {
  return (
    <StyledDashboard>
      {/*Overview Cards */}
      <OverViewCards>
        <Card>
          <h4>Total Income</h4>
          <p>890</p>
        </Card>
        <Card>
          <h4>Mass Requests</h4>
          <p>1580</p>
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
          <Action>
            <Icon icon={"streamline-sharp:story-post"}></Icon> Add Post
          </Action>
          <Action>
            <Icon icon={"material-symbols-light:post-add-rounded"}></Icon> Add
            Record
          </Action>
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
                <Link>{post?.title}</Link>
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
