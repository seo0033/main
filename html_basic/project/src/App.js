import './css/basic.css';
import './css/main.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// react-router-dom 에 있는 함수중에 가져올 때 : { 가져올거 }

import Nav from './doc/Nav';

import Section01 from './doc/Section01';
import Section02 from './doc/Section02';
import Section03 from './doc/Section03';
import Section04 from './doc/Section04';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Section04 />} />
                <Route path='/section01' element={<Section01 />} />
                <Route path='/section02' element={<Section02 />} />
                <Route path='/section03' element={<Section03 />} />
            </Routes>
        </BrowserRouter >
    )
}

export default App;

