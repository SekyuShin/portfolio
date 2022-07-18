
// ref : https://expressjs.com/ko/
// node_modules의 express 패키지를 가져오고 app에서 express()함수를 실행한다. 
var express = require('express');
var app = express();

//get or post으로 접근 가능하다.
//url로 접근하면 get
// '/' 홈에 접근을 의미
app.get('/', function(req, res) {
    res.send("<h1>Express server Start</h1>");
})

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(3000, function() {
    console.log('start! express server');
})
