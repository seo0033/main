function Header(props) {
    return (
        <ul>
            {props.monga}
            {/* <li>{props.member[0].name}</li>
            <li>{props.member[1].name}</li>
            <li>{props.member[2].name}</li>
            <li>{props.member[3].name}</li> */}
            {props.member.map(el => <li key={el.id}>{el.name}</li>).reverse().slice(0, 2)}
        </ul>
    )
}

export default Header;

// .map()
// .reverse() : 역순으로 표시
// .slice(0, 2) : 0번,2번 선택 표시