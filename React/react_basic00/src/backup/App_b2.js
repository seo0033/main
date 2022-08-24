import { useState } from 'react';
import Test from './backup/list';


const App = () => {
  const [num, setNum] = useState(1);
  const numHamdler = () => (setNum(num + 1))

  return (
    <>
      <h1>{num}</h1>

      {/* <button onClick={numHamdler}num>+ 1</button> */}
      <Test list="룰루랄라" name="서영" age={28} onClick={numHamdler} />
      <Test list="우당탕탕" name="우영우" age={28} onClick={numHamdler} />
      <Test list="권모술수" name="권민우" age={28} />
      <Test list="봄날의햇살" name="최수연" age={28} />
      <div>01</div>
      <div>02</div>
    </>
  )
}

export default App;


