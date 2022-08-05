const Section01 = () => {
    return (
        <section className="about basicSection">
            <h2><span className="mainColor">CEO's</span> GREETINGS</h2>
            <p>새로운 미래를 열어가는 우tothe영tothe우</p>
            <div className="container">
                <div className="des">
                    <p className="tit">
                        웹서비스의 <span className="mainColor">새로운 미래를</span><br />
                        <span className="mainColor">우tothe영tothe우</span>가 만들어 가겠습니다.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />
                        Quae hic saepe ullam dolores dolor ea et suscipit eos accusantium repudiandae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,<br /> perspiciatis voluptatum
                        explicabo<br />
                        dignissimos ipsum blanditiis ex molestiae totam aspernatur iste, vitae repellat soluta dolor.<br />
                        Doloribus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Corrupti, nam?
                    </p>
                    <p>우tothe영tothe우 임직원 일동</p>
                </div>
                <figure>
                    <img src="./img/project01.jpg" alt="" />
                </figure>
            </div>
            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsive-table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>설립일</th>
                                <td>1995년 11월 30일</td>
                            </tr>
                            <tr>
                                <th>본사주소</th>
                                <td>서울시 종로구 광화문</td>
                            </tr>
                            <tr>
                                <th>임직원수</th>
                                <td>205명</td>
                            </tr>
                            <tr>
                                <th>법인 및 지사</th>
                                <td>84개</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Section01;