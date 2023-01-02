module.exports = {
    webpack: config => { /* 웹팩 설정을 변경하기 위한 함수 . 이 함수의 첫 번째 매개변수로 웹팩 설정이 넘어옴 */
        config.module.rules.push({ /* 넥스트의 웹팩 설정에 file-loader 추가 */
            test: /.(png|jpg)$/, 
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?]hash', /* 쿼리 파라미터 부분에 해시를 추가해서 파일의 내용이 변경될 때마다 파일의 경로도 수정*/
                        emitFile: false, /* 넥스트는 static 폴더의 정적 파일을 그대로 서비스하기 때문에 파일 복사 필요 x */
                        publicPath: '/',
                    },
                },
            ],
        });
        return config;
    },
};