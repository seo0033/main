const DATA = [
    { id: 1, name: '장서영', age: 28, sleep: false },
    { id: 2, name: '이서영', age: 28, sleep: true },
    { id: 3, name: '김서영', age: 28, sleep: true },
]

const List = () => {
    return (
        <>
            {DATA[0].name}
            <hr />
            <ul>
                <li>{DATA[1].name}은 {DATA[1].age}살 {DATA[1].sleep && '자고싶당'}</li>
                <li>{DATA[0].name}은 {DATA[0].age}살 {DATA[0].sleep ? '자고싶당' : '개운하다'}</li>
            </ul>
            <hr />
            <ul>
                {
                    DATA.map(
                        (it, idx) =>
                            <li key={it.id}>
                                {idx + 1}번 {it.name}은 {it.age}살 {it.sleep ? '자고싶당' : '개운하다'}
                            </li>
                    ).slice(0, 2).reverse()
                }
            </ul>
            <hr />
            <ul>
                {
                    DATA.map(it =>
                        <li key={it.id}>
                            {it.name} {it.age} {it.sleep ? "sleeping" : "playing"}
                        </li>)
                }
            </ul>
        </>
    )
}

export default List;