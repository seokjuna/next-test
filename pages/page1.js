import Head from "next/head";
import { add } from "../src/util";
import styled from "styled-components";

// styled-components를 이용해서 스타일이 적용된 컴포넌트를 생성
const MyP = styled.div`
    color: blue;
    font-size: 18px;
`;

function Page1() {
    return (
        <div>
            <MyP>{`10 + 20 = ${add(10, 20)}`}</MyP>
            <MyP>This is home page</MyP>
            {/* 프로젝트 루트의 static 폴더 밑에 정적 파일을 만들고 경로르 입력하면 정적 파일 서비스 사용 가능*/}
            <img src="/static/icon.png" /> 
            {/* Head 컴포넌트를 사용하면 HTML head 태그에 원하는 돔 요소를 삽입 가능 */}
            <Head>
                <title>page1</title>
            </Head>
            <Head>
                <meta name="description" content="hello world" />
            </Head>
        </div>
    );
}
export default Page1;