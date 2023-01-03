import Head from "next/head";
import Link from "next/link";

function Page1() {
    return (
        <div>
            <Link href="/page2">
                page2로 이동
            </Link>
            <p>This is home page</p>
            {/* 프로젝트 루트의 static 폴더 밑에 정적 파일을 만들고 경로르 입력하면 정적 파일 서비스 사용 가능*/}
            <img src="/static/icon.png" /> 
            {/* Head 컴포넌트를 사용하면 HTML head 태그에 원하는 돔 요소를 삽입 가능 */}
            <Head>
                <title>page1</title>
            </Head>
            <Head>
                <meta name="description" content="hello world" />
            </Head>
            {/* 넥스트는 style-jsx 패키지를 통해서 css-in-js 방식을 지원 */}
            <style jsx>{`
                p {
                    color: blue;
                    font-size: 18px;
                }
            `}</style>
        </div>
    );
}
export default Page1;