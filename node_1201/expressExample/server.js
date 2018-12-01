var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');

// 라우터 객체 참조.
var router = express.Router();
// express 객체 생성
var app = express();

app.set('port', process.env.PORT||3000); //고유키워드, 포트번호(process.env의 port번호가 있으면 이 것을 사용 그렇지 않다면 3000설정)

// body-parser를 사용해 x-www-form-unlencoded형태로 전달된 파라미터로 파싱함
// extend: 중첩된 객체표현을 허용할지 말지 정하는 옵션, 객체 안에 객체를 파싱하려면 true로 설정
app.use(bodyParser.urlencoded({extended:false}));

// body-parser를 사용해 application/json형태로 파싱함
app.use(bodyParser.json());

// static 미들웨어를 사용하여 접근 패스 설정.
// 앞에 '/' : 원하는 경로 지정, 뒤에 'public' : 폴더명
app.use('/', static(path.join(__dirname, 'public')));

// 라우팅 함수 등록하고, /precess/login으로 요청 패스를 처리함
// post방식으로 요청할 때는 post방식으로
router.route('/process/login').post(function(req,res)
{
    console.log('/process/login 처리함');
    
    //클라이언트에서 요청할 때, GET방식으로 요청할지 POST방식으로 요청할지 모르는 상태
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password||req.query.password;

    // 응답 전송
    res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 미들웨어 사용 결과입니다.</h1>');
    res.write('<div><p>Param ID :'+paramId+'</p></div>');
    res.write('<div><p>Param Password :'+paramPassword+'</p></div>');
    res.write("<br><br><a href='/login1.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

// 라우터 객체를 app객체에 등록함.
app.use('/', router);

//Express 객체를 받아와 3000번 포트에서 서버 시작.
http.createServer(app).listen(3000,function()
{
    console.log('Express서버가 3000번 포트에서 시작됨.');
});