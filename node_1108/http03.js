// http 모듈을 통해 웹서버 기능을 담당하는 서버 객체를 생성할 수 있음
var http = require('http');

// 웹 서버 객체 생성
var myServer = http.createServer();

// 3000번 포트 지정
var myPort = 3000;

myServer.listen(myPort, function(){
    console.log('웹서버가 시작되었습니다: %d', myPort);
})

myServer.on('connection', function(socket)
{
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});

myServer.on('request', function(req, res)
{
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);
});

myServer.on('close', function()
{
    console.log('서버가 종료됩니다.');
});
