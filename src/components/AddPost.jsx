import { Icon } from "@iconify/react";
import styled from "styled-components";
import FormRow from "./FormRow";
import TextEditor from "./TextEditor";

const StyledAddPost = styled.div`
  padding: 2rem 1.5rem;
  overflow-y: auto;
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
    color: var(--color-primary);
  }
`;

const BannerArea = styled.div`
  border: 1px solid var(--color-grey-200);
  height: 150px;
  border-radius: 8px;
  background-color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 12px;
    color: var(--color-grey-500);
  }

  svg {
    font-size: var(--f-md);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  div {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100%;
    font-weight: bold;
    /* height: 45px; */
  }
`;

const AddPost = () => {
  return (
    <StyledAddPost>
      <h2>Create Post</h2>
      <BannerArea>
        <Icon icon={"et:upload"}></Icon>
        <p>upload banner</p>
      </BannerArea>

      <Form>
        <FormGroup>
          <FormRow>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="enter title" />
          </FormRow>
          <FormRow>
            <label htmlFor="title">Category</label>
            <select>
              <option>select category</option>
              <option>cat2</option>
              <option>cat3</option>
              <option>cat4</option>
            </select>
          </FormRow>
        </FormGroup>
        <FormRow>
          <label htmlFor="">Body</label>
          <textarea name="post" id="" placeholder="enter post body"></textarea>
        </FormRow>
        <FormRow>
          <button>Add Post</button>
        </FormRow>
      </Form>
    </StyledAddPost>
  );
};

export default AddPost;
