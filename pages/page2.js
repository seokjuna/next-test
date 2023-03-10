import { callApi } from "../src/api";

Page2.getInitialProps = async ({ query }) => { // getInitialProps 함수 정의
    // getInitialProps 함수에서 동적 임포트 사용하기
    const { sayHello } = await import('../src/sayHello'); 
    console.log(sayHello()); 

    const text = query.text || 'none'; // 쿼리 파라미터로부터 text 변수 생성
    const data = await callApi(); // 데이터를 가져오기 위해 API 호출
    return { text, data }; // getInitialProps 함수가 반환하는 값은 페이지 컴포넌트의 속성값으로 전달됨
};

export default function Page2({ text, data }) { // 페이지 컴포넌트에서 getInitialProps 함수가 반환한 값을 사용
    // 동적 임포트로 sayHello 모듈을 가져오는 코드
    function onClick() {
        import('../src/sayHello').then(({ sayHello }) => 
        console.log(sayHello())); 
    }
    return (
        <div>
            <p>this is home page2</p>
            <p>{`text: ${text}`}</p>
            <p>{`data is ${data}`}</p>
            {/* onClick 함수를 버튼에 연결 */}
            <button onClick={onClick}>sayHello</button>
        </div>
    );
}