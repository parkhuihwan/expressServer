var fs = require('fs');    			// 파일시스템 모듈
var express = require('express');   // express 모듈
var app = express();                // express 객체 생성

var http = require('http');         // Http 웹 서버 모듈

var server = http.createServer(app);    // 서버 객체 생성
let webSocketServer = require('websocket').server;

let wss = new webSocketServer({
    httpServer: server,
    path:'/wsapi',
    autoAcceptConnections: false
});

wss.on('request', function(req){
    console.log('request called!');
    let connection = req.accept('websocket',req.origin);
    console.log('accept connection!');
    connection.on('message', function(msg){
        console.log('recv msg: '+msg);
    })
    connection.on('close', function(reasonCode, desc){
        console.log('close connection!'+reasonCode);
    })
})

app.set('port',8888);      // 서버 포트 설정



server.listen(app.get('port'),function(){       // 서버 가동 
         console.log('Express server listening on port ' + app.get('port'));
     });
     



// 이미지파일 호스팅 로직 
let i = 0;
app.get('/image/:name',function (req,res){     
    var filename = req.params.name;
    console.log(__dirname+'/images/'+filename);
    fs.exists(__dirname+'/images/'+filename, function (exists) {
        if (exists) {
            fs.readFile(__dirname+'/images/'+filename, function (err,data){
                res.end(data);
            });
        } else {
            res.end('file is not exists');
        }
    })
});


// POST 
app.post('/syncPost', function (req, res) {
    res.send('POST request to the homepage');
  });
// 텍스트 파일호스팅 로직 

app.post('/asyncPost', function (req, res) {
    res.send('POST request to the homepage');
  });
// 텍스트 파일호스팅 로직 
app.get('/text/:name',function (req,res){     
    //i++;
    //if(i % 5 === 0)
    //    return;
    var filename = req.params.name;
    if(req.query.index)
        console.log(__dirname+'/texts/ index:'+filename+req.query.index);
    else 
        console.log(__dirname+'/texts/');
    fs.exists(__dirname+'/texts/'+filename, function (exists) {
        if (exists) {
            if(req.query.index)
                filename = filename+req.query.index;
            fs.readFile(__dirname+'/texts/'+filename, function (err,data){
                //data.index = req.query.index;
                
                res.end(data);
            });
        } else {
            res.end('file is not exists');
        }
    })
});
app.get('/test.json',function (req,res){     
    console.log("redirection to /test/:name !");
    res.redirect('/text/test.json');
});

