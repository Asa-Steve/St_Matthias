import styled from "styled-components";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import { device } from "@/helpers/mediaQueries";
import Modal, { useModalContext } from "./Modal";
import Prompt from "./Prompt";

const Form = styled.form`
  min-height: 400px;

  & > div {
    margin-bottom: 1.5rem;
  }

  button {
    width: 100%;
  }

  @media ${device.tablet} {
    button {
      width: fit-content;
    }
  }
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

const InfantBaptismForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { close } = useModalContext();

  function onSubmit(data) {}

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormRow>
            <label htmlFor="batismName">Infant's baptismal name</label>
            <input
              type="text"
              id="batismName"
              {...register("baptismalName", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter baptismal name"
            />
            {errors?.["baptismalName"] && (
              <span>{errors?.["baptismalName"]?.message}</span>
            )}
          </FormRow>
          <FormRow>
            <label htmlFor="otherName">Infant's other name</label>
            <input
              type="text"
              id="otherName"
              {...register("otherName", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter other name"
            />
            {errors?.["otherName"] && (
              <span>{errors?.["otherName"]?.message}</span>
            )}
          </FormRow>
          <FormRow>
            <label htmlFor="surname">Infant's surname</label>
            <input
              type="text"
              id="surname"
              {...register("surname", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter surname"
            />
            {errors?.surname && <span>{errors?.surname?.message}</span>}
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <label htmlFor="dob">Date of birth</label>
            <input
              type="date"
              id="dob"
              {...register("dob", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
            />
            {errors?.dob && <span>{errors?.dob?.message}</span>}
          </FormRow>
          <FormRow>
            <label htmlFor="pob">Place of birth</label>
            <input
              type="text"
              id="pob"
              {...register("pob", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="e.g F.M.C Yenagoa, Bayelsa State."
            />
            {errors?.pob && <span>{errors?.pob?.message}</span>}
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <label htmlFor="fatherName">Father's name</label>
            <input
              type="text"
              id="fatherName"
              {...register("fatherName", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter father's name"
            />
            {errors?.["fatherName"] && (
              <span>{errors?.["fatherName"]?.message}</span>
            )}
          </FormRow>
          <FormRow>
            <label htmlFor="motherName">Mother's name</label>
            <input
              type="text"
              id="motherName"
              {...register("motherName", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter mother's name"
            />
            {errors?.["motherName"] && (
              <span>{errors?.["motherName"]?.message}</span>
            )}
          </FormRow>
          <FormRow>
            <label htmlFor="phone">Parent's phone No.</label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                setValueAs: (v) => v.trim(),
                pattern: {
                  value: /^0\d{10}(,\s*0\d{10})*$/,
                  message: "Enter valid phone number(s) separated by commas",
                },
              })}
              placeholder="e.g 08155678895 , 07034245567"
            />
            {errors?.["phone"] && <span>{errors?.["phone"]?.message}</span>}
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <label htmlFor="homeTown">Father's home town</label>
            <input
              type="text"
              id="homeTown"
              {...register("homeTown", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="e.g Amarata, Yenagoa, Bayelsa state"
            />
            {errors?.["homeTown"] && (
              <span>{errors?.["homeTown"]?.message}</span>
            )}
          </FormRow>
          <FormRow>
            <label htmlFor="lga">Local Gov. area</label>
            <input
              type="text"
              id="lga"
              {...register("lga", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter local government area"
            />
            {errors?.["lga"] && <span>{errors?.["lga"]?.message}</span>}
          </FormRow>
          <FormRow>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              {...register("state", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="enter state"
            />
            {errors?.["state"] && <span>{errors?.["state"]?.message}</span>}
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <label htmlFor="residentialAddr">Residential address</label>
            <input
              type="text"
              id="residentialAddr"
              {...register("residentialAddr", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              placeholder="e.g Off Azikoro road, Opp. Lagold street Ekeki, Yenagoa, Bayelsa state."
            />
            {errors?.["residentialAddr"] && (
              <span>{errors?.["residentialAddr"]?.message}</span>
            )}
          </FormRow>
          <FormRow>
            <label htmlFor="married">Married in Church ?</label>
            <select
              {...register("married", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
            >
              <option value="" disabled selected>
                Marital status
              </option>
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
            {errors?.["married"] && <span>{errors?.["married"]?.message}</span>}
          </FormRow>
        </FormGroup>

        <FormRow>
          <label htmlFor="sponsor">Name of child's sponsor </label>
          <input
            id="sponsor"
            {...register("sponsor", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            placeholder="Sponsor MUST be a confirmed catholic"
          />
          {errors?.sponsor && <span>{errors?.sponsor?.message}</span>}
        </FormRow>

        <FormRow>
          <Modal.Open opens="infant-form-submit">
            <button>Submit form and make payment</button>
          </Modal.Open>
        </FormRow>
        <Modal.Window name="infant-form-submit">
          <Prompt cancel={close} />
        </Modal.Window>
      </Form>
    </>
  );
};

export default InfantBaptismForm;
