import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "./FormRow";
import { device } from "@/helpers/mediaQueries";

const Form = styled.form`
  background-color: white;
  padding: 1.5rem;
  height: 100%;
`;

const FormInputGroup = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 1rem;

    div {
      width: 100%;
    }
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="enter full name"
          {...register("fullName", {
            required: {
              value: true,
              message: "this field is required",
            },
          })}
        />
        <span>{errors?.fullName && errors?.fullName?.message}</span>
      </FormRow>
      <FormInputGroup>
        <FormRow>
          <label>Email</label>
          <input
            type="email"
            placeholder="enter e-mail"
            {...register("email", {
              required: {
                value: true,
                message: "this field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              },
            })}
          />
          <span>{errors?.email && errors?.email?.message}</span>
        </FormRow>
        <FormRow>
          <label>Msg Subject</label>
          <input
            type="text"
            placeholder="enter subject"
            {...register("subject", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
          />
          <span>{errors?.subject && errors?.subject?.message}</span>
        </FormRow>
      </FormInputGroup>
      <FormRow>
        <label>Message</label>
        <textarea
          {...register("message", {
            required: {
              value: true,
              message: "this field is required",
            },
          })}
          placeholder="write message here..."
        />
        <span>{errors?.message && errors?.message?.message}</span>
      </FormRow>
      <FormRow>
        <button>Submit Message</button>
      </FormRow>
    </Form>
  );
};

export default ContactForm;
