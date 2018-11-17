var http = require('http');
var express = require('express');

var app = express();

app.use(function(req, res, next) // use메소드를 사용하여 첫번째 미들웨어를 설정함
// next() 메소드를 호출하면 그 다음 미들웨어가 처리할 수 있도록 순서를 넘길 수 있음.
{
    console.log('첫 번째 미들웨어에서 요청을 처리함.');


    // request 객체에 user라는 속성을 추가하여 'markim'라는 문자열 값 추가.
    req.user = 'markim';

    next(); // 두번째 미들웨어로 속성을 넘겨줌
});

// 두 번째 미들웨어
app.use('/', function(req,res,next)
{
    console.log('두 번째 미들웨어에서 요청을 처리함.');
    res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});

    res.end('<h1>Express서버에서 ' + req.user +'가 응답한 결과입니다.</h1>');
});

// Express 객체를 받아와 3000번 포트에서 서버 시작.
http.createServer(app).listen(3000, function()
{
    console.log('Express서버가 3000번 포트에서 시작됨');
});
