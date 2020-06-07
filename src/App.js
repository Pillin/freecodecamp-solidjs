import { useFormPost } from "./utils/useFormPost";
import { PostList } from "./components/PostList";
import { PostListContainer, TitleContainer } from "./components/utils";
import PostForm from "./components/Containers/PostForm";

import "./App.css";

function App() {
  const { conf, setConf, state, setState, form } = useFormPost();
  return (
    <div class="App">
      <PostListContainer>
        <TitleContainer>
          <h1>Postea tu amor por los gatos</h1>
          <PostForm conf={conf} setConf={setConf} form={form} />
        </TitleContainer>
        <PostList state={state} setState={setState} />
      </PostListContainer>
    </div>
  );
}

export default App;
