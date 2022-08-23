import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <Wrapper>
            <Header />
            {/* 첫 글자 대문자쓰기 */}
            <Main jang="장서영" work="맛있는거 먹기" />
            <Main jang="0서영" work="집가기" />
            <Main jang="1서영" work="누워있기" />
            <Main jang="2서영" />
            <Footer />
        </Wrapper>
    )
}

export default App;