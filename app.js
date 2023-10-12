const http = require('http');

const server = http.createServer((req, res)=>{
  // ! 이래나 저러나 써야하는 "골격"에 쓰는 것들은 메인에 쓰긴 합니다.
  //  * 그러나 습관상, 바로 브랜치를 만들도록 합니다.
  res.writeHead(200, {"Content-Type" : "text/plain"})
  res.write("향마루");
  res.end();
});

server.listen(3500);