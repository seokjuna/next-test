const express = require('express');
const next = require('next');

// 넥스트에서 서버사이드 렌더링 결과 캐싱
const url = require('url');
const lruCache = require('lru-cache'); // 서버사이드 렌더링 결과를 캐싱하기 위해 lru-cache 패키지를 이용
// 최대 100개의 항목을 저장하고 각 항목은 60초 동안 저장
const ssrCache = new lruCache({
    max: 100,
    maxAge: 1000 * 60,
});

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

    // page1, /page2 요청에 대해 서버사이드 렌더링 결과를 캐싱
    server.get(/^\/page[1-9]/, (req, res) => {
        return renderAndCache(req, res);
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

async function renderAndCache(req, res) { // renderAndCache 함수에서 캐싱 기능을 구현
    const parseUrl = url.parse(req.url, true);
    const cacheKey = parseUrl.path; // 쿼리 파라미터가 포함된 경로를 키로 사용
    if (ssrCache.has(cacheKey)) { // 캐시가 존재하면 캐시에 저장된 값을 사용
        console.log('캐시 사용');
        res.send(ssrCache.get(cacheKey));
        return;
    }
    try {
        const { query, pathname } = parseUrl;
        // 캐시가 없으면 넥스트의 renderToHTML 메서드를 호출하고, await 키워드를 사용해서 처리가 끝날 때까지 기다림
        const html = await app.renderToHTML(req, res, pathname, query); 
        
        if (res.statusCode === 200) {
            ssrCache.set(cacheKey, html); // renderToHTML 함수가 정상적으로 처리됐으면 그 결과를 캐싱
        }
        res.send(html);
    } catch (err) {
        app.renderError(err, req, res, pathname, query);
    }
}

