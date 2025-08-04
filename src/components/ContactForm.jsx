import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "./FormRow";

const Form = styled.form`
  /* border: 1px solid red; */
  background-color: white;
  padding: 1.5rem;
`;

const FormInputGroup = styled.div`
  /* border: 1px solid; */
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
        {errors?.fullName && <span>{errors?.fullName?.message}</span>}
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
          {errors?.email && <span>{errors?.email?.message}</span>}
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
          {errors?.subject && <span>{errors?.subject?.message}</span>}
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
        {errors?.message && <span>{errors?.message?.message}</span>}
      </FormRow>
      <FormRow>
        <button>Submit Message</button>
      </FormRow>
    </Form>
  );
};

export default ContactForm;
