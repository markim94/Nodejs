// http 모듈을 통해 웹서버 기능을 담당하는 서버 객체를 생성할 수 있음
var http = require('http');

// 웹 서버 객체 생성
var myServer = http.createServer();

// 3000번 포트 지정
var connectPort = 3000;

// myServer에 listen을 이용하여 서버를 시작하는 것.
myServer.listen(connectPort, function(){
    console.log('웹서버가 시작되었습니다 : %d', connectPort);
});