ErrorPage.getInitialProps = ({ res, err }) => {
    // 에러 코드를 페이지 컴포넌트의 속성값으로 전달
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode };
};

export default function ErrorPage({ statusCode }) {
    return (
        <div>
            {/* statusCode 변수의 값에 따라 다른 에러 메시지를 출력 */}
            {statusCode === 404 && '페이지를 찾을 수 없습니다.'}
            {statusCode === 500 && '알 수 없는 에러가 발생했습니다.'}
            {!statusCode && '클라이언트에서 에러가 발생했습니다.'}
        </div>
    );
}