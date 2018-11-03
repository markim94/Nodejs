function add(a, b, callback)
{
    var result = a+b; // add함수가 받은 a, b의 값을 더하여 result에 저장
    callback(result); // 저장된 result를 callback함수로 전달

    var history = function() // add 함수 내에 history 함수를 만듬
    {
        return a + '+' + b + '=' + result; // history함수는 a+b=result 형태로 리턴함
    };

    return history // history함수를 리턴함
}

var add_history = add(10, 10, function(result)
{
    console.log('파라미터로 전달된 콜백 함수 호출됨!');
    console.log('더하기(10,10)의 결과 >> %d', result);
});

console.log('결과 값으로 받은 함수 실행 결과 >> ' + add_history());