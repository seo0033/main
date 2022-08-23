import Header from "./Header";

function App() {
  // jsx 밖의 주석
  return (
    <header>
      <Header style={{ color: 'red' }} name="seo0" age={3} />
      {/* jsx 안의 주석 */}
      {/* component자체에 style 주는거 X / tag에 직접 설정 O */}
      <nav>
        <ul>
          <li><a href="" style={{ color: 'red', fontSize: '30px' }}>menu01</a></li>
          {/* ; → , / font-size(X) fontSize(O) */}
          <li><a href="">menu02</a></li>
          <li><a href="">menu03</a></li>
          <li><a href="">menu04</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App;
// App함수를 보낸다.

