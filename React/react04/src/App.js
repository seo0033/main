import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  const something = '뭔가있음';
  const DATA = [
    { id: 1, name: '장서영', content: "나는 멍총이" },
    { id: 2, name: '이서영' },
    { id: 3, name: '조서영' },
    { id: 4, name: '윤서영' },
    { id: 5, name: '윤서영' },
    { id: 6, name: '윤서영' },
    { id: 6, name: '윤서영' },
  ]
  return (
    <>
      <Header monga={something} member={DATA} />
      <Main />
      <Footer />
    </>
  );
}

export default App;


