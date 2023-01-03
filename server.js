const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production'; // NODE_ENV 환경 변수에 따라 개발 모드와 프로덕션 모드를 구분
// 넥스트를 실행하기 위해 필요한 객체와 함수를 생성
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => { // 넥스트의 준비 과정이 끝나면 입력된 함수를 실행
    const server = express();

    // express 웹 서버로 처리할 url 패턴 등록
    server.get('/page/:id', (req, res) => {
        res.redirect(`/page${req.params.id}`);
    });

    // 나머지 모든 요청은 handle 함수가 처리
    // 만약 url 패턴이 없다면 server.js는 넥스트에 내장된 웹 서버와 같은 일을 함
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => { // 사용자 요청을 처리하기 위해 대기
        if (err) throw error;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

