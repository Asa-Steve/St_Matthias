import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";

const Form = styled.form`
  height: 70px;

  span {
    color: var(--color-red-700);
    font-size: var(--f-xsm);
    font-style: italic;
    margin-left: 0.5rem;
    padding-inline: 0.5rem;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  padding: 0.2rem 0.2rem;
  border: 1px solid var(--color-grey-300);
  align-items: center;
  height: 40px;

  input {
    flex: 1;
    height: 100%;
    background-color: var(--color-grey-100);
    padding-left: 1rem;
    font-size: var(--f-xsm);
    font-style: italic;
    color: var(--color-grey-600);
  }

  button {
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    font-size: var(--f-md);
    width: 50px;
  }
`;

const SearchArticle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log({ data });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SearchWrap>
        <input
          type="text"
          placeholder="search article..."
          {...register("searchTerm", {
            required: {
              value: true,
              message: "search field cannot be empty",
            },
          })}
        />
        <button>
          <FiSearch />
        </button>
      </SearchWrap>
      {errors?.["searchTerm"] && <span>{errors?.["searchTerm"]?.message}</span>}
    </Form>
  );
};

export default SearchArticle;
