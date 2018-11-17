
var http = require('http');
// express를 사용하려면 http가 불러져 있어야 함.
var express = require('express');

var app = express(); // express 객체 생성


// 기본 포트를 app객체에 속성으로 설정함
// process.env.PORT : process.env 객체에 PORT 속성이 있으면 사용하고, 그렇지 않으면 3000번을 사용하겠다는 의미.
app.set('port', process.env.PORT||3000);

// Express 서버 시작
// 포트 속성을 get()메소드로 꺼내온 후 listen() 메소드를 호출할 떄 전달함
http.createServer(app).listen(app.get('port'), function()
{
    console.log('Express 서버를 시작했습니다 : '+ app.get('port'));
});

