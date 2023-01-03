import Link from "next/link";

// Component 속성값은 현재 렌더링하려는 페이지의 컴포넌트이고
// pageProps 속성값은 해당 페이지의 getInitialProps 함수가 반환한 값
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/* 메뉴 UI 구현 */}
            <Link href="/page1">
                page1
            </Link>
            <Link href="/page2">
                page2
            </Link>
            {/* 페이지 컴포넌트 렌더링 */}
            <Component {...pageProps} /> 
        </div>
    )
}