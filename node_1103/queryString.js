var url = require('url'); // url 모듈을 로딩함.

// 주소 문자열을 URL객체로 변환.
var curURL = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=starcraft');

// 요청 파라미터 구분하기
var queryString = require('querystring');
var param = queryString.parse(curURL.query);

// Query로 입력되는 값 출력
console.log('요청 파라미터 중 query값 : %s', param.query);

// Query 속성 전체 값 출력
console.log('원본 요청 파라미터 : %s', queryString.stringify(param));