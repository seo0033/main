export default function Header(props) {
    return (
        <>
            <div style={props.style}>
                {props.name}는 {props.age}살 입니다.
            </div>
        </>
    )
}

// props : 상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용(properties)