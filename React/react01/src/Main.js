const Main = ({ jang, work }) => {
    return (
        <main>
            {jang}은 {work}를 하고싶다.
            {/* tag 안에 있는것 > 문자로 받아들임 > {}사용 */}
            {/* props : 객체 */}
        </main>
    )
}
//전달받은 값이 없을 때 기본으로 전해주는 값.
Main.defaultProps = {
    work: '놀기'
}
export default Main;