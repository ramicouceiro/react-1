import GeneralWrapper from "./Components/GeneralWrapper/GeneralWrapper";
import SmallContainer from "./Components/SmallContainer/SmallContainer";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <>
      <GeneralWrapper>
        <SmallContainer>
          <TodoList />
        </SmallContainer>
      </GeneralWrapper>
    </>
  );
}

export default App;
