import { styled } from "solid-styled-components";
import Post from "./Post";

const EmptyPost = styled("section")`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #d2fff2;
  margin: 32px 0px;
  border-radius: 5px;
`;

export const PostList = (props) => {
  const { state, setState } = props;

  return (
    <>
      {!state.posts.length && <EmptyPost> no hay amor =(</EmptyPost>}
      {state.posts.map(({ title, description, author, image, id }, index) => (
        <Post
          image={image}
          title={title}
          description={description}
          author={author}
          onclick={() => {
            setState("posts", (posts) =>
              posts.filter((post) => post.id !== id)
            );
          }}
        />
      ))}
    </>
  );
};
