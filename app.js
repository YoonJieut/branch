console.log('hi');

const http = require('http');

const server = http.createServer((req, res)=>{

  
});

server.listen(3500, (err)=>{
  if (!err){
    console.error('서버 안 돌아감');
  } else {
    // ! 수퍼 꿀팁, 링크를 만들어 놓으면 눌러서 바로 넘어가면 테스트하기 편하다.
    console.log('3500 포트에 돌아감 . http://localhost:3500');
  }
})