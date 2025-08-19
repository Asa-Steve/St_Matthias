import { device } from "@/helpers/mediaQueries";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "./FormRow";
import { useEffect } from "react";

const Form = styled.form`
  div:has(input[type="number"]) {
    max-width: 500px;
  }
  div:has(button) {
    margin-top: 2rem;
  }
`;

const FormRowGroup = styled(motion.div)`
  div {
    margin-top: 1rem;
  }
  @media ${device.tablet} {
    display: flex;
    column-gap: 1rem;
    div {
      margin-top: 0;
      flex: 0 1 100%;
    }
  }
`;

const FormSwitch = ({ formType, recordType }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   Resetting the form fields when it changes
  useEffect(() => {
    reset();
  }, [formType, recordType, reset]);

  const isForBaptism = recordType === "baptism";

  // today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AnimatePresence mode="wait">
        {formType === "name" && (
          // For When the User is trying to search by Name
          <FormRowGroup
            key={"name"}
            initial={{ opacity: 0, y: -20 }} // when it enters
            animate={{ opacity: 1, y: 0 }} // while it’s visible
            exit={{ opacity: 0, y: 20 }} // when it leaves
            transition={{ duration: 0.3 }}
          >
            <FormRow>
              <label htmlFor={isForBaptism ? "bname" : "hbname"}>
                {isForBaptism ? "Baptismal Name" : "Husband's Name"}
              </label>
              <input
                type="text"
                id={isForBaptism ? "bname" : "hbname"}
                placeholder={`enter ${
                  isForBaptism ? "baptismal" : "husband's"
                } name`}
                {...register(isForBaptism ? "bname" : "hbname", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              />
              {errors?.[isForBaptism ? "bname" : "hbname"] && (
                <span>
                  {errors?.[isForBaptism ? "bname" : "hbname"]?.message}
                </span>
              )}
            </FormRow>
            <FormRow>
              <label htmlFor={isForBaptism ? "other" : "wfname"}>
                {isForBaptism ? "Other Name" : "Wife's Name"}
              </label>
              <input
                type="text"
                id={isForBaptism ? "other" : "wfname"}
                placeholder={`enter ${isForBaptism ? "other" : "wife's"} name`}
                {...register(isForBaptism ? "oname" : "wfname", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              />
              {errors?.[isForBaptism ? "oname" : "wfname"] && (
                <span>
                  {errors?.[isForBaptism ? "oname" : "wfname"]?.message}
                </span>
              )}
            </FormRow>
            {isForBaptism && (
              <FormRow>
                <label htmlFor="surname">Surname Name</label>
                <input
                  type="text"
                  id="surname"
                  placeholder="enter surname"
                  {...register("surname", {
                    required: {
                      value: true,
                      message: "this field is required",
                    },
                  })}
                />
                {errors?.surname && <span>{errors?.surname?.message}</span>}
              </FormRow>
            )}
          </FormRowGroup>
        )}

        {formType === "id" && (
          // For When the User is trying to search by ID
          <FormRowGroup
            key={"id"}
            initial={{ opacity: 0, y: -20 }} // when it enters
            animate={{ opacity: 1, y: 0 }} // while it’s visible
            exit={{ opacity: 0, y: 20 }} // when it leaves
            transition={{ duration: 0.3 }}
          >
            <FormRow>
              <label htmlFor={isForBaptism ? "lb-no" : "lm-no"}>
                {isForBaptism ? "LB" : "LM"}-Number
              </label>
              <input
                type="number"
                id={isForBaptism ? "lb-no" : "lm-no"}
                placeholder={`enter ${isForBaptism ? "lb" : "lm"} number`}
                {...register(isForBaptism ? "lb" : "lm", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              />
              {errors?.[isForBaptism ? "lb" : "lm"] && (
                <span>{errors?.[isForBaptism ? "lb" : "lm"]?.message}</span>
              )}
            </FormRow>
          </FormRowGroup>
        )}
        {formType === "date" && (
          // For When the User is trying to search by Date range
          <FormRowGroup
            key={"date"}
            initial={{ opacity: 0, y: -20 }} // when it enters
            animate={{ opacity: 1, y: 0 }} // while it’s visible
            exit={{ opacity: 0, y: 20 }} // when it leaves
            transition={{ duration: 0.3 }}
          >
            <FormRow>
              <label htmlFor="startdate">
                {isForBaptism ? "Baptism" : "Marriage"} records from
              </label>
              <input
                type="date"
                id="startdate"
                {...register("startdate", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              />
              {errors?.startdate && <span>{errors?.startdate?.message}</span>}
            </FormRow>
            <FormRow>
              <label htmlFor="enddate">
                {isForBaptism ? "Baptism" : "Marriage"} records to
              </label>
              <input
                type="date"
                id="enddate"
                max={today} // restricting future dates
                {...register("enddate", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              />
              {errors?.enddate && <span>{errors?.enddate?.message}</span>}
            </FormRow>
          </FormRowGroup>
        )}
      </AnimatePresence>
      <FormRow>
        <button>Search Archive</button>
      </FormRow>
    </Form>
  );
};

export default FormSwitch;
