import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  // var(변수선언) : 중복 선언 가능
  // let(변수선언) : 중복 선언 불가능, 변수에 재할당이 가능
  // const(상수선언) : 중복 선언 불가능, 변수 재선언, 변수 재할당 모두 불가능
  // usestate : 변수 in react(안하면 데이터 변경시 리렌더링이 안됨)
  const [hc, setHc] = useState(false);
  return (

    <div>
      <i className='xi-heart'
        onClick={() => (setNum(num + 1), setHc(!hc))}
        style={{ color: hc && 'red' }}></i> {num}
    </div >

  );//return end

}

export default App;

// 변수이름선언방법
// 1. 카멜케이스 사용
// 2. _, $, 문자로만 시작
// 3. 상수,축약어 : 대문자,스네이크케이스 사용 
// 4. 예약어 사용X (ex. var, let, const, typeof 등)
