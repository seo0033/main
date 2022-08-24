import Some from './some';

const Test = ({ list, age, name }) => {
    // console.log(inner)
    //const {inner} = props

    return (
        <div>
            <button onClick={onClick}>^^*</button>
            <h2>
                happy {list} {age}살 {name}'s list
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>

                {/* btn.addEventListener('click',()=>{ }) : JS에서 위와같음  */}
            </h2>
            <Some list={list} />
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
    )
}

export default Test;