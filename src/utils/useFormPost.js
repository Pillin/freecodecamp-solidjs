import { createState } from "solid-js";
import useForm from "./useForm";
import { createLocalState } from "./persistence";

const url = (number) => `https://placekitten.com/200/${parseInt(300) + number}`;

export const useFormPost = () => {
  let form;
  const [state, setState] = createLocalState({ posts: [] }, "posts");
  const [conf, setConf] = createState({ show: false });

  const initialValues = { title: "", description: "", author: "" };

  const submit = (e) => {
    const { title, description, author } = form.state;
    const id = state.posts.length;
    setState({
      posts: [
        ...state.posts,
        {
          title,
          description,
          author,
          id,
          image: url(id % 10),
        },
      ],
    });
    setConf({ show: false });
    form.setState("title", "");
    form.setState("description", "");
    form.setState("author", "");
  };

  form = useForm({ submit, initialValues });

  return { state, setState, conf, setConf, form };
};
