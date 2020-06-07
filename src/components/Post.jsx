import { styled } from "solid-styled-components";
import { CloseButton } from "./Button";

const CatImg = styled("img")`
  inline-size: max-content;
`;

const Container = styled("section")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  margin: 20px 0px;
  background-color: #d2fff2;
  border-radius: 10px;
`;

const Title = styled("h3")`
  width: calc(100% - 220px);
  padding: 0px 10px;
  margin-top: 10px;
`;

const Description = styled("p")`
  width: calc(100% - 220px);
  padding: 0px 10px;
`;

const Author = styled("small")`
  align-self: flex-end;
  padding: 0px 10px;
`;

const Post = (props) => {
  const { image, title, description, author, onclick } = props;
  return (
    <Container>
      <CatImg src={image} alt="imagen de gatito" />
      <CloseButton onclick={onclick} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Author>Por: {author}</Author>
    </Container>
  );
};

export default Post;
