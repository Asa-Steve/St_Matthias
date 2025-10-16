import styled from "styled-components";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import { device } from "@/helpers/mediaQueries";

const Form = styled.form`
  /* border: 1px solid; */
  min-height: 400px;

  textarea {
    height: 170px;
  }
`;

const TextArea = styled.textarea`
  height: 70px !important;
`;

const FormGroup = styled.div`
  @media ${device.desktop} {
    display: flex;
    gap: 1rem;
    div {
      width: 100%;
    }
  }
`;

const MassRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {}

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormRow>
            <label>Full name</label>
            <input
              type="text"
              {...register("fullname", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter full name"
            />
            {errors?.fullname && <span>{errors?.fullname?.message}</span>}
          </FormRow>{" "}
          <FormRow>
            <label>E-mail</label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "this field is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                },
              })}
              placeholder="enter email"
            />
            {errors?.email && <span>{errors?.email?.message}</span>}
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <label>Mass stipend</label>
            <input
              type="number"
              {...register("stipend", {
                required: {
                  value: true,
                  message: "this field is required",
                },
                min: {
                  value: 200,
                  message: "stipend must be N200 and above",
                },
              })}
              placeholder="enter amount"
            />
            {errors?.stipend && <span>{errors?.stipend?.message}</span>}
          </FormRow>
          <FormRow>
            <label>Novena</label>
            <select
              {...register("novena", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
            >
              <option value="" disabled selected>
                choose novena days
              </option>
              <option value={1}>1 day</option>
              <option value={2}>2 days</option>
            </select>
            {errors?.novena && <span>{errors?.novena?.message}</span>}
          </FormRow>
        </FormGroup>
        <FormRow>
          <label>Requested for</label>
          <input
            type="text"
            {...register("request", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            placeholder="e.g praying for exam success"
          />
          {errors?.request && <span>{errors?.request?.message}</span>}
        </FormRow>
        <FormRow>
          <label>Intention</label>
          <textarea
            {...register("intention", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            placeholder="write intentions here..."
          />
          {errors?.intention && <span>{errors?.intention?.message}</span>}
        </FormRow>
        <FormRow>
          <label>Leave us a note</label>
          <TextArea
            {...register("note", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            placeholder="Leave us any additional note describing how you would the mass request done..."
          />
          {errors?.note && <span>{errors?.note?.message}</span>}
        </FormRow>
        <FormRow>
          <button>Submit mass request</button>
        </FormRow>
      </Form>
    </>
  );
};

export default MassRequestForm;
