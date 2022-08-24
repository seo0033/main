import { useRef, useState } from "react";
import './basic.css';

const App = () => {

  const [num, setNum] = useState(1);
  const link = useRef(1);
  const [toggle, setToggle] = useState(true);

  const Test = () => {
    return (
      <div>
        hello world
      </div>
    )
  }
  // console.log(num)
  // console.log('App')

  return (
    <>
      {num} / {link.current}

      <section className={toggle ? '' : 'on'}>
        <div>
          {toggle ? 'loading...' : <Test />}
        </div>
      </section>

      <div>000</div>
      {/* {console.log(num, link.current)} */}
      <button onClick={
        () => (
          setNum(num + 1),
          console.log(toggle),
          setToggle(!toggle),
          console.log(num),
          link.current = link.current + 1,
          console.log(link.current)
          // 화살표함수 → 여러개실행할때 ',' 사용
        )
      }>click</button>
    </>
  )
}

export default App;

// 1. 일반함수 사용
// function App() {
//   return <div>001</div>
//   }

// 2. const 사용법(변수에 함수 담아쓰기)
// const App = function(){
//   return <div>001</div>
// }

// 3. const + 화살표함수 사용법
// const App = () => {
//   return <div>001</div>
// }
