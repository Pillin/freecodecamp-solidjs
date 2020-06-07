import { styled } from "solid-styled-components";
import { AddButton } from "./Button";

const Container = styled("form")`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border: 1px solid #004980;
  border-radius: 10px;
  margin: 20px 0px;

  input,
  textarea {
    border: 1px solid #004980;
    padding: 10px 5px;
    border-radius: 5px;
  }
`;

const Form = (props) => {
  const {
    state: { title, description, author },
    handleSubmit,
    setState,
  } = props;
  return (
    <Container onsubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder="titulo"
        maxlength="50"
        onInput={({ target: { value } }) => setState({ title: value })}
      />
      <input
        value={author}
        type="text"
        placeholder="Autor"
        maxlength="30"
        onInput={({ target: { value } }) => setState({ author: value })}
      />
      <textarea
        value={description}
        type="text"
        maxLength="370"
        placeholder="descripción"
        onInput={({ target: { value } }) => setState({ description: value })}
      />
      <AddButton type="submit"> Guardar</AddButton>
    </Container>
  );
};

export default Form;
