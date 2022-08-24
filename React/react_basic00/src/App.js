import TopBanner from "./pages/TopBanner";
import ListTest from "./pages/ListTest";
import './basic.css';
import { useEffect, useState } from "react";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);

    console.log(data[0])

    return (
        <>
            {/* <TopBanner />
            <ListTest /> */}
            {/* {data[0].id} */}
        </>
    )
}

export default App;


