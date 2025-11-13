import { Icon } from "@iconify/react";
import styled from "styled-components";
import FormRow from "./FormRow";
import TextEditor from "./TextEditor";
import { device } from "@/helpers/mediaQueries";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

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

  @media ${device.tablet} {
    width: 60dvw;
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
  cursor: pointer;

  p {
    font-size: 12px;
    color: var(--color-grey-500);
  }

  svg {
    font-size: var(--f-md);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
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
  }
`;

const AddPost = () => {
  const [banner, setBanner] = useState(null);
  const [bannerError, setBannerError] = useState("");
  const [preview, setPreview] = useState(null);
  const bannerRef = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    if (banner != null) {
      const selectedFile = banner[0];
      setValue("banner", selectedFile);
      const objectURL = URL.createObjectURL(selectedFile);

      setPreview(objectURL);
      setBannerError("");
    }
  }, [banner]);

  function onSubmit(data) {
    if (banner == null) {
      setBannerError("post banner is required");
      return;
    }
    const file = banner[0];
    const formFields = { ...data, banner: file };
  }

  return (
    <StyledAddPost>
      <h2>Create Post</h2>
      <BannerArea onClick={() => bannerRef?.current?.click()}>
        {!preview ? (
          <>
            <Icon icon={"et:upload"}></Icon>
            <p>upload banner</p>
          </>
        ) : (
          <img src={preview} alt="" />
        )}
      </BannerArea>
      <FormRow>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setBanner(e?.target?.files)}
          ref={bannerRef}
          style={{ display: "none" }}
        />
        {bannerError && <span>{bannerError}</span>}
      </FormRow>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormRow>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="enter title"
              {...register("title", {
                required: "this field is required",
              })}
            />
            {errors?.title && <span>{errors?.title?.message}</span>}
          </FormRow>
          <FormRow>
            <label htmlFor="category">Category</label>
            <select
              {...register("category", {
                required: "this field is required",
              })}
              id="category"
            >
              <option value="">select category</option>
              <option value={"cat2"}>cat2</option>
              <option value={"cat3"}>cat3</option>
              <option value={"cat4"}>cat4</option>
            </select>
            {errors?.category && <span>{errors?.category?.message}</span>}
          </FormRow>
        </FormGroup>
        <FormRow>
          <label htmlFor="body">Body</label>
          <textarea
            name="post"
            id="body"
            placeholder="enter post body"
            {...register("body", {
              required: "this field is required",
              minLength: {
                value: 200,
                message: "post body must be at least 200 characters long",
              },
            })}
          ></textarea>

          {errors?.body && <span>{errors?.body?.message}</span>}
        </FormRow>
        <FormRow>
          <button>Add Post</button>
        </FormRow>
      </Form>
    </StyledAddPost>
  );
};

export default AddPost;
