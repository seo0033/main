import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const MainVisual = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    //슬릭 메소드 사용밥
    // 1. 슬릭에 이름을 붙여준다. useRef --> 이름.current
    // 2. 클릭하는 요소에 이벤트를 직접달아준다.

    const MS = useRef(null);
    return (
        <div>
            <h3>나는 아이콘이다</h3>
            <i className="xi-bars"></i>
            <Slider {...settings} ref={MS}>
                <figure>01</figure>
                <figure>02</figure>
                <figure>03</figure>
            </Slider>
            <div className="arrows">
                <i className="xi-arrow-left" onClick={
                    () =>
                        MS.current.slickPrev()
                }></i>
                <i className="xi-arrow-right" onClick={
                    () =>
                        MS.current.slickNext()
                }></i>
            </div>
        </div >
    )
}
export default MainVisual;