import GlobalStyle from "../src/styles/global";
import ProjectList from "./components/ProjectList";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Title>
          DiAzevedo <span>full stack developer</span>
        </Title>
        <AboutMe />
        <ProjectList />
      </main>
    </>
  );
}

export default App;
