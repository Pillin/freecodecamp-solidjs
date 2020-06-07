import Form from "../Form";
import { AddButton } from "../Button";

const PostForm = (props) => {
  const { conf, setConf, form } = props;
  return (
    <>
      {!conf.show && (
        <AddButton onclick={() => setConf({ show: true })}>Agregar</AddButton>
      )}
      {conf.show && <Form {...form} />}
    </>
  );
};

export default PostForm;
