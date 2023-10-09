import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <div className="wrapper wrapper--flex">
        <Projects />
        <div className="vertical-line"></div>
        <Skills/>
      </div>
    </>
  );
}

export default App;
