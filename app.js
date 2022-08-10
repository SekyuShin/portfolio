
// ref : https://expressjs.com/ko/
// node_modules의 express 패키지를 가져오고 app에서 express()함수를 실행한다. 
var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var connMySql = require('./connMySql');



app.use(express.json());
app.use(cors());

//DB 전달 예시, client-side rendering
app.get('/test/*',function(req,res){
    res.json({name:'black shoes', value:'this is funny,'+req.json});
})
app.get('/projects/*',function(req,res){
    const rt = connMySql.connect(req.path);
    console.log(rt);
    res.send(rt);
})


//해당 경로의 static file들을 사용하겠다.
app.use(express.static(path.join(__dirname,'client/build'))); 

//get or post으로 접근 가능하다.
//url로 접근하면 get
// '/' 홈에 접근을 의미
app.get('/', function(req, res) {
    console.log('Connect client');
    res.sendFile(path.join(__dirname,'client/build/index.html'));
})


// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(3030, function() {

    console.log('start! express server');
})