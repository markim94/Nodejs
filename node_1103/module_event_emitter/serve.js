var calc = require('/main.js');

var calc_i = new calc();
calc_i.emit('stop');

console.log(calc.title + '에 stop 이벤트 전달완료!');