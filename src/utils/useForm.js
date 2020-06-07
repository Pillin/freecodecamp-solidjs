import { createState } from "solid-js";

const useForm = ({ submit, validate, initialValues }) => {
  const [state, setState] = createState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submit) {
      if (validate && !validate(e, state, setState)) {
        return;
      }
      submit(e);
      setState(initialValues);

      console.log({ state });
      return;
    }
  };

  return { handleSubmit, state, setState };
};

export default useForm;
