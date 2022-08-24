import { useState } from "react";
import { BsChevronBarUp } from "react-icons/bs";

const TopBanner = () => {
    // 1. 아이콘 클릭
    // 2. 아이콘을 클릭하면 TopBanner의 class에 "on" 을 붙였다가 뗀다.
    // 3. 변수를 만들어서 true / false 되는 스위치를 만든다.
    // 4. true / false 에 따라서 class에 "on" 을 붙였다가 뗀다.

    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={`TopBanner ${toggle ? 'on' : ''}`}>
                <h2>Lorem ipsum dolor sit. {toggle ? 'on' : ''}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                    Soluta vitae voluptatem voluptatum quas vel incidunt?</p>
                <a href="" onClick={
                    (e) => {
                        e.preventDefault();
                    }
                }>more</a>
            </div>
            <span onClick={() => {
                setToggle(!toggle)
            }} className={toggle ? 'btn on' : 'btn'}>
                <BsChevronBarUp />
            </span>
        </>
    )
}

export default TopBanner;