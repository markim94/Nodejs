var result = 0;

// 영역 구분을 위한 id값 : duration_sum
console.time("duration_sum");

for(var i=1; i<=1000; i++)
{
    result += i;
}

console.timeEnd("duration_sum");

console.log('result>>%d', result);
console.dir(result);


// 파일이름 출력
console.log('current file name > %s', __filename);
console.log('current file name > %s', __dirname);