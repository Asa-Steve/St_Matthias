import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRow from "./FormRow";
import { formatCurrency } from "@/helpers/helpers";
import { device } from "@/helpers/mediaQueries";

const StyledDonationForm = styled.div`
  padding: 1rem;

  @media ${device.tablet} {
    padding-block-start: 0;
    p {
      font-weight: bold;
    }
  }
`;

const Form = styled.form`
  height: fit-content;
  padding-block: 1rem;
  div:has(input, button) {
    input {
      text-align: center;
      border: 1px solid var(--color-grey-300);
      height: 40px;
      border-radius: 5px;
    }

    &:nth-of-type(2) {
      margin-bottom: 1.5rem;
    }
    button {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    padding-block: 0;
  }
`;

const DonationAmount = styled.div`
  margin-block: 1rem 0rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    width: 60px;
    text-align: center;
    border-radius: 5px;
    background-color: var(--color-grey-200);
    font-weight: bold;
    font-size: var(--f-xsm);
  }
`;

const Amounts = styled.div`
  /* border: 1px solid red; */
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 0.5rem;
  padding: 0.3rem;
`;
const Amount = styled.div`
  border: 1px solid var(--color-grey-400);
  width: fit-content;
  padding: 0 0.5rem;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: bold;
  flex: 1 0 100px;
  cursor: pointer;
  ${(props) =>
    props.active !== "true"
      ? css`
          &:hover {
            background-color: var(--color-secondary);
            color: var(--color-grey-0);
          }
        `
      : css`
          background-color: var(--color-primary);
          color: var(--color-grey-0);
        `};
`;

const DonationAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

const DonationForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Watch the "amount" field from RHF
  const amountValue = watch("amount");

  function onSubmit(data) {
    console.log("Form Data:", data);
  }

  return (
    <StyledDonationForm>
      <p>
        All donations directly impact our ministry and help us further our
        mission
      </p>

      {/* Preset Amount Buttons */}
      <DonationAmount>
        <Top>
          <h5>Donation Amount *</h5>
          <span>NGN </span>
        </Top>
        <Amounts>
          {DonationAmounts.map((amt, idx) => (
            <Amount
              active={Number(amountValue) === amt ? "true" : "false"}
              key={idx}
              onClick={() => {
                setValue("amount", amt, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            >
              {formatCurrency(amt)}
            </Amount>
          ))}
        </Amounts>
      </DonationAmount>

      {/* Donation Form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <FormRow>
          <input
            type="text"
            placeholder="Enter full name"
            {...register("fullname", {
              required: {
                value: true,
                message: "This field is required. It could be 'Anonymous'.",
              },
            })}
          />
          {errors?.fullname && <span>{errors.fullname.message}</span>}
        </FormRow>

        {/* Amount */}
        <FormRow>
          <input
            type="number"
            min={1000}
            placeholder="Enter amount"
            {...register("amount", {
              required: {
                value: true,
                message: "This field is required.",
              },
              min: {
                value: 1000,
                message: "Amount cannot be less than N1,000",
              },
            })}
          />
          {errors?.amount && <span>{errors.amount.message}</span>}
        </FormRow>

        {/* Submit */}
        <FormRow>
          <button type="submit">Donate now</button>
        </FormRow>
      </Form>
    </StyledDonationForm>
  );
};
export default DonationForm;
